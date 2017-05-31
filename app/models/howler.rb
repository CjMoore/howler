class Howler < ApplicationRecord

  belongs_to :user

  validates :text, :title, presence: true

  def update_tones(params)
    new_tone = Tone.get(params[:text])
    new_tone.each do |tone_category|
      tone_category.values[0].each do |tone, score|
        if tone.downcase.include?('emotional range')
          update_attribute(:emotional_range, score)
        else
          update_attribute(tone.downcase, score)
        end
      end
    end
  end
end
