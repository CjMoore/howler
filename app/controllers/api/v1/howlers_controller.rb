class Api::V1::HowlersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    @howler = Howler.new(howler_params)
    byebug
    if @howler.save
      flash[:notice] = 'Howler successfully saved'
      # render status: 302
      render js: "window.location.pathname='#{howlers_path}'"
    else
      #add flash for unsaved stuff
    end
  end

  private

  def howler_params
    params.require(:howler).permit(:text,
                                   :title,
                                   :anger,
                                   :disgust,
                                   :fear,
                                   :joy,
                                   :sadness,
                                   :analytical,
                                   :confident,
                                   :tentative,
                                   :openness,
                                   :conscientiousness,
                                   :extraversion,
                                   :agreeableness,
                                   :emotional_range)
  end
end
