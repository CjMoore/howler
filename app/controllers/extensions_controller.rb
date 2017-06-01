class ExtensionsController < ApplicationController
  def show
    @howler = Howler.new(prepared_data)
  end

  private

  def prepared_data
    analyzed = Tone.get(params["text"])
    prepared = Hash.new
    prepared[:text] = params["text"]
    prepared[:title] = "The Howler Howls: Your Analyzed Data!"

    analyzed.each do |tone_category|
      tone_category.values[0].each do |tone, score|
        if tone.downcase.include?('emotional range')
          prepared[:emotional_range] = score
        else
          prepared[tone.downcase.to_sym] = score
        end
      end
    end
    prepared
  end

end