class UserMailer < ApplicationMailer
  def profile_update_notification(user)
    @user = user
    mail(to: 'company@example.com', subject: 'User Profile Update Notification')
  end

  def welcome_email(user)
    @user = user
    mail(to: @user.email, subject: "Welcome to Our Platform!")
  end
end
  