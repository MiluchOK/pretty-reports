require 'spec_helper'

describe PrettyReports::HtmlReporter do

  EXAMPLE_DIR = File.expand_path("../../example", __FILE__)

  let(:output_path) { File.join(EXAMPLE_DIR, "tmp/rspec.html") }

  before(:all) do
    Dir.chdir EXAMPLE_DIR do
      ENV['TEST_ENV_NUMBER'] = '2'
      system "bundle", "exec", "rspec", "spec/html"
    end
  end

  it 'should be created' do
  end
end