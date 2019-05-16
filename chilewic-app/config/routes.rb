Rails.application.routes.draw do
  resources :logins
  get 'home/index'
  get 'asistencia/index'
  root 'asistencia#index'

    resources :asistencia
end
