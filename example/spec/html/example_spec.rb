require 'spec_helper'

describe "some example specs" do

  it 'passed', someTag: 'firstTAg' do
    expect(1).to eq 1
  end

  it "didn't pass", someTag: 'secondTAg', crail_id: 1234 do

    RSpec.current_example.metadata.merge!({
        reporter_images: [
            {
                url: 'http://via.placeholder.com/350x150',
                title: 'The First Image',
                description: 'The First Image Description'
            },
            {
                url: 'http://via.placeholder.com/350x150',
                title: 'The Second Image',
                description: 'The Second Image Description'
            }
        ]
                                          })

    RSpec.current_example.metadata.merge!({
        reporter_logs: [
            {
                title: 'Main Test Logs',
                url: 'http://link-to-logs.txt'
            },
            {
                title: 'Second Test Logs',
                url: 'http://link-to-logs.txt'
            }
        ]
                                          })
    expect(1).to eq 0
  end

  it 'the failing one with Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong name' do
    1/0
  end

  it 'some example specs the failing one with Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooo' do
    1/0
  end

  it 'is pending' do
    pending 'the test is lOKO'
    1/0
  end
end
