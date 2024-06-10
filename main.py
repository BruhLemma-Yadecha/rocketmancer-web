from math import exp

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
        self.mass_ratio = exp(delta_v / self.specific_impulse / 9.80665)
        self.wet_mass = ((1 - self.mass_ratio) * self.payload_mass) / (self.mass_ratio * (1 - self.propellant_mass_fraction) - 1)
        self.dry_mass = (self.wet_mass - self.payload_mass) * (1 - self.propellant_mass_fraction)
        
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
        for i in range(self.total_stages - 1, -1, -1):
            self.stages[i].build(payload_mass, delta_v_split[i])
            payload_mass = self.stages[i].wet_mass
        self.total_mass = payload_mass

rocket0 = Rocket(50_000, 2_500, 1)
rocket0.add_stage(350, 0.9)
rocket0.build([1.0])
print(rocket0.total_mass)