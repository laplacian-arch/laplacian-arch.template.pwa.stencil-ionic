# laplacian-arch:template:pwa.stencil-ionic

An template that generates a pwa implementation from an application-model written in laplacian-arch:client-app-arch model.
The generated pwa implementation is based on stencil, a web-component-powered light weight framework and ionic4 UI library.



## Dependent models
This template generates resources based on the following models:

- laplacian-arch.model.client-app-arch


## Getting started

Firstly, you need to add the following entry to your `laplacian-module.yml` :

```yaml
project:
  group: ${your.project.group}
  name: ${your.project.name}
  type: project
  version: "1.0.0"
  templates:
  ## ↓↓ ADD ↓↓ ##
  - group: laplacian-arch
    name: pwa
    subname: stencil-ionic
    version: "1.0.0"
  ## ↑↑ ADD ↑↑ ##
```

To reflect the change, you need to type the following command in your console :
```bash
./gradlew lM
```

Then put some model files under the *./model* directory and type the following command to generate files:
```bash
./gradlew lG
```