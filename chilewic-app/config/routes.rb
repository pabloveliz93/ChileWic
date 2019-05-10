Rails.application.routes.draw do
  root 'home#index'
  match "*path", to: "home#index", via: :all 
end
