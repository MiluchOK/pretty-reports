require "pretty_reports/version"
require "pretty_reports/html_reporter"
require "pretty_reports/custom_html_printer"
require 'nokogiri'
require 'rkelly'

module PrettyReports
  # Your code goes here...

  def self.combine_reports(list_of_filepaths, summary_path)
    total = []
    parser = RKelly::Parser.new
    list_of_filepaths.each do |filepath|
      file = Nokogiri::HTML(File.open(filepath))
      js = file.css('script')[-2].content
      ast = parser.parse(js)
      var_lable = ast.value[1].value.first.name
      the_json = JSON.parse(ast.value[1].value.first.value.first.value.to_ecma)
      total += the_json
    end

    original = Nokogiri::HTML(File.open(list_of_filepaths.first))
    js = original.css('script')[-2].content
    ast = parser.parse(js)
    logo_url = ast.first.value.first.value.first.value.value.value.gsub("'", '')
    original.css('script')[-2].content = "var logoUrl='#{logo_url}' \nvar cards=#{total.to_json}"
    File.delete(summary_path) if File.exist?(summary_path)
    File.open(summary_path, 'w') { |file| file.write(original.to_html) }
  end

end
