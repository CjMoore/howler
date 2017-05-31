class HowlersController < ApplicationController
  def index
    @howlers = current_user.howlers.order(:created_at).reverse_order
  end

  def destroy
    howler = Howler.find(params[:id])
    howler.delete
    flash[:notice] = "You have successfully deleted Howler"
    redirect_to howlers_path
  end

  def show
    @howler = current_user.howlers.find(params[:id])
  end
end
