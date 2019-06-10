class CreatePlacesTrips < ActiveRecord::Migration[5.2]
  def change
    create_table :places_trips do |t|
      t.references :trip, index:true, foreign_key: true
      t.references :place, index:true, foreign_key: true

      t.timestamps null:false
    end
  end
end
