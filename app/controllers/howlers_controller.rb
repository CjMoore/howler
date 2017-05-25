class HowlersController < ApplicationController
  def index
    @howlers = current_user.howlers.order(:created_at).reverse_order
  end
end
