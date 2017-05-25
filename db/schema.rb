
ActiveRecord::Schema.define(version: 20170525042721) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "howlers", force: :cascade do |t|
    t.string   "text"
    t.string   "title"
    t.float    "anger"
    t.float    "disgust"
    t.float    "fear"
    t.float    "joy"
    t.float    "sadness"
    t.float    "analytical"
    t.float    "confident"
    t.float    "tentative"
    t.float    "openness"
    t.float    "conscientiousness"
    t.float    "extraversion"
    t.float    "agreeableness"
    t.float    "emotional_range"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
    t.integer  "user_id"
    t.index ["user_id"], name: "index_howlers_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "uid"
    t.string   "nickname"
    t.string   "name"
    t.string   "description"
    t.string   "token"
    t.string   "image"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

end
