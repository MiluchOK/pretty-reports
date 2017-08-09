require "bundler/setup"
require "pretty_reports"

RSpec.configure do |config|
  config.add_formatter(PrettyReports::HtmlReporter, 'tmp/rspec.html')
end