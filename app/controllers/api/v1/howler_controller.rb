class Api::V1::HowlerController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    @howler = Howler.new(howler_params)
  end

  private

  def howler_params
    params.require(:howler).permit(:text,
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
