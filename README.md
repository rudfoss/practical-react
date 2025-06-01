<h1 align="center">Practical React</h1>

<p align="center">
👋 Welcome to the repository for the workshop <a href="https://www.bouvet.no/kurs/kategorier/utvikling-for-web-og-mobil/workshop-praktisk-react-med-typescript">Practical React with TypeScript</a>
</p>

> [!TIP]
> A branch will be created for the specific course named `courses/[date]`. The date is the month the course started in e.g.: `courses/202506`. This branch will contain the entire commit history for the course as well as **the slide deck**.

- [Prerequisites](#prerequisites)
- [Cloning the repository](#cloning-the-repository)

## Prerequisites

In this course we will be working with a [Pnpm Workspace](https://pnpm.io/workspaces) and [Nx](https://nx.dev/) managed [monorepo](https://monorepo.tools/). The devcontainer is already set up with all the necessary internal dependencies, but you will need to install the [Remote Development](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack) extension for VScode to and clone the repository into a [devcontainer](https://code.visualstudio.com/docs/devcontainers/containers) to get started.

## Cloning the repository

To work with the code we need to [clone](https://git-scm.com/docs/git-clone) the repository to our machine. We will do this at the start of the course, but you can also do this in advance if you want to get a small head start 🚀. To clone the repository open a terminal in the folder where you wish to store it and run this command:

```bash
git clone https://github.com/rudfoss/practical-react.git
```

Once the repository is cloned open the root folder in VSCode and, when prompted, open the workspace in a devcontainer.

If everything worked you can test the application by running this command and opening your browser to [`http://localhost:4200`](http://localhost:4200) and [`http://localhost:4000`](http://localhost:4000).

```bash
pnpm exec nx run-many -t serve
```

You should see "Hello world" in one tab and a Swagger UI in another. To stop the commands focus in the terminal and type `Ctrl+C`.
