class User < ApplicationRecord

  has_many :howlers

  def self.find_or_create_from_auth(auth)
   user = User.find_or_create_by(uid:auth["uid"])
   user.uid             = auth["uid"]
   user.nickname        = auth["info"]["nickname"]
   user.name            = auth["info"]["name"]
   user.description     = auth["info"]["description"]
   user.image           = auth["info"]["image"]
   user.token           = auth["credentials"]["token"]
   user.save
   user
  end
end
