Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # get "/places", to: "places#index"
  # resource :restaurant

  root to: 'root#index'
  resources :places, only: [:index]
  # resources :trips
  resources :users

  scope '/users/:user_id' do
    resources :trips
  end

  scope '/users/:user_id/trips/:trip_id/' do 
    resources :places, only: [:show]
  end

end
