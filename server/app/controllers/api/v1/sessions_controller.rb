class Api::V1::SessionsController < ApplicationController
  def create 
    @user = User.find_by(email: params[:email])
    if @user && @user.authenticate(params[:password])
      session[:user_id] = user.id
      render json: UserSerializer.new(@user).serializable_hash.to_json, status: :created
    else
      render json: @user.errors, status: :unauthorized
    end
  end 

  def destroy
    session.delete(:user_id)
    head :no_content
  end

  def logged_in
    !!session[:user_id]
  end
end
