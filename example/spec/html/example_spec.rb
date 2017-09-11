require 'spec_helper'

describe "some example specs" do

  it 'passed', someTag: 'firstTAg' do
    expect(1).to eq 1
  end

  it "didn't pass", someTag: 'secondTAg' do

    logs = JSON.parse(HTTPClient.new.get('https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1').body).join("\n\n")

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
                content: logs
            },
            {
                title: 'Second Test Logs',
                content: logs
            }
        ]
                                          })
    expect(1).to eq 0
  end

  it 'is pending' do
    pending 'the test is lOKO'
    1/0
  end
end
