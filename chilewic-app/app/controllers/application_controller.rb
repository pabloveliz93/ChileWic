class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token  



  def index
  end
  def edit
    render action :'edit', layout: 'application/layout' # implicitly called
  end
end
