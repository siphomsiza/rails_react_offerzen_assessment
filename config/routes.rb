Rails.application.routes.draw do
  get 'homepage/index'
  namespace :api do
    namespace :v1 do
      get 'list/index'
      post 'list/create'
    end
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
