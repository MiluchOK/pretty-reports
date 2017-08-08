require 'closure-compiler'
require 'nokogiri'
require 'json'

class CustomHtmlPrinter
  def initialize(output)
    @output = output
  end

  def print_html_start(notification)
    input = File.open(File.join(File.dirname(__FILE__), '/templates/template_page.html'))
    file_path = File.join(File.dirname(__FILE__), '/templates/test.js')
    ugly_js = Closure::Compiler.new.compile(File.open(file_path, 'r'))
    template = Nokogiri::HTML(File.open(input))
    cardsJson = [
        {title: 'foo'},
        {title: 'boo'}
    ].to_json
    template.css('script')[-2].content = "var cards=#{cardsJson}"
    @output.puts(template.to_html)
  end

  def flush
    @output.flush
  end
end