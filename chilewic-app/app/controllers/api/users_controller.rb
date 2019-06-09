module API
class UsersController < ApplicationController

  # GET /users
     def index
       @users = User.order(:id)

       render json: @users
     end

     # GET /users/1
     def show
       render json: @user
     end

     # POST /users
     def create
       @user = User.new(user_params)

       if @user.save
         render json: @user, status: :created
       else
         render json: @user.errors, status: :unprocessable_entity
       end
     end

     # PATCH/PUT /users/2
     def update
       if @user.update(user_params)
         render json: @user
       else
         render json: @uer.errors, status: :unprocessable_entity
       end
     end

     # GET /users/:all
     def find
       @user = User.find_by(email: params[:usuario][:email])
        if @user
          render json: @user
        else
          @errors = @user.errors.full_messages
          render json: @errors
        end
    end





     # DELETE /users/1
     def destroy
       @user.destroy
       if @user.destroy
         head :no_content, status: :ok
       else
         render json: @user.errors, status: :unprocessable_entity
       end
     end

     private


       # Only allow a trusted parameter "white list" through.
       def user_params
         params.require(:user).permit(:nombre, :apellido, :usuario,:password, :ciudad, :institucion, :grado, :acept)
       end
   end
 end
