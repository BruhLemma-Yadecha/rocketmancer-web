from math import exp
import numpy as np
import scipy.optimize as opt

class Stage:
    def __init__(self, stage, specific_impulse, propellant_mass_fraction):
        self.stage = stage
        self.specific_impulse = specific_impulse
        self.propellant_mass_fraction = propellant_mass_fraction
        self.payload_mass = None
        self.delta_v = None
        self.mass_ratio = None
        self.wet_mass = None
        self.dry_mass = None
        
    def build(self, payload_mass, delta_v):
        self.payload_mass = payload_mass
        self.delta_v = delta_v
        g0 = 9.80665
        exhaust_velocity = self.specific_impulse * g0
        self.mass_ratio = exp(delta_v / exhaust_velocity)
        self.stage_mass = (self.payload_mass * (1 - self.mass_ratio)) / (self.mass_ratio * (1 - self.propellant_mass_fraction) - 1)
        self.dry_mass = self.stage_mass * (1 - self.propellant_mass_fraction)
        self.wet_mass = self.stage_mass + self.payload_mass
        
class Rocket:
    def __init__(self, payload, delta_v, total_stages):
        self.total_stages = total_stages
        self.payload = payload
        self.delta_v = delta_v
        self.stages = []
        self.total_mass = None
        
    def add_stage(self, specific_impulse, propellant_mass_fraction):
        self.stages.append(Stage(self.total_stages - len(self.stages) - 1, specific_impulse, propellant_mass_fraction))
        
    def build(self, delta_v_fractions):
        delta_v_split = [self.delta_v * f for f in delta_v_fractions]
        payload_mass = self.payload
        for i in range(self.total_stages):
            self.stages[i].build(payload_mass, delta_v_split[i])
            payload_mass = self.stages[i].wet_mass
        
        print(*delta_v_split)
        for stage in self.stages:
            print("S{}: {} (Wet), {} (Payload)".format(stage.stage, stage.wet_mass, stage.payload_mass))
        self.total_mass = sum(stage.wet_mass for stage in self.stages)
        print("Total Mass:", self.total_mass)
        print()
        
    def optimize(self):
        def constraint(delta_v_fractions):
            return sum(delta_v_fractions) - 1
        
        def objective(delta_v_fractions):
            self.build(delta_v_fractions)
            return self.total_mass if self.total_mass > 0 else float('inf')
        
        initial_guess = [1.0 / self.total_stages] * self.total_stages
        bounds = [(0, 1) for _ in range(self.total_stages)]
        result = opt.minimize(objective, initial_guess, constraints={'type': 'eq', 'fun': constraint}, bounds=bounds)
        self.build(result.x)
        print(result)
        return result.x

rocket0 = Rocket(50, 10_000, 2)
rocket0.add_stage(350, 0.9)
rocket0.add_stage(375, 0.9)
rocket0.optimize()
print("Total Mass:", rocket0.total_mass)