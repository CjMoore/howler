require 'twitter'

class TwitterService
  attr_reader :client, :nickname
  def initialize(user)
    @nickname    = user.nickname
    @avatar      = user.image
    @client      = Twitter::REST::Client.new do |config|
      config.consumer_key        = "#{ENV['TWITTER_KEY']}"
      config.consumer_secret     = "#{ENV['TWITTER_SECRET']}"
    end
  end
