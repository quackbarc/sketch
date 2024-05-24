
# \<sketch\>

<p align="center">
    <img src="https://github.com/quackbarc/sketch/assets/49148994/07b9cd3a-a567-4dd9-aa6a-1da10fa866ca">
    <i>https://quackbarc.github.io/sketch</i> -
    <i>screenshot from <a href="https://github.com/quackbarc/sketch/releases/tag/v2024.4.8">v2024.4.8</a></i>
</p>

---

A fork of **dagwaging**'s drawing client for the anarchy draw-swapping website [**garyc.me/sketch**](https://garyc.me/sketch),
with additional features like screentoning, filling, and zooming.

> [!warning]
> Because garyc.me/sketch is an anarchy website, drawings on it may be NSFW or even worse than that.<br>
> Check the website with caution, in case you don't already frequent it.

- dagwaging's original client: https://dagwaging.github.io/sketch/
- dagwaging's original repo: https://github.com/dagwaging/sketch/

---

## Development

If you ever wish to work on the client on your own machine:

1. Make sure you have [Bower](https://www.npmjs.com/package/bower) and the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed in your system.
2. Clone the repository.
3. Navigate to the cloned repository, then run `bower install` on it to install project dependencies.

All the other commands listed below will assume your terminal is currently on the clone repository.

### Serving

```sh
$ polymer serve
```

This should serve the whole client locally onto localhost (the port will be shown on the console).
You could also use other methods that start a file server, e.g.
`npx http-server` ([ref](https://www.npmjs.com/package/http-server#installation)).

### Building

```sh
$ polymer build
```

This should build a minified ES6-compatible version onto `build/es6-bundled/`, as per the project's polymer.json.
To serve the build with the same Polymer CLI:

```sh
$ polymer serve build/es6-bundled
```

---
