#!/usr/bin/env ruby -W0

require 'plist_lite'
require 'net/http'

module SketchUpVersion
# Functions to guess the version of SketchUp

  extend self

  # Returns the most recent version listed on the SketchUp release-notes page.
  #
  # @return [String] The most recently released version of SketchUp
  def remote
    uri = URI("https://help.sketchup.com/en/release-notes")
    res = Net::HTTP.get_response(uri)
    return if res.code != "200"

    versions = res.body.scan(/<a href="\/release-notes\/sketchup(?:-(?:desktop|pro))?-[0-9]+(?:-and-[a-z0-9-]+)?">SketchUp(?: (?:Desktop|Pro))? ([0-9.]+)/)

    return if versions.empty?

    versions.flatten!.map! { |v| v.to_i.to_s }
    versions.map! { |v| (v.length == 4 and v[0..1]) == "20" ? v[-2, 2] : v }
    versions.map! { |v| v.to_i }

    versions.sort.reverse.first
  end

  # Returns the most recent installed version of SketchUp.
  #
  # @return [String] The most recently released version of SketchUp
  def installed
    pattern = "/Applications/SketchUp */SketchUp.app/Contents/Info.plist"
    plists = Pathname.glob(pattern).map { |path| PlistLite.load(IO.read(path)) }
    plists.filter! { |p| p.key? "CFBundleShortVersionString" }

    return if plists.empty?

    versions = plists.map { |p| p["CFBundleShortVersionString"].to_i }

    versions.sort.reverse.first.to_s
  end

  # Returns the last two digits of the current year.
  #
  # @return [String] The most recently released version of SketchUp
  def this_year
    Time.now.year.to_s[-2, 2]
  end

  # Deduce the SketchUp version
  #
  # @return [String] The most recently version of SketchUp
  def main
    installed or remote or this_year
  end

end

puts SketchUpVersion.main
