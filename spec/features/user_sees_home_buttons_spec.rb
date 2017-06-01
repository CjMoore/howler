require "rails_helper"

describe "when guest user submits input", js: true do
  it "a clear button appears" do
    VCR.use_cassette('services/home') do

      visit root_path

      find("textarea[name='text']").set('I like things')
      find("input[name='howler-title']").set('title yo')
      find('input[name="get-data"]').click
      #for some reason I can't use the fill_in 'title', with: syntax?

      expect(page).to have_button("Clear")
    end
  end
end
