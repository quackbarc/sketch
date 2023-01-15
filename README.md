
# \<sketch\>

https://quackbarc.github.io/sketch/

A fork of [dagwaging](https://github.com/dagwaging/sketch)'s Polymer client for [garyc.me/sketch](https://garyc.me/sketch)\*, with additional features like screentoning and filling.

<sup>\* garyc.me/sketch is an anarchy draw-swapping website, and drawings may contain NSFW content or worse than that. Visit at your own risk.</sup>

---

## Running the app locally

1. Make sure you have [Bower](https://www.npmjs.com/package/bower) and the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed in your system.
2. Run `bower install` to install project dependencies.

### Serving the app

    polymer serve

By default, the demo will be served to localhost.

> **NOTE**: From what I've tried, serving it this way doesn't let other devices on a local network visit the app.
> Serving with other HTTP server modules did the trick though; even something like
> Node's [http-server](https://www.npmjs.com/package/http-server)
> or Python's [http.server](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/set_up_a_local_testing_server#running_a_simple_local_http_server)
> worked fine.

### Building the app

    polymer build

This will build a minified ES6-compatible version onto `build/es6-bundled/`, as per [polymer.json](/polymer.json).
To serve the build:

    polymer serve build/es6-bundled
