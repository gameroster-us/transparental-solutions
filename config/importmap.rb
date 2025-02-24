# Pin npm packages by running ./bin/importmap

pin "jquery", to: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.4/jquery.min.js"
pin "application"
pin "@hotwired/turbo-rails", to: "turbo.min.js", preload: true
pin "popper", to: 'popper.js', preload: true
pin "bootstrap", to: 'bootstrap.min.js', preload: true
pin "@hotwired/stimulus", to: "stimulus.min.js"
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js"
pin_all_from "app/javascript/controllers", under: "controllers"