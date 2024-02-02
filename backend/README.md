# BrewMyMac - Backend

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=brewmymac.sh-backend&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=brewmymac.sh-backend)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=brewmymac.sh-backend&metric=coverage)](https://sonarcloud.io/summary/new_code?id=brewmymac.sh-backend)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=brewmymac.sh-backend&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=brewmymac.sh-backend)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=brewmymac.sh-backend&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=brewmymac.sh-backend)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=brewmymac.sh-backend&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=brewmymac.sh-backend)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=brewmymac.sh-backend&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=brewmymac.sh-backend)

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
* Installed [gcloud CLI](https://cloud.google.com/sdk/gcloud)
* Installed [Firestore emulator](https://cloud.google.com/firestore/docs/emulator)
