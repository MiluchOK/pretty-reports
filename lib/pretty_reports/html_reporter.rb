require 'rspec'
require 'pry'
require 'json'
require 'rspec/core/formatters/base_formatter'
require 'rspec/core/formatters/html_printer'


module PrettyReports
  class HtmlReporter < RSpec::Core::Formatters::BaseFormatter

    RSpec::Core::Formatters.register self, :start, :example_started, :example_passed, :example_failed,
                        :example_pending, :dump_summary

    def initialize(output)
      super(output)
      @output = output
      @printer = CustomHtmlPrinter.new(@output)
    end

    def start(notification)
      super
      @printer.print_html_start(notification)
    end

    def example_started(_notification)

    end

    def example_passed(passed)
      @printer.pass_next_in_queue(passed)
    end

    def example_failed(failure)
      @printer.fail_next_in_queue(failure)
    end

    def example_pending(pending)
      example = pending.example
      @printer.pending_next_in_queue(pending)
    end

    def dump_summary(summary)
    end
  end
end
