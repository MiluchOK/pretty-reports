# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'pretty_reports/version'

Gem::Specification.new do |spec|
  spec.name          = "pretty_reports"
  spec.version       = PrettyReports::VERSION
  spec.authors       = ["Alexey Milyukov"]
  spec.email         = ["milyukov.alexey@gmail.com"]

  spec.summary       = 'A set of custom reporters to replace default RSpec formatters.'
  spec.description   = 'HTML formatter is writtn to solve problem of combining multiple reports created in parallel.'
  spec.homepage      = "https://github.com/MiluchOK/pretty-reports"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").reject do |f|
    f.match(%r{^(test|spec|features)/})
  end
  spec.bindir        = "exe"
  spec.executables   = spec.files.grep(%r{^exe/}) { |f| File.basename(f) }
  spec.require_paths = ["lib"]

  spec.add_development_dependency "bundler", "~> 1.14"
  spec.add_development_dependency "rake", "~> 10.0"
  spec.add_development_dependency "rspec", "~> 3.0"
  spec.add_development_dependency "pry"

  spec.add_dependency 'closure-compiler'
end
