=begin
Copyright: <%- author %> © <%- year %>
License: <%- license %>
Author: <%- author %>
Name: <%- name %>
Version: <%- version %>
SU Version: MinimumSketchUpVersion
Date: <%- today %>
Description: <%- summary %>
=end

require "sketchup.rb"
module MyModule
  def self.my_method
  # do something...
  end

  def self.my_second_method
  # do something...
  end

end

# Create menu items
unless file_loaded?(__FILE__)
  mymenu = UI.menu("Plugins").add_submenu("My Plugin Collection")
  mymenu.add_item("My Tool 1") {My_module::my_method}
  mymenu.add_item("My Tool 2") {My_module::my_second_method}
  file_loaded(__FILE__)
end
