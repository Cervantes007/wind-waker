# Pipes

A `Pipe` is a function to reuse common logic in your app or break down big logic into small pieces of codes.

:::tip Recommendation
Learn about [Application](/basics/app.md) and [Actions](/basics/actions.md) before to read this section.
:::

## Defining a Pipe

```typescript
// log-headers.pipe.ts
import { Pipe, Ctx } from 'wind-waker';

export const logHeadersPipe: Pipe = (ctx: Ctx) => {
    console.log(ctx.req.headers);
}
```

## Using the Pipe

A pipe can be used at 3 levels:
- Application
- Group Actions
- Single Action

### Application Level
Using the pipe at Application level means every single request will execute this pipe. 
See how to set the pipe in the example below.

```typescript
import { App } from 'wind-waker';
import { logHeadersPipe } from './pipes/log-headers.pipe';

// Create your application
const app = new App();

// Set the pipe at the app level
app.pipeline(logHeadersPipe);

// Start listen requests
app.listen(4000);
```

The `pipeline` function can accept multiple pipes separated by a comma.

```typescript
// Set multiple pipes at the app level
app.pipeline(logHeadersPipe, anotherPipe, ...);
```

:::tip Pipeline order matter
The pipes register in the pipeline will be executed in the exactly same order you pass in.
:::

