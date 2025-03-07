class AdminsController < ApplicationController
  before_action :authenticate_admin!

  def index
    @users = User.all
  end

  def inquiries
    @inquiries = Inquiry.all
  end
  
end
