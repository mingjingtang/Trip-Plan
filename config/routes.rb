Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # get "/places", to: "places#index"
  # resource :restaurant

  root to: 'root#index'
  resources :places
  resources :restaurants
end
