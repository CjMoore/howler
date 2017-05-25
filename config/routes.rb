Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "home#show"

  get '/auth/twitter', as: :login
  get '/auth/twitter/callback', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy', as: :logout

  namespace :api do
    namespace :v1 do
      resources :tones, only: [:create, :index]
    end
  end
end
