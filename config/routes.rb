Rails.application.routes.draw do
  devise_for :users, controllers: { registrations: 'users/registrations' }

  devise_for :admins, path: 'admins', controllers: { sessions: "admins/sessions" }
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check
  root 'pages#index'
  get 'pages/index'
  get '/about', to: 'pages#about', as: 'about_page'
  get '/service', to: 'pages#service', as: 'service_page'
  get '/careers', to: 'pages#careers', as: 'careers_page'
  get '/job_posting', to: 'pages#job_posting', as: 'job_posting_page'
  get '/contact_us', to: 'pages#contact_us', as: 'contact_us_page'
  get 'users/profile', to: 'users#profile', as: 'user_profile'
  get 'admins/inquiries', to: 'admins#inquiries', as: 'admin_inquiries'
  resources :users
  resources :admins
  resources :inquiries
  post 'create_inquiry', to: 'pages#create_inquiry'
end