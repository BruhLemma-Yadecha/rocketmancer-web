from typing import List

from scipy.optimize import differential_evolution, LinearConstraint
from .stage import Stage


class Rocket:
    def __init__(self, payload: float, delta_v: float, total_stages: int):
        self.total_stages = total_stages
        self.payload = payload
        self.delta_v = delta_v
        self.stages = []

    @property
    def total_mass(self):
        return self.stages[-1].wet_mass if self.stages else 0.0

    def add_stage(self, specific_impulse: float, propellant_mass_fraction: float):
        new_stage = Stage(
            self.total_stages - len(self.stages) - 1,
            specific_impulse,
            propellant_mass_fraction,
        )
        self.stages.append(new_stage)

    def build(self, delta_v_fractions: List[float]):
        delta_v_split = [self.delta_v * f for f in delta_v_fractions]
        payload_mass = self.payload
        for i in range(self.total_stages):
            self.stages[i].build(payload_mass, delta_v_split[i])
            payload_mass = self.stages[i].wet_mass

    def __objective__(self, delta_v_fractions: List[float]):
        self.build(delta_v_fractions)
        return self.total_mass

    def optimize(self):
        # needs at least 1 stage
        if self.total_stages < 1:
            raise ValueError("Rocket must have at least 1 stage")

        bounds = [(0, 1) for _ in range(self.total_stages)]
        linear_constraint = LinearConstraint([1] * self.total_stages, 1, 1)
        initial_configuration = [1 / self.total_stages] * self.total_stages
        result = differential_evolution(
            self.__objective__,
            bounds,
            constraints=[linear_constraint],
            workers=-1,
            updating="deferred",
            disp=True,
            x0=initial_configuration,
        )
        if result.success:
            self.delta_v_fractions = result.x
            self.build(result.x)
        else:
            print("Failed to optimize! Rocket may be impossible or nearly impossible!")

    @property
    def delta_v_split(self):
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

    def to_json(self):
        return {
            "payload": self.payload,
            "totalDeltaV": self.delta_v,
            "totalStages": self.total_stages,
            "totalMass": self.total_mass,
            "stages": [stage.to_json() for stage in self.stages],
        }
