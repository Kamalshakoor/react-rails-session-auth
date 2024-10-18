class Api::V1::SessionsController < ApplicationController
  def create 
    user = User.find_by(email: params[:email])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      Rails.logger.info "logged_in: #{session[:user_id]}"
      render json: { logged_in: true, user: UserSerializer.new(user).serializable_hash }, status: :created
    else
      render json: user.errors, status: :unauthorized
    end
  end 

  def destroy
    reset_session
    render json: { logged_in: false,  message: "logged out successfully" }
  end

def logged_in
  render json: { logged_in: !!session[:user_id] }
  Rails.logger.info "logged_in: #{!!session[:user_id]}"
end 

end
