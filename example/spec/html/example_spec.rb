require 'spec_helper'

describe "some example specs" do

  it 'passed', someTag: 'firstTAg' do
    expect(1).to eq 1
  end

  it "didn't pass", someTag: 'secondTAg' do
    expect(1).to eq 0
  end

  it 'is pending' do
    pending 'the test is lOKO'
    1/0
  end
end
