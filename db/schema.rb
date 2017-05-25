

ActiveRecord::Schema.define(version: 20170525010907) do


  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

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
