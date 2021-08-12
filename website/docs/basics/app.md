---
sidebar_position: 1
---

# Application

The Application (`App`) is the backbone of a Wind-Waker Server.

The Application will be responsible for:
- Load and register all the `Actions`.
- Register Global `Pipes`.
- Load Application configuration.
- Start listen for incoming request.

## Creating a new App

```typescript
import {App} from 'wind-waker'

// Create a new wind-waker server by instance the App class
const app = new App();

// Start listen to incoming request on port 4000
app.start(4000);
```

## Loading Actions

The App will load all files with the suffix `.actions.ts`. 
This way the `Actions` will be available.
When the App receive a request for `/getUsers`, it will execute the `getUsers` Action.

:::warning Notice
If the [Action](./actions.md) don't exist the App will return a not found response with code 404.
:::

## Start the App

Your `App` will start to listen for incoming requests once the `app.start()`
be executed successfully.

```typescript
// By default the port will be 4000
app.start();

// You can set the port you want your App listen for
app.start(5001);

// You can provide feedback when the App is up and running this way:
app.start().then(() => console.log(`Wind-Waker is up!`))
```

Congratulations, you have your App up and running.

Now let's show how to register some [Actions here](./actions.md)
