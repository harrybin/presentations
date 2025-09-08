---
title: "Example: Full-Stack Dev-Container"
hideInToc: true
hide: true
---

<h1 class="h-auto!" > Example: Full-Stack Dev-Container	</h1>

````md magic-move
```json
// filepath: .devcontainer/devcontainer.json
{
  "name": "Full-Stack Dev Container",
  "image": 
}
```
<!-- dotnet image -->
```json {4-5}
// filepath: .devcontainer/devcontainer.json
{
  "name": "Full-Stack Dev Container",
  "image": "mcr.microsoft.com/vscode/devcontainers/dotnet:9.0", 
  "postCreateCommand": "dotnet restore",
}
```
<!-- VS-Code and settings -->
```json {6-11|12}
// filepath: .devcontainer/devcontainer.json
{ 
  "name": "Full-Stack Dev Container",
  "image": "mcr.microsoft.com/vscode/devcontainers/dotnet:9.0", 
  "postCreateCommand": "dotnet restore",
  "customizations": {
    "vscode": {
      "extensions": [
        "ms-dotnettools.csharp",
        "dbaeumer.vscode-eslint",
      ],
      "settings": {},
    }
  }, 
}
```
<!-- node -->
```json {5-9}
// filepath: .devcontainer/devcontainer.json
{
  "name": "Full-Stack Dev Container",
  "image": "mcr.microsoft.com/vscode/devcontainers/dotnet:9.0",
  "features": {    
    "ghcr.io/devcontainers/features/node:1": {
      "version": "22"
    }
  },
  "postCreateCommand": "dotnet restore",
  "customizations": { ... },
}
```
<!-- node npm install -->
```json {10}
// filepath: .devcontainer/devcontainer.json
{
  "name": "Full-Stack Dev Container",
  "image": "mcr.microsoft.com/vscode/devcontainers/dotnet:9.0",
  "features": {    
    "ghcr.io/devcontainers/features/node:1": {
      "version": "22"
    }
  },
  "postCreateCommand": "dotnet restore && npm install",
  "customizations": { ... },
}
```
<!-- node extensions -->
```json {13}
// filepath: .devcontainer/devcontainer.json
{ ...
  "features": {    
    "ghcr.io/devcontainers/features/node:1": {
      "version": "22"
  }},  
  "postCreateCommand": "dotnet restore && npm install",
   "customizations": {
    "vscode": {
      "extensions": [
        "ms-dotnettools.csharp",
        "dbaeumer.vscode-eslint",
        "esbenp.prettier-vscode"
      ]
  }},
}
```
<!-- mounts -->
```json {9-13}
// filepath: .devcontainer/devcontainer.json
{ ...
   "features": {    
    "ghcr.io/devcontainers/features/node:1": {
      "version": "22"
  }},
  "postCreateCommand": "dotnet restore",
  "customizations": { ... },
  "mounts": [
    "source=${localEnv:HOME}${localEnv:USERPROFILE},target=/host-home-folder,type=bind",
    "source=${localWorkspaceFolder}/app-data,target=/data,type=bind,consistency=cached"
  ],
  "remoteUser": "vscode"
}
```
<!-- postgres -->
```json {4-9}
// filepath: .devcontainer/devcontainer.json
{ ...
  "features": {
    "ghcr.io/itsmechlark/features/postgresql:1": {
      "version": "15",
      "database": "mydb",
      "user": "admin",
      "password": "password"
    },
    "ghcr.io/devcontainers/features/node:1": { ... }
  },
  "postCreateCommand": "dotnet restore",
  "customizations": { ... },
  "mounts": [ ... ],
  "remoteUser": "vscode"
}
```
````

<!-- Notes -->
<!--
lets' create a devcontainer for a full-stack project

[click] start with BE, so use a .NET image

[click] add proper VS-Code extensions for C# 

[click] now we add node

[click] add auto install npm packages

[click] add web-dev VS-Code extensions

[click] add need mounts

[click] add postgres feature

[click] add azure functions support

- **Web Frontend**: Node.js and npm for frontend development
- **C# Backend**: .NET 7.0 environment for backend services
- **PostgreSQL Database**: Pre-configured PostgreSQL database
- **Azure Functions**: Ready-to-use Azure Functions support
- **Extensions**: Includes necessary VS-Code extensions for full-stack development


 This example demonstrates how to set up a Dev-Container for a full-stack project, including a web frontend, C# backend, PostgreSQL database, and Azure Functions. 
 -->
---
title: "Full Example: Full-Stack Dev-Container"
hideInToc: true
---

<h1 class="h-auto!" > Full Example: Full-Stack Dev-Container </h1>

```json {*}{lines:true,maxHeight:'400px'}
// filepath: .devcontainer/devcontainer.json
{
  "name": "Full-Stack Dev Container",
  "image": "mcr.microsoft.com/vscode/devcontainers/dotnet:9.0",
  "features": {
    "ghcr.io/itsmechlark/features/postgresql:1": {
      "version": "15",
      "database": "mydb",
      "user": "admin",
      "password": "password"
    },
    "ghcr.io/devcontainers/features/node:1": {
      "version": "22"
    }
  },
  "postCreateCommand": "dotnet restore && npm install",
  "customizations": {
    "vscode": {
      "extensions": [
        "ms-dotnettools.csharp",
        "dbaeumer.vscode-eslint",
        "esbenp.prettier-vscode"
      ]
    }
  },
  "mounts": [
    "source=${localEnv:HOME}${localEnv:USERPROFILE},target=/host-home-folder,type=bind",
    "source=${localWorkspaceFolder}/app-data,target=/data,type=bind,consistency=cached"
  ],
  "remoteUser": "vscode"
}
```

<!-- Notes -->
<!--
- **Web Frontend**: Node.js and npm for frontend development
- **C# Backend**: .NET 7.0 environment for backend services
- **PostgreSQL Database**: Pre-configured PostgreSQL database
- **Extensions**: Includes necessary VS-Code extensions for full-stack development


 This example demonstrates how to set up a Dev-Container for a full-stack project, including a web frontend, C# backend, and a PostgreSQL database. 
 -->

---
layout: image-right-dark
background: /code-right.png
hideInToc: true
---
# Demo - Container-Ship

<BlobText width="450" height="300">
<h1> Full-Stack Dev-Container </h1>
</BlobText>



<!-- Notes -->
<!-- 
There are 2 ways to define and open a devcontainer in a monorepo:
1. Defining a devcontainer in each individual project folder.
  - open a VSCode instance in the project folder and it will automatically pick up the devcontainer.json file in that folder.
  - disadvantage: this is not supported by other tools including GitHub Codespaces.
2. Using a `.devcontainer` folder in the root of the repository.
  - this is supported by GitHub Codespaces
  - redirecting the worspacemounts and workspaceFolder to the project folder [may cause issues see](https://github.com/orgs/community/discussions/15506)
  
-->