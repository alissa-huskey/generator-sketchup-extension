require "sketchup.rb"
require "extensions.rb"

dir = ::File.expand_path(::File.dirname(__FILE__))
ext = SketchupExtension.new "<%- name %>", ::File.join(dir, "<%- fs_name %>", "main.rb")
ext.copyright = "<%- author %> © <%- year %>"
ext.creator = "<%- author %>"
ext.version = "<%- version %>"
ext.description = "<%- summary %>"
Sketchup.register_extension ext, true
