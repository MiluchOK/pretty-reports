require 'closure-compiler'
require 'nokogiri'
require 'json'
require 'cssminify'
require 'jsx'

class CustomHtmlPrinter
  def initialize(output)
    @output = output
    @tests = []
    @template = Nokogiri::HTML(File.open(File.open(File.join(File.dirname(__FILE__), '/templates/template_page.html'))))
  end

  def print_html_start(notification)
    puts "STARTING"
    # js_file_path = File.join(File.dirname(__FILE__), '/templates/js/testCard.jsx')
    # TODO Take care of uglification/minification later
    # ugly_js = Closure::Compiler.new.compile(File.open(js_file_path, 'r'))
    # compiled = JSX.transform(File.read(js_file_path))
    # css_file_path = File.join(File.dirname(__FILE__), '/templates/css/test.css')
    # minified_css = CSSminify.compress(File.read(css_file_path))
    append_initial_js
    append_initial_css
    write_html_to_output
  end

  def pass_next_in_queue(passed)
    puts "PASSED"
    @tests << {
                    status: 'passed',
                    title: passed.example.description,
                    description: passed.example.description,
                    metadata: passed.example.metadata
                }
    write_html_to_output
  end

  def pending_next_in_queue(pending)
    puts "PENDING"
    @tests << {
                    status: 'pending',
                    title: pending.example.description,
                    description: pending.example.description,
                    metadata: pending.example.metadata
                }
    write_html_to_output
  end

  def fail_next_in_queue(failure)
    puts "DIDN'T PASS"
    @tests << {
        status: 'failed',
        title: failure.example.description,
        description: failure.example.execution_result.exception.to_s,
        metadata: failure.example.metadata
    }
    write_html_to_output
  end

  def append_initial_js
    js_content = File.read(File.join(File.dirname(__FILE__), '/templates/js/testCard.jsx'))
    @template.css('script')[-1].content = js_content
    write_html_to_output
  end

  def append_initial_css
    css_content = File.read(File.join(File.dirname(__FILE__), '/templates/css/test.css'))
    @template.css('style').first.content = css_content
    write_html_to_output
  end

  def write_html_to_output
    @template.css('script')[-2].content = "var cards=#{@tests.to_json}"
    @output.truncate 0
    @output.puts(@template.to_html)
  end
end