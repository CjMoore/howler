class Api::V1::TonesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    render status: 200, json: Tone.get(params["text"])
  end
end
