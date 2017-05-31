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

  def update
    howler = current_user.howlers.find(params[:id])
    new_tone = Tone.get(params[:howler ][:text])
    howler.update(howler_params)
    if howler.save
      new_tone.each do |tone_category|
        tone_category.values[0].each do |tone, score|
          if tone.downcase.include?('emotional range')
            howler.update_attribute(:emotional_range, score)
          else
            howler.update_attribute(tone.downcase, score)
          end
        end
      end
      render json: howler
    else
      render howler_path(howler)
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
