
# What it does? 

You can create dynamic form in web and render it in Mobile.  i.e You may collect any data via mobile  (Eg. Collecting Health records, Survey's etc).  The system allow you to create your own form.  You can also have sample forms or save template for future use.  It is part of our project.  Happy data capturing using mobile.

## Development

* Run `yarn install` and `yarn start`
* Needs Node 7.x / npm v3.x or above

## Control flow

```
Render the App with Initial Global State
-> User interacts with Components
-> Components emit an Action/Message/Event
-> Goes to Store/Dispatcher/MessageBus/EventBus
-> Spreads to Reducers/Listeners/Processors/Handlers
-> Which handles the action and returns New Global State
-> Re-Render the App with New Global State
-> ... cycle continues ...
```

## Project Structure

* `build`: Generated when you explicitly build or publish
* `src/reducers`: All actions and reducers. They can be shared across the same views or pages.
* `src/components/dumb`: All dumb views (i.e. they don't directly access the global state, they get it passed down as props)
* `src/components/smart`: All smart components and route pages (i.e. they select data from the global state and use dumb views to render the data). Each page reuses the actions and reducers that it *specifically* needs from the `actions` folder
* `src/app/`: Core app files
  * `common/`: Core functions, like validations and localisation.
  * `utils/`: Utilities required for app
  * `views`: Core views used across the application.
* `src/store`: Store configuration
* `src/styles`: Styling used in app
* `src/utils`: Basic utilities used, like helper methods
* `src/index.js`: Entry point where the app begins, Where the Store, State and React UI are connected together
* `public/index.html`: HTML template, index.js will be injected inside

## Conventions

* For coding conventions, we use eslint
  * It provides tools to check and enforce the coding styles
  * It supports ES6, ES7 and many upcoming changes in Javascript
  * Run `npm lint` to validate
* File naming
  * `TitleCase.js` for React components
  * `camelCase.js` for other files
  * This seems to be prevalent across React projects in GitHub
  * `custom-component.css` for css files
* Folder naming
  * `folder-name` for folders
* Actions
  * Each action will have `type`, `payload`, `meta` and `error`. See [Flux Standard Action](https://github.com/acdlite/flux-standard-action)
  * Example: If a Phone number is updated, `payload` will be updated details and `meta` will be array index of the phone.
  * Example: If a new Phone number was added, `payload` will be new phone details and `meta` is not needed.
  * This makes it easy to generate and handle actions. We know for sure that all actions will have payload, and some may have meta/error. That's it.

## Testing [WIP]
* The tests are kept in the `src/tests` folder. The directory mocks the structure of the `src` directory.
* All Test files are prefixed using `*.spec.js`
* Jest is used for runnnig tests.
* Run `yarn test` to trigger tests.
* Currently we are testing only the reducers, ensuring the state of the application behaves as expected.
* Idea is to reduce the amount of logic on the `Components`, so that they remain dumb.
* Refer `https://github.com/wix/redux-testkit` for understanding how to test reducers.

## TODO
  1. Configuration setup for dev and prod env.
  2. Setup deployment
  3. Usage
