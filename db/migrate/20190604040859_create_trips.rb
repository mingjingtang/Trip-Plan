class CreateTrips < ActiveRecord::Migration[5.2]
  def change
    create_table :trips do |t|
      t.string :name
      t.string :category
      t.string :region

      t.timestamps
    end
  end
end
