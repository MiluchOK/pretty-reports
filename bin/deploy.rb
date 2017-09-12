#!/usr/bin/env ruby

require "bundler/setup"
require "pretty_reports"

build = %x( gem build pretty_reports.gemspec)
gem_file_name = build.split("\n").last.split(' ').last
r = %x( bundle exec gem inabox #{gem_file_name})
puts r