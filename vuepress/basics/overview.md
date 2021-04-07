# Overview

Wind Waker is a nodejs server, very simple to use yet powerful with optimized performance.
It's easy to learn and used to build high quality Backend APIs.
It's implemented with Typescript.


## Main concepts
- [Application](/basics/app.md)
- [Actions](/basics/actions.md)
- [Pipes](/basics/pipes.md)

You need to understand these 3 basics concepts, before start to use Wind Waker Framework.

## The [Application](/basics/app.md)

The [Application](/basics/app.md) is the core of a Wind Waker server, 
it will load all the configurations and `Actions` to create 
a Node.js server ready to receive incoming requests.


## The [Actions](/basics/actions.md)

An [Actions](/basics/actions.md) is a function defined by the user to handle an incoming request.

## The [Pipes](/basics/pipes.md)

A [Pipe](/basics/pipes.md) is a reusable function you can use to plugin logic. 
You can set `Pipes` at different levels: `Application`, Action Group or `Action`.

## Available Pipes
- cors
- helmet
- parse
- jwt
