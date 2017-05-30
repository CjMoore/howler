class HowlersController < ApplicationController
  def index
    @howlers = current_user.howlers.order(:created_at).reverse_order
  end

  def show
    @howler = current_user.howlers.find(params[:id])
  end
end
