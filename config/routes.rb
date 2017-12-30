Rails.application.routes.draw do
  resources :log_entries
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  scope '/api' do
    resources :log_entries
  end
end
