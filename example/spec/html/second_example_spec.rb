require 'spec_helper'

RSpec.configure do |config|
  config.add_formatter(PrettyReports::HtmlReporter, 'tmp/rspec.html')
end

describe "some other example specs" do

  it 'passed again' do
    expect(1).to eq 1
  end

  it "didn't pass again" do
    expect(1).to eq 0
  end
end
