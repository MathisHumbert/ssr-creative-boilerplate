## Mathis Humbert

A boilerplate template for creative websites using JavaScript (OOP) with no framework, GSAP and WebGL via THREE, working with express for SSR.

### Description

This boilerplate is a modern version of "bizarroilerplate" that you can find over here https://github.com/bizarro/bizarroilerplate.

I changed some part of this template bases for my own use.

I replaced Webpack with Vite.js and updated all of the packages to have an up to date template.

It's using Sanity as a CMS, feel free to replace it with any other CMS of your choice.

#### Server

The server code is located at the root of the template in the SERVER.JS file.

#### Client

All of the client code is located in the SRC folder.

The APP folder is for the javascript code.

The FONTS folder is for your fonts.

The STYLES folder is for the scss code.

The VIEWS folder is for your html files, actualy using PUG as an html template.

#### Assets

All of your assets are located in the PUBLIC folder in the root of the template.

## Getting Started

### Installation

Install the project dependencies using:

```sh
pnpm install
```

### Dive In!

Kickstart the development environment:

```sh
pnpm dev
```

Navigate to http://localhost:3000/

### Build

To generate a build of the project:

```sh
pnpm build
```

### Preview

You can easily preview your project by first building it and the using the preview command:

```sh
pnpm preview
```

### Deploy

You can easily deploy it on vercel for free, don't forget to set the environment variables, especially this one:

```sh
NODE_ENV = production
```

## Credits

All credits goes to Luis Bizarro's "bizarroilerplate" that you can find over here https://github.com/bizarro/bizarroilerplate
