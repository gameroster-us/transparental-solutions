class Users::RegistrationsController < Devise::RegistrationsController
  def create
    super do |user|
      UserMailer.welcome_email(user).deliver_now if user.persisted?
    end
  end
end
