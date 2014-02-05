require 'rake/clean'

class Task 
# From http://martinfowler.com/articles/rake.html
  def investigation
    result = "------------------------------\n"
    result << "Investigating #{name}\n" 
    result << "class: #{self.class}\n"
    result <<  "task needed: #{needed?}\n"
    result <<  "timestamp: #{timestamp}\n"
    result << "pre-requisites: \n"
    prereqs = @prerequisites.collect {|name| Task[name]}
    prereqs.sort! {|a,b| a.timestamp <=> b.timestamp}
    prereqs.each do |p|
      result << "--#{p.name} (#{p.timestamp})\n"
    end
    latest_prereq = @prerequisites.collect{|n| Task[n].timestamp}.max
    result <<  "latest-prerequisite time: #{latest_prereq}\n"
    result << "................................\n\n"
    return result
  end
end


def version
    File.read('VERSION').strip
end

THUNDERBIRD_SRC = FileList['src/**/*']
#THUNDERBIRD_SRC.include %w(Firefox/content/global.js Firefox/content/injected.js Firefox/content/firefox.js)

file "dist/LiveReload-#{version}.xpi" => THUNDERBIRD_SRC do |task|
end

desc "Build Thunderbird extension"
task :Thunderbird => THUNDERBIRD_SRC do |task|
    mkdir_p "dist/#{version}"
    dest = "dist/#{version}/ToggleFullHeaders-#{version}.xpi"
    full_dest = File.expand_path(dest)
    rm full_dest if File.exists?(full_dest)
    Dir.chdir 'src' do
        sh 'zip', full_dest, *task.prerequisites.map { |f| f.sub(%r!^src/!, '') }
    end
    #sh 'open', '-R', full_dest
end




task :default => :Thunderbird

CLEAN.push *[
    'interim/injected.js',
    'interim/injected-safari.js',
    'interim/injected-chrome.js',
]
CLOBBER.push *[
    'LiveReload.safariextension/global.js',
    'LiveReload.safariextension/global-safari.js',
    'LiveReload.safariextension/injected.js',
    'Chrome/LiveReload/global.js',
    'Chrome/LiveReload/global-chrome.js',
    'Chrome/LiveReload/injected.js',
]
