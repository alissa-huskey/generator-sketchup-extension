require "sketchup.rb"
require "extensions.rb"

ext = SketchupExtension.new "<%- name %>", "<%- fs_name %>/main.rb"
ext.copyright = "<%- author %> © <%- year %>"
ext.creator = "<%- author %>"
ext.version = "<%- version %>"
ext.description = "<%- summary %>"
Sketchup.register_extension ext, true
