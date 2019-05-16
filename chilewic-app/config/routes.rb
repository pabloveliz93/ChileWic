Rails.application.routes.draw do

  root 'asistencia#index'

  match "*path", to: "asistencia#index", via: :all
    resources :asistencia
end
