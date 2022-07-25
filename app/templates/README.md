# <%- name %>

This is the <%- name %> extension for SketchUp.

## Installation

1. In SketchUp open the **Extension Manager**, either under the Window or
   Extensions menu.
2. Click **Install Extension**.
3. Navigate to your `<%- fs_name %>.rbz` file.

## Development

Here are some links to information on writing SketchUp plugins.

* [SketchUp Plugin Index > Creating a SketchUp Plugin](http://sketchupplugins.com/about/creating-a-sketchup-plugin/)
* [SketchUp Developer Docs > Getting Started](https://developer.sketchup.com/developers/adding-geometry)
* [Ruby API Docs](https://ruby.sketchup.com/)
* [Example Extensions Code](https://github.com/SketchUp/sketchup-ruby-api-tutorials/tree/main/examples)

To create an installable `rbz` of your plugin, run the following at the command
line.

```bash
zip <%- fs_name %>.rbz <%- fs_name %> <%- fs_name %>.rb
```

## Change Log

View the [CHANGELOG](CHANGELOG.md) for details.

## Credits

Generated using the [SketchUp Extension][generator-sketchup-extension] generator for [Yeoman][yeoman].

## License

Released under the <%- license %> license.

<%- author %> © <%- year %>

[generator-sketchup-extension]: https://github.com/alissa-huskey/generator-sketchup-extension
[yeoman]: http://yeoman.io
