class Api::V1::HowlersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    @howler = current_user.howlers.new(howler_params)
    if @howler.save
      flash[:notice] = 'Howler successfully saved'
      render js: "window.location.pathname='#{howlers_path}'"
    else
      flash[:error] =  @howler.errors.full_messages.to_sentence
      render partial: 'shared/flash_error', layout: false
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
