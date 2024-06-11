from rocket import Rocket

rocket0 = Rocket(50, 5000, 2)
rocket0.add_stage(350, 0.9)
rocket0.add_stage(375, 0.9)
rocket0.optimize()