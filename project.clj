(defproject binaryage/chromex-sample "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.9.0-alpha14"]
                 [org.clojure/clojurescript "1.9.473"]
                 [org.clojure/core.async "0.3.441"]
                 [binaryage/chromex "0.5.6"]
                 [binaryage/devtools "0.9.1"]
                 [environ "1.1.0"]]

  :plugins [[lein-cljsbuild "1.1.5"]
            [lein-shell "0.5.0"]
            [lein-environ "1.1.0"]]

  :source-paths ["src/content_script"]

  :clean-targets ^{:protect false} ["target"
                                    "resources/unpacked/compiled"
                                    "resources/release/compiled"]

  :cljsbuild {:builds {}}                                                                                                     ; prevent https://github.com/emezeske/lein-cljsbuild/issues/413

  :profiles {:unpacked-content-script
             {:cljsbuild {:builds
                          {:content-script
                           {:source-paths ["src/content_script"]
                            :compiler     {:output-to     "resources/unpacked/compiled/content-script/main.js"
                                           :output-dir    "resources/unpacked/compiled/content-script"
                                           :asset-path    "compiled/content-script"
                                           :main          chromex-sample.content-script
                                           ;:optimizations :whitespace                                                        ; content scripts cannot do eval / load script dynamically
                                           :optimizations :advanced                                                           ; let's use advanced build with pseudo-names for now, there seems to be a bug in deps ordering under :whitespace mode
                                           :pseudo-names  true
                                           :pretty-print  true}}}}}

             :release
             {:env       {:chromex-elide-verbose-logging "true"}
              :cljsbuild {:builds
                          {:content-script
                           {:source-paths ["src/content_script"]
                            :compiler     {:output-to     "resources/release/compiled/content-script.js"
                                           :output-dir    "resources/release/compiled/content-script"
                                           :asset-path    "compiled/content-script"
                                           :main          chromex-sample.content-script
                                           :optimizations :advanced
                                           :elide-asserts true}}}}}}

  :aliases {"content"     ["with-profile" "+unpacked-content-script" "cljsbuild" "auto" "content-script"]
            "release"     ["with-profile" "+release" "do"
                           ["clean"]
                           ["cljsbuild" "once" "content-script"]]
            "package"     ["shell" "scripts/package.sh"]})
