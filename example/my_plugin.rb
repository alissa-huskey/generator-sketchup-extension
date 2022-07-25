require "sketchup.rb"
require "extensions.rb"

dir = ::File.expand_path(::File.dirname(__FILE__))
ext = SketchupExtension.new "My Plugin", ::File.join(dir, "my_plugin", "main.rb")
ext.copyright = "Alissa Huskey © 2022"
ext.creator = "Alissa Huskey"
ext.version = "0.1.0"
ext.description = "An extension for SketchUp."
Sketchup.register_extension ext, true
