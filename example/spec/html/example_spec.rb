require 'spec_helper'

describe "some example specs" do

  it 'passed' do
    expect(1).to eq 1
  end

  it "didn't pass" do
    expect(1).to eq 0
  end

  it 'is pending' do
    pending 'the test is lOKO'
    1/0
  end
end
