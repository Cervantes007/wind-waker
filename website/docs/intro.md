---
sidebar_position: 1
---

# Get started

Just this command to start build your app

```shell
npx wind-waker-cli
```

## Introduction

Wind Waker is a framework for building efficient, scalable [Node.js](https://nodejs.org/) server-side applications. 
It was build from scratch with [Typescript](http://www.typescriptlang.org/).

Wind Waker let you to write a server-side application just by implement functions (called [actions](./basics/actions.md) in `wind-waker` world)

Wind Waker provides an integrated ecosystem to provide the best developer experience:
- wind-waker
- [wind-waker-cli](./ecosystem/wind-waker-cli.md)
- [wind-waker-client](./ecosystem/wind-waker-client.md)
- [wind-waker-ui](./ecosystem/wind-waker-ui.md)

## Why choose Wind Waker

If you know how functions works, then you can create a `wind-waker` app.

Wind Waker was design to be the easiest way to be a Javascript Fullstack Developer.

Wind Waker features:
- Simple to learn, easy to use and scale.
- Go to production in no time.
- Provide a pipeline to reuse common logic.  
- Powerful exception handle.
- High-performance.
- Extensible.
- Encourage good-practice.
- Documentation provides the optimal way to solve each case. (validation, security, ...) 
- First-class typescript support.

## Installation

To get started, you can use scaffold the project with the [Wind Waker CLI](./cli/wind-waker-cli.md)

To scaffold the project with the `wind-waker-cli`, run the following command.
This will create a new project directory, and populate the directory with the initial Wind Waker files, creating a conventional base structure for your project.
Creating a new project with the `wind-waker-cli` is the recommended way to start a project.

```shell
npx wind-waker-cli
```

You can also manually create a new project from scratch by installing the `wind-waker` package and supporting files with npm (or yarn).
In this case, of course, you'll be responsible for creating the project boilerplate files yourself.

```shell
npm i wind-waker --save-exact
```
