# The Actions

A Wind Waker App is all about `Actions`.
It's a simple way to figure out how to build your Application, 
only thinking in the `Actions` you need.

All incoming requests are map to the corresponding Action.
An `Action` is responsible to handle a request and send back a response to client.

## Define your first Action

To define an `Action` you need to create a file using the `.actions.ts` suffix,
then the `Application` will load it automatically.
For example let's create a `user.actions.ts` file.

```typescript 
export class UserActions {
    @Action()
    getUsers() {
        return 'List of users'
    }
}
```

Break down the `Action` file:
- Create a file named `user.actions.ts`. The `.actions.ts` suffix is ***required***.
- Use the `@Action()` decorator to mark methods as Application Actions.
- Now `getUsers()` is an `Action` and will be executed for request with path equal to `/getUsers`.

:::tip Notice
The method's name will be used as the `Action` name.
:::

:::warning Warning
The Methods not decorated with `@Action` will be no expose as Application Actions.
:::

## Multiples Actions

Action files usually define many actions,
you just needs to define class methods and decorated it with `@Action()`.

The next example will define `getUsers`, `getUser` and `createUser` actions.

```typescript
// user.actions.ts
export class UserActions {
    @Action()
    getUsers() {
        return 'List of users'
    }
    
    @Action()
    getUser() {
        return 'User details';
    }

    @Action()
    createUser() {
        return 'User created!';
    }
}
```

## Actions Arguments

Each `Action` method can use some useful decorator
to collect needed information to build your `Action` logic.

The available Action Arguments Decorators are:
- `@Input()`: provides the request data.
- `@Ctx()`: provide the Context for current `Action`.
- `@Req()`: provide the entire Request data.
- `@Res()`: provide the entire Request data.  
- `@Headers()`: provide Request Headers.

### Using @Input

