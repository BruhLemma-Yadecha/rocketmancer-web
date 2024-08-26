# rocketmancer-web
![WIP](https://img.shields.io/badge/WIP-Transitioning_To_Docker-yellow)

![Python](https://img.shields.io/badge/Python-000000?style=flat&logo=python&logoColor=306998)
![JavaScript](https://img.shields.io/badge/JavaScript-000000?style=flat&logo=javascript&logoColor=F7DF1E)
![HTML](https://img.shields.io/badge/HTML-000000?style=flat&logo=html5&logoColor=E34F26)
![CSS](https://img.shields.io/badge/CSS-000000?style=flat&logo=css3&logoColor=1572B6)

![React](https://img.shields.io/badge/React-000000?style=flat&logo=react&logoColor=61DAFB)
![Django](https://img.shields.io/badge/Django-000000?style=flat&logo=django&logoColor=092E20)
![Scipy](https://img.shields.io/badge/Scipy-000000?style=flat&logo=scipy&logoColor=8CAAE6)
![Nginx](https://img.shields.io/badge/Nginx-000000?style=flat&logo=nginx&logoColor=009639)
![Docker](https://img.shields.io/badge/Docker-000000?style=flat&logo=docker&logoColor=2496ED)

A multi-stage delta-v optimizer built using scipy for the web.

## Background
rocketmancer-web is a multi-stage rocket delta-V optimizer based on the [original rocketmancer](https://github.com/BruhLemma-Yadecha/rocketmancer) and its own predecessor, [multistage](https://github.com/BruhLemma-Yadecha/multistage). It takes a set of trip and vehicle parameters to make the initial mass of the rocket as small as possible.

With rocketmancer-web, I wanted to fix the primary issue of both of those legacy projects: the lack of an easy-to-use, friendly user experience. By using scipy, I've also further optimized the algorithm that generates the final configuration, making this version best-in-class.

## Concept
The backbone of rocketmancer is the Tsiolkovsky Rocket Equation (see [here](https://en.wikipedia.org/wiki/Tsiolkovsky_rocket_equation)). The parameters that are often at hand when planning a mission and designing a vehicle are total delta-v, stage specific impulse values, and achievable ranges for the propellant mass fraction. The formula is trivial for a single stage vehicle and vehicles with stages that have the same mass fraction and specific impulse, but requires finding the optimal split when each stage performs differently. This is the primary optimization task rocketmancer does.

## Usage
⚠️This section is under construction! Some features are WIP and the project may have non-functional sections in its current state!⚠️
![image](https://github.com/user-attachments/assets/a7c1f863-0bd5-4ee3-8dff-8cb5330ba3ef)
The backend contains the optimization API under /optimize/.

To use the site, build the image and start the container:
```
docker-compose up --build
```
This will launch a simple SPA on port 80 with a form where you can submit the two parameters for each stage. The site automatically loads a sample configuration, but you can tweak it and see the optimized result displayed in the top section.

This works on port 80 by default, but can be configured to run on a different port.

## License

This project is licensed under the [MIT License](https://opensource.org/license/mit)- see the [LICENSE](LICENSE) file for details.
