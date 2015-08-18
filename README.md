# Ember-cli-mapbox

Provides an easy way of including Mapbox.js in Ember Cli projects.

```
ember install ember-cli-mapbox
```

## Configuration

Add your access token to your Ember config:

```js
module.exports = function(environment) {
  var ENV = {
    ...

    mapbox: {
      accessToken: 'yourAccessToken',
    },

    ...
  };
```

## Components

### mapbox-map

The addon includes a component for constructing a mapbox map:

```hbs
{{mapbox-map mapId='ember-cli-mapbox.7c3914f2'}}
```

Which will generate a `<div id="map">`, and initialise the map.

You can specify the id of the target div through `targetDivId`:

```hbs
{{mapbox-map mapId='ember-cli-mapbox.7c3914f2'
             targetDivID='mega-map'}}
```

# Collaborating

If you want to collaborate on this Ember addon:

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

The dummy app has some basic mapbox usage.

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
