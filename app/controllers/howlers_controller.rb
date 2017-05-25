class HowlersController < ApplicationController
  def index
    @howlers = Howler.all
  end
end
