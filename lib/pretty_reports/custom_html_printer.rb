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
    puts "STARTING"
    file_path = File.join(File.dirname(__FILE__), '/templates/test.js')
    ugly_js = Closure::Compiler.new.compile(File.open(file_path, 'r'))
    notification.count.times do
      @tests << {}
    end
    cardsJson = @tests.to_json
    set_test_cards(cardsJson)
    write_html_to_output
  end

  def pass_next_in_queue(passed)
    puts "PASSED"
    test = @tests.detect { |test| test.empty? }
    test.merge!({
                    status: 'passed',
                    title: passed.example.description,
                    description: passed.example.description
                })
    set_test_cards(@tests)
    write_html_to_output
  end

  def pending_next_in_queue(pending)
    puts "PENDING"
    test = @tests.detect { |test| test.empty? }
    test.merge!({
                    status: 'pending',
                    title: pending.example.description,
                    description: pending.example.description
                })
    set_test_cards(@tests)
    write_html_to_output
  end

  def fail_next_in_queue(failure)
    puts "DIDN'T PASS"
    test = @tests.detect { |test| test.empty? }
    test.merge!({
        status: 'failed',
        title: failure.example.description,
        description: failure.example.execution_result.exception.to_s
    })
    set_test_cards(@tests)
    write_html_to_output
  end

  def flush
    @output.flush
  end

  private
  def set_test_cards(list_of_tests)
    @data_flow.content = "var cards=#{list_of_tests.to_json}"
  end

  def write_html_to_output
    @output.truncate 0
    @output.puts(@template.to_html)
  end
end