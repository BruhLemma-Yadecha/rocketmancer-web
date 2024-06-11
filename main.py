from math import exp
from scipy.optimize import differential_evolution, LinearConstraint

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
        
    @property
    def wet_mass(self):
        return self.stage_mass + self.payload_mass
    
    @property
    def dry_mass(self):
        return self.stage_mass * (1 - self.propellant_mass_fraction) + self.payload_mass
    
    @property
    def structural_mass(self):
        return self.stage_mass * (1 - self.propellant_mass_fraction)
    
    @property
    def propellant_mass(self):
        return self.stage_mass * self.propellant_mass_fraction
    
    @property
    def exhaust_velocity(self):
        return self.specific_impulse * 9.80665
    
    @property
    def mass_ratio(self):
        return exp(self.delta_v / (self.exhaust_velocity))
        
class Rocket:
    def __init__(self, payload, delta_v, total_stages):
        self.total_stages = total_stages
        self.payload = payload
        self.delta_v = delta_v
        self.stages = []
    
    @property
    def total_mass(self):
        return self.stages[-1].wet_mass if self.stages else 0.0
        
    def add_stage(self, specific_impulse, propellant_mass_fraction):
        self.stages.append(Stage(self.total_stages - len(self.stages) - 1, specific_impulse, propellant_mass_fraction))
        
    def build(self, delta_v_fractions):
        delta_v_split = [self.delta_v * f for f in delta_v_fractions]
        payload_mass = self.payload
        for i in range(self.total_stages):
            self.stages[i].build(payload_mass, delta_v_split[i])
            payload_mass = self.stages[i].wet_mass
         
    def optimize(self):
        def objective(delta_v_fractions):
            self.build(delta_v_fractions)
            return self.total_mass if self.total_mass > 0 else float('inf')
        
        bounds = [(0, 1) for _ in range(self.total_stages)]
        linear_constraint = LinearConstraint([1] * self.total_stages, 1, 1)
        result = differential_evolution(objective, bounds, constraints=[linear_constraint], hess=0)
        self.build(result.x)
        print(result)
        self.print_configuration()
        self.delta_v_fractions = result.x
        
    @property
    def delta_v_fractions(self):
        return [stage.delta_v for stage in self.stages]
    
    def print_configuration(self):
        for stage in self.stages:
            print("Stage {}".format(stage.stage))
            print("     Wet:", stage.wet_mass)
            print("     Dry:", stage.dry_mass)
            print("     Payload:", stage.payload_mass)
            print("     Mass Ratio:", stage.mass_ratio)
            print("     Delta V:", stage.delta_v)
            
        print("Total Mass:", self.total_mass)
        print()

rocket0 = Rocket(50, 5000, 2)
rocket0.add_stage(350, 0.9)
rocket0.add_stage(375, 0.9)
rocket0.optimize()