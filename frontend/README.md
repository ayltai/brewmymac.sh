# BrewMyMac - Frontend

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=brewmymac.sh-frontend&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=brewmymac.sh-frontend)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=brewmymac.sh-frontend&metric=coverage)](https://sonarcloud.io/summary/new_code?id=brewmymac.sh-frontend)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=brewmymac.sh-frontend&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=brewmymac.sh-frontend)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=brewmymac.sh-frontend&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=brewmymac.sh-frontend)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=brewmymac.sh-frontend&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=brewmymac.sh-frontend)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=brewmymac.sh-frontend&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=brewmymac.sh-frontend)

## Prerequisites

This project includes a [Dev Container](https://containers.dev/) that is pre-configured with all the necessary tools installed and an environment properly set up.

There are several ways to start using dev containers:
* Launch the dev container directly from the GitHub repository using [Codespaces](https://github.com/features/codespaces)
* Launch the dev container from Visual Studio Code or Visual Studio using the [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
* Launch the dev container from an IntelliJ IDE (with early support only - not recommended)
* Launch the dev container using [Dev Container CLI](https://github.com/devcontainers/cli) and [Docker](https://www.docker.com):
  ```bash
  devcontainer up --workspace-folder .
  ```

Without using the include dev container, please make sure the following requirements are met:

* Installed [Node.js](https://nodejs.org) v20 or above
* Installed [pnpm](https://pnpm.io) v8 or above

## Running locally

1. Start the backend servers by following the instructions [here](../backend/README.md)
2. Install dependencies
   ```sh
   pnpm i
   ```
3. Start the backend servers
   ```sh
   pnpm start
   ```
4. The frontend can be accessed at [http://localhost:5173/](http://localhost:5173/)

## Building from source

1. Install dependencies
   ```sh
   pnpm i
   ```
2. Build the backend
   ```sh
   pnpm run build
   ```
3. The artifacts can be found in the `dist` folder
