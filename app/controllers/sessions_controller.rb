class SessionsController < ApplicationController
  def create
    auth = request.env["omniauth.auth"]
    user = User.find_or_create_from_auth(auth)
    if user
      session[:user_id] = user.id
      redirect_to root_path
    else
      redirect_to login_path
    end
  end

  def destroy
    session.clear
    redirect_to root_path
  end
end
