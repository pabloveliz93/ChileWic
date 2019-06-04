module API
class UsersController < ApplicationController

  # GET /lists
     def index
       @users = User.order(:id)

       render json: @users
     end

     # GET /lists/1
     def show
       render json: @user
     end

     # POST /lists
     def create
       @user = User.new(user_params)

       if @user.save
         render json: @user, status: :created
       else
         render json: @user.errors, status: :unprocessable_entity
       end
     end

     # PATCH/PUT /lists/1
     def update
       if @user.update(user_params)
         render json: @user
       else
         render json: @uer.errors, status: :unprocessable_entity
       end
     end

     # DELETE /lists/1
     def destroy
       @user.destroy
       if @user.destroy
         head :no_content, status: :ok
       else
         render json: @user.errors, status: :unprocessable_entity
       end
     end

     private
       # Use callbacks to share common setup or constraints between actions.

       # Only allow a trusted parameter "white list" through.
       def user_params
         params.require(:user).permit(:nombre, :apellido, :usuario, :ciudad, :institucion, :grado, :acept)
       end
   end
 end
