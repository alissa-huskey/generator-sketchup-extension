# -------------------------------------------------------------------------------
#
#         Name : My Plugin
#      Version : 0.1.0
#  Description : An extension for SketchUp.
#       Author : Alissa Huskey
#      License : MIT
#   SU Version : 22
#
# -------------------------------------------------------------------------------

require "sketchup.rb"

if Sketchup.version.to_i < 22
  msg = "My Plugin requires SketchUp 22 or later to run, but this is version #{Sketchup.version}."
  UI.messagebox(msg)
  raise msg
end

module MyModule
  extend self

  def my_method
    UI.messagebox("Hello from my_method")
    Sketchup.status_text = "oh hai"
  end

  def my_other_method
    UI.messagebox("Hello from my_other_method")
    Sketchup.status_text = "hey there"
  end

  unless file_loaded?(__FILE__)
    menu = UI.menu("Extensions")
    menu.add_item("My Tool A") { self.my_method }
    menu.add_item("My Tool B") { self.my_other_method }
    file_loaded(__FILE__)
  end

end
