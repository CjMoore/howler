require 'rails_helper'

RSpec.describe Howler, type: :model do
  context 'relationships' do
    it { should belong_to(:user) }
  end

  context 'validations' do
    it { should validate_presence_of(:title)}
    it { should validate_presence_of(:text)}
  end
end
