require 'rails_helper'

describe "As a user" do
  context "I go to the show page" do
    it "I see the title and text" do
      user_1 = User.create(name: 'Sample')

      allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(user_1)

      howler = user_1.howlers.create(title: 'sample', text: 'sample one')

      visit howler_path(howler)

      expect(page).to have_content('sample')
      expect(page).to have_content('sample one')
    end
  end
end
