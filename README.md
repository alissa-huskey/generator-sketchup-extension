# generator-sketchup-extension [![NPM version][npm-badge]][npm]
> [SketchUp][sketchup] Ruby Extension Generator for [Yeoman][yeoman]

## Installation

Install [Yeoman][yeoman] and generator-sketchup-extension using [npm](http://www.npmjs.com/) (we assume you have pre-installed [node.js](http://nodejs.org/)).

```bash
npm install -g yo generator-sketchup-extension
```

## Features

See the [example][] directory for an example of generated files.

```
example
├── CHANGELOG.md
├── LICENSE.txt
├── README.md
├── my_plugin
│   └── main.rb
└── my_plugin.rb
```

## Usage

To generate your project simply run:

```bash
mkdir my-project && cd my-project
yo sketchup-extension
```

For a list of options run:

```bash
yo sketchup-extension --help
```

### Options

```
  -d, --dest              # Destination folder        Default: Current directory name
  -n, --name              # Extension name            Default: Based on dest
  -v, --version           # Extension version         Default: 0.1.0
      --author            # Author name               Default: git user.name
  -e, --email             # Author email              Default: git user.email
  -w, --website           # Website                   Default: https://example.com
  -s, --summary           # Short description         Default: An extension for SketchUp.
  -l, --license           # License                   Default: MIT
  -m, --sketchup_version  # Minimum SketchUp version  Default: From current year.
```

## Development

To run during development, execute the following. Tasks are defined in the
`scripts` section of `package.json`.

```bash
npm run do
```

To run tests:

```bash
npm run test
```

## Credits

* [SketchUp][sketchup]
* [Yeoman][yeoman]
* Created using the [generator][generator-generator] generator.
* Uses the [licence][generator-license] generator.

## License

MIT © [Alissa Huskey](http://github.com/alissa-huskey)



[npm-badge]: http://badge.fury.io/js/generator-sketchup-extension.svg
[npm]: http://npmjs.org/package/generator-sketchup-extension
[sketchup]: http://developer.sketchup.com/developers/welcome
[generator-generator]: http://github.com/yeoman/generator-generator
[generator-license]: http://github.com/jozefizso/generator-license
[example]: https://github.com/alissa-huskey/generator-sketchup-extension/tree/main/example
[yeoman]: http://yeoman.io
