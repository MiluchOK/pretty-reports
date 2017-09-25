require "bundler/setup"
require "pretty_reports"
require 'httpclient'

RSpec.configure do |config|
  config.add_formatter(PrettyReports::HtmlReporter, 'tmp/rspec.html')
end

at_exit do
  PrettyReports.combine_reports((Dir["./tmp/rspec*.html"].map { |path| File.expand_path path }), File.expand_path('./tmp/summary.html'))
end