# rocketmancer-web
A WIP web port of [rocketmancer](https://github.com/BruhLemma-Yadecha/rocketmancer), a multi-stage rocket optimizer.

## Introduction
The [original rocketmancer](https://github.com/BruhLemma-Yadecha/rocketmancer) and its own predecessor, [multistage](https://github.com/BruhLemma-Yadecha/multistage) were simple projects that built optimized configurations for a singe multi-staged rocket, given trip parameters and information about the vehicle configuration.

With rocketmancer-web, I wanted to fix the primary issue of both of those legacy projects: the lack of an easy-to-use, friendly user experience. By using scipy, I've also further optimized the algorithm that generates the final configuration, making this version best-in-class.

## Concept
The backbone of rocketmancer is the Tsiolkovsky Rocket Equation (see [here](https://en.wikipedia.org/wiki/Tsiolkovsky_rocket_equation)). The parameters that are often at hand when planning a mission and designing a vehicle are total delta-v, stage specific impulse values, and achievable ranges for the propellant mass fraction. The formula is trivial for a single stage vehicle and vehicles with stages that have the same mass fraction and specific impulse, but requires finding the optimal split when each stage performs differently. This is the primary optimization task rocketmancer does.

## Usage
⚠️This section is under construction! Some features are WIP and the project may have non-functional sections in its current state!⚠️
The backend contains the optimization API under /optimize/.
To use the site, build the image and start the container, giving you access to a simple SPA with a form where you can submit the two parameters for each stage. Once you add enough stages, the configuration will be generated and displayed automatically. You can tweak the configuration to have the system re-optimize the configuration on the fly.

This works on port 80 by default, but can be configured to run on a different port.

## License

This project is licensed under the [MIT License](https://opensource.org/license/mit)- see the [LICENSE](LICENSE) file for details.