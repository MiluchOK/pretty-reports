require 'spec_helper'

describe "some other example specs" do

  it 'passed again' do
    expect(1).to eq 1
  end

  it "didn't pass again" do
    expect(1).to eq 0
  end

  it 'is pending again' do
    pending 'the test is lOKO'
    1/0
  end
end
