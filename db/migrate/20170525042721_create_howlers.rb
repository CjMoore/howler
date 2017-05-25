class CreateHowlers < ActiveRecord::Migration[5.0]
  def change
    create_table :howlers do |t|
      t.string :text
      t.string :title
      t.float :anger
      t.float :disgust
      t.float :fear
      t.float :joy
      t.float :sadness
      t.float :analytical
      t.float :confident
      t.float :tentative
      t.float :openness
      t.float :conscientiousness
      t.float :extraversion
      t.float :agreeableness
      t.float :emotional_range

      t.timestamps
    end
  end
end
