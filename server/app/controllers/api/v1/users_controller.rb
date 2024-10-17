class Api::V1::UsersController < ApplicationController
  def create
    @user = User.create(user_params)
    if @user.save 
      render json: UserSerializer.new(@user).serializable_hash.to_json, status: :created
    else 
      render json: @user.errors, status: :unprocessable_entity
    end 
  end


  private
  def user_params
    params.require(:user).permit(:username, :email, :password, :password_confirmation)
  end
end
