<h1 align="center">Practical React</h1>

<p align="center">
👋 Welcome to the repository for the workshop <a href="https://www.bouvet.no/kurs/kategorier/utvikling-for-web-og-mobil/workshop-praktisk-react-med-typescript">Practical React with TypeScript</a>
</p>

> [!TIP]
> A branch will be created for the specific course named `courses/[date]`. The date is the month the course started in e.g.: `courses/202506`. This branch will contain the entire commit history for the course as well as **the slide deck**.

- [Prerequisites](#prerequisites)
	- [Git](#git)
	- [Node.js LTS](#nodejs-lts)
	- [Pnpm](#pnpm)
	- [VSCode](#vscode)
- [Cloning the repository](#cloning-the-repository)

## Prerequisites

In this course we will be working with a [Pnpm Workspace](https://pnpm.io/workspaces) and [Nx](https://nx.dev/) managed [monorepo](https://monorepo.tools/). This setup requires a few things to be installed on your machine in order to work properly. The code and project should work fine on Windows, Linux or Mac, but please install the following before the course begins.

> [!IMPORTANT]
> Please install and verify all prerequisites before the first day of the course.

| Checklist | Prerequisite                              |
| :-------: | ----------------------------------------- |
|     ✅     | [Git](#git)                               |
|     ✅     | [Node.js latest LTS version](#nodejs-lts) |
|     ✅     | [Pnpm package manager](#pnpm)             |
|     ✅     | [Visual Studio Code](#vscode)             |

> [!TIP]
> If you have a container environment on your machine (like [Docker](https://www.docker.com) or [Podman](https://podman.io)) you can switch to the branch [`devcontainer`](https://github.com/rudfoss/practical-react/tree/devcontainer) to use a [devcontainer](https://code.visualstudio.com/docs/devcontainers/containers) as your environment where all prerequisites are installed automatically.

### Git

Git is our version-control system for all source code we write. You do not need to know how to use Git as we will go through the basics during the course.

How to install Git depends on the Operating System you use. Follow the instructions on the [Git Download page](https://git-scm.com/downloads).

Once it is installed you can verify that everything is working by opening a terminal and typing `git --version`. You should see something similar to this (version number may differ):

```bash
git --version
git version 2.49.0.windows.1
```

### Node.js LTS

Node.js is our primary runtime for tooling, testing and extensions and is required to work with the project. We will use the latest Long-Term Support version of NodeJs as it is the most stable and supported version available.

How to install Node depends on the Operating System you use. Follow the instructions on the [nodejs.org page](https://nodejs.org/en).

Once it is installed you can verify that everything is working by opening a terminal and typing `node --version`. You should see something similar to this (version number may differ):

```bash
node --version
v22.16.0
```

### Pnpm

Node comes with a package manager called `npm`, but this course will be using an [optimized](https://pnpm.io/motivation) package manager called [`Pnpm`](https://pnpm.io). From the outside they are very similar and most commands will be familiar to you if you've used `npm` before. We will go through all the commands you need during the course.

The easiest way to install pnpm is to use [Corepack](https://pnpm.io/installation#using-corepack). Corepack is a small utility that can read and install the workspace preferred package manager directly from `package.json`. To use it simply install it and enable pnpm as a package manager:

```bash
npm install --global corepack@latest
corepack enable pnpm
```

Once it is installed it should automatically determine the appropriate package manager and version when you open the workspace during the [cloning stage](#cloning-the-repository)

### VSCode

Our primary IDE will be [VS Code (Visual Studio Code)](https://code.visualstudio.com) with [several extensions](https://github.com/rudfoss/practical-react-with-typescript/blob/v2025/.vscode/extensions.json) and [customized settings](https://github.com/rudfoss/practical-react-with-typescript/blob/v2025/.vscode/settings.json). You are free to choose any IDE you want, but it is highly recommended that you pick one which [integrates well with Nx](https://nx.dev/core-features/integrate-with-editors). Plugins for the IDE are not strictly required, but it makes working with the project and with nx commands much easier.

## Cloning the repository

To work with the code we need to [clone](https://git-scm.com/docs/git-clone) the repository to our machine. We will do this at the start of the course, but you can also do this in advance if you want to get a small head start 🚀. To clone the repository open a terminal in the folder where you wish to store it and run this command:

```bash
git clone https://github.com/rudfoss/practical-react.git
```

Once you have cloned the repository navigate the terminal to the root folder and run the `init` script to install dependencies and verify:

```bash
cd practical-react # Change this to the folder name you chose to clone into
pnpm run init # Install dependencies and verify that tools are installed
```

If everything worked you can test the application by running this command and opening your browser to [`http://localhost:4200`](http://localhost:4200) and [`http://localhost:4000`](http://localhost:4000).

```bash
pnpm exec nx run-many -t serve
```

You should see "Hello world" in one tab and a Swagger UI in another. To stop the commands focus in the terminal and type `Ctrl+C`.
