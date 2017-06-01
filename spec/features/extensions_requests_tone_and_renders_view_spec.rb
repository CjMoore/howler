require "rails_helper"

describe "user can use extension to get tones and renders a view" do
  it "when extension requests /extensions it renders a howler to a show page" do
    VCR.use_cassette('/services/request') do
      visit '/extensions?text=something'

      expect(current_path).to eq(extension_show_path)

      expect(page).to have_content("something")
    end
  end
end