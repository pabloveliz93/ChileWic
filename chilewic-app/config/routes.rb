
Rails.application.routes.draw do

  root  'home#index'
  namespace :api, defaults: { format: 'json' } do
   resources :asistencias, only: [:index, :create]
   resources :users, only: [:index, :create,:update,:destroy]
 end

    # IMPORTANT #
  # This `match` must be the *last* route in routes.rb
  match '*path', to: 'home#index', via: :all




  end
