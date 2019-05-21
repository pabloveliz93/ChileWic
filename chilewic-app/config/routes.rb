
Rails.application.routes.draw do


  get 'hello_world', to: 'hello_world#index'
  get 'home/index'
  root  'home#index'
  get '/about', to: 'home#about', as: :acerca
  get "/contact", to: "home#contact", as: :contacto
  get "/login", to: "home#login", as: :login
  get "/register", to: "home#register", as: :registro




  end
