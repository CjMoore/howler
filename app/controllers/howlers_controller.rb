class HowlersController < ApplicationController
  def index
    @howlers = Howler.all.order(:created_at).reverse_order
  end
end
