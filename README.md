# BrewMyMac

[![GitHub Release](https://img.shields.io/github/v/release/ayltai/brewmymac.sh)](https://github.com/ayltai/brewmymac.sh/releases)
[![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/ayltai/brewmymac.sh/ci.yml)](https://github.com/ayltai/brewmymac.sh/actions)

## Prerequisites

* Provisioned a Service Account with the following roles:
    - Cloud Datastore Owner
    - Cloud Functions Admin
    - Cloud Storage for Firebase Admin
    - Project IAM Admin
    - Service Account Admin
    - Service Account User
    - Service Usage Admin
    - Storage Admin
* Create a private key for the Service Account and download it as a file by following this [instructions](https://cloud.google.com/iam/docs/keys-create-delete)

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

* Installed [Terraform](https://www.terraform.io/) v1.7 or above
* Installed [Node.js](https://nodejs.org) v20 or above
* Installed [gcloud CLI](https://cloud.google.com/sdk/gcloud)
* Installed [Firestore emulator](https://cloud.google.com/firestore/docs/emulator)
