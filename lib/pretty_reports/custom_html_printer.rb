require 'closure-compiler'
require 'nokogiri'
require 'json'

class CustomHtmlPrinter
  def initialize(output)
    @output = output
    @tests = []
    @template = Nokogiri::HTML(File.open(File.open(File.join(File.dirname(__FILE__), '/templates/template_page.html'))))
  end

  def print_html_start(notification)
    puts "STARTING"
    file_path = File.join(File.dirname(__FILE__), '/templates/test.js')
    ugly_js = Closure::Compiler.new.compile(File.open(file_path, 'r'))
    write_html_to_output
  end

  def pass_next_in_queue(passed)
    puts "PASSED"
    @tests << {
                    status: 'passed',
                    title: passed.example.description,
                    description: passed.example.description
                }
    write_html_to_output
  end

  def pending_next_in_queue(pending)
    puts "PENDING"
    @tests << {
                    status: 'pending',
                    title: pending.example.description,
                    description: pending.example.description
                }
    write_html_to_output
  end

  def fail_next_in_queue(failure)
    puts "DIDN'T PASS"
    @tests << {
        status: 'failed',
        title: failure.example.description,
        description: failure.example.execution_result.exception.to_s
    }
    write_html_to_output
  end

  def write_html_to_output
    @template.css('script')[-2].content = "var cards=#{@tests.to_json}"
    @output.truncate 0
    @output.puts(@template.to_html)
  end
end