# PrettyReports

#TODOs before public release

1) Convert logs to be clickable links instead of text  (Done)
2) Add Summary with number of tests executed broken down by number of tests passed ,failed and 
 pending (Done)
3) Add functionality to squash together multiple reports

A pretty RSpec html reporter with decent customization capabilities and ability to 'squash' multiple 
  reports into one if case if you are running lots of parallel test executions.

## Installation
bundl
Add this line to your application's Gemfile:

```ruby
gem 'PrettyReports'
```

## Usage

#### How to add **images** to my reports? 

``` ruby 
images = [
    {
        url: 'http://url_to_the_image.png',
        title: 'Title of the image',
        description: 'Description of the image'
    },
    {
            url: 'http://url_to_the_second_image.png',
            title: 'Title of the image',
            description: 'Description of the image'
        }
]
RSpec.current_example.metadata.merge!(reporter_images: images)
```

Note: It is important that the list of image hashes is named as `reporter_images` ,because that is
what the gem is going to be looking for.

## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).

