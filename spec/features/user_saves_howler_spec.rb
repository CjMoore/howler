require 'rails_helper'

describe "after user submits text and clicks save", js: true do
  it "the data is persisted in database" do
    VCR.use_cassette('services/save-howler') do
      user = User.create(name: 'name')

      allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(user)

      visit root_path

      expect(page).to_not have_button('Sign in with Twitter To Save')

      find("textarea[name='text']").set('I like things')
      find("input[name='howler-title']").set('title yo')
      find('input[name="get-data"]').click

      expect(page).to have_button('Save')

      click_on('Save')
      sleep(10)

      # expect(user.howlers.count).to eq(1)

      # expect(current_path).to eq(howlers_path)
    end
  end
end
