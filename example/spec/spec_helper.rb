require "bundler/setup"
require "pretty_reports"
require 'httpclient'

RSpec.configure do |config|
  config.add_formatter(PrettyReports::HtmlReporter, 'tmp/rspec.html')
end