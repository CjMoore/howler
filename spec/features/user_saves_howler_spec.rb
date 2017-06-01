require 'rails_helper'

describe "after user submits text and clicks save", type: :feature, js: true do
  it "the data is persisted in database" do
      user = User.create(name: 'name')

      allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(user)

      visit root_path

      expect(page).to_not have_button('Sign in with Twitter To Save')

      find("textarea[name='text']").set('I like things')
      find("input[name='howler-title']").set('title yo')

      find('input[name="get-data"]').click
      sleep(2)
      expect(page).to have_button('Save')
      sleep(2)
      click_on('Save')
      sleep(2)
      updated_user = User.find(user.id)
      expect(updated_user.howlers.count).to eq(1)
      # expect(current_path).to eq(howlers_path)
    end
end
