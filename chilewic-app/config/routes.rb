Rails.application.routes.draw do
  get 'asistencia/index'
  root 'asistencia#index'

    resources :asistencia
end
