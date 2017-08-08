require 'spec_helper'

RSpec.configure do |config|
  config.add_formatter(PrettyReports::HtmlReporter, 'tmp/rspec.html')
end

describe "some example specs" do

  it 'passed' do
    expect(1).to eq 1
  end

  it "didn't pass" do
    expect(1).to eq 0
  end
end
