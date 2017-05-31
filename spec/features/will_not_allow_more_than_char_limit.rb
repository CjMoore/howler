require 'rails_helper'

describe 'when user is on root they are able to fill out a form' do
    it 'they cannot enter more than 10k chars' do
        VCR.use_cassette('/services/user_submit') do
            visit root_path

            within(".input-form") do
              find("textarea[name='text']").set('I hate cheese.')
              find('input[name="get-data"]').click
            end

            expect(page).to have_content('What would you like to analyze?')
            expect(page).to have_content('Tone Name')
            expect(page).to have_content('Tone Score')

        end
    end
end
