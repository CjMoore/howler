require 'rails_helper'

describe "As a user" do
  context "I go to the show page" do
    it "I see the title and text" do
      user_1 = User.create(name: 'Sample')

      allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(user_1)

      howler = user_1.howlers.create(title: 'sample',
                                     text: 'sample one',
                                     anger: 0.0,
                                     disgust: 0.0,
                                     fear: 0.0,
                                     joy: 0.0,
                                     sadness: 0.0,
                                     analytical: 0.0,
                                     confident: 0.0,
                                     tentative: 0.0,
                                     openness: 0.0,
                                     conscientiousness: 0.0,
                                     extraversion: 0.0,
                                     agreeableness: 0.0,
                                     emotional_range: 0.0)

      visit howler_path(howler)

      expect(page).to have_content('sample')
      expect(page).to have_content('sample one')
    end
  end
end
