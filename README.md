
# \<sketch\>

https://quackbarc.github.io/sketch/

A fork of [dagwaging](https://github.com/dagwaging/sketch)'s Polymer client for [garyc.me/sketch](https://garyc.me/sketch)\*, with additional features like screentoning and filling.

<sup>\* garyc.me/sketch is an anarchy draw-swapping website, and drawings may contain NSFW content or worse than that. Visit at your own risk.</sup>

---

## Running the app locally

1. Make sure you have [Bower](https://www.npmjs.com/package/bower) and the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed in your system.
2. Run `bower install` to install project dependencies.

**NOTE**: Requests to garyc.me are done via CORS proxy. The proxy hard-coded on this project only whitelists the public client websites, so online functionality like swapping and stats fetching with it may not work on local environments. For the time being, you may instead replace it with your own proxy (at [sketch-api.html](/src/sketch-api/sketch-api.html)) to get it working.

### Serving the app

    polymer serve

By default, the demo will be served to localhost.

### Building the app

    polymer build

This will build a minified ES6-compatible version onto `build/es6-bundled/`, as per [polymer.json](/polymer.json).
To serve the build:

    polymer serve build/es6-bundled
