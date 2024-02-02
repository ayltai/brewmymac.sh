# BrewMyMac

[![GitHub Release](https://img.shields.io/github/v/release/ayltai/brewmymac.sh)](https://github.com/ayltai/brewmymac.sh/releases)
[![Uptime Robot status](https://img.shields.io/uptimerobot/status/m796412665-5b97785b87bd1dcb50d18c8e)](https://stats.uptimerobot.com/qL351HgIWE)

![logo](assets/LargeLogo.png)

[BrewMyMac](https://brewmymac.sh) automates how you install apps and customise your Mac safely and easily. It generates effortless and reproducible installation commands that you can share with others.

## Introduction

This [article](https://ayltai.medium.com/install-mac-apps-and-tweaks-with-a-single-command-6b1b90c466b5) explains the motivation behind this project.

### Supported package repositories

* [Homebrew](https://brew.sh/): The missing package manager for macOS
* [Homebrew Cask](https://formulae.brew.sh/cask/) An extension to [Homebrew](https://brew.sh/) that allows you to install macOS applications
* [AppStore](https://www.apple.com/app-store/): A macOS app store platform maintained by Apple Inc

### Supported tweaks

* [macOS tweaks](https://github.com/ayltai/ansible-macOS-tweaks): A collection of over 50 macOS customisations

## Architecture

```mermaid
---
title: BrewMyMac Architecture
---
flowchart
  subgraph gcp [Google Cloud Platform]
    functions("API (Cloud Functions)")
    firestore("Database (Firestore)")
  end
  appstore("App Store")
  react("React SPA (https://brewmymac.sh)")
  react --> functions
  react --> appstore
  functions --> firestore
```

## Getting started

Try it here: [https://brewmymac.sh](https://brewmymac.sh)

The documentation for the backend can be found [here](backend/README.md).

The documentation for the frontend can be found [here](frontend/README.md).

The documentation for the infrastructure provisioning can be found [here](infra/README.md).
