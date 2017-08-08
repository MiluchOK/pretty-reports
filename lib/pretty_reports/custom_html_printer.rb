require 'closure-compiler'
require 'nokogiri'
require 'json'

class CustomHtmlPrinter
  def initialize(output)
    @output = output
    @tests = []
    @template = Nokogiri::HTML(File.open(File.open(File.join(File.dirname(__FILE__), '/templates/template_page.html'))))
    @data_flow = @template.css('script')[-2]
  end

  def print_html_start(notification)
    file_path = File.join(File.dirname(__FILE__), '/templates/test.js')
    ugly_js = Closure::Compiler.new.compile(File.open(file_path, 'r'))
    notification.count.times do
      @tests << {}
    end
    cardsJson = @tests.to_json
    set_test_cards(cardsJson)
    @output.puts(@template.to_html)
  end

  def fail_next_in_queue
    test = @tests.detect { |test| test.empty? }
    test.merge!({
        status: 'failed',
        title: 'foooo',
        description: 'boooo'
    })
    set_test_cards(@tests)
    @output.puts(@template.to_html)
  end

  def flush
    @output.flush
  end

  private
  def set_test_cards(list_of_tests)
    @data_flow.content = "var cards=#{list_of_tests}"
  end
end