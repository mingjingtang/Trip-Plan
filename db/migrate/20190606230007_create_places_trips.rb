class CreatePlacesTrips < ActiveRecord::Migration[5.2]
  def change
    create_table :places_trips do |t|

      t.timestamps
    end
  end
end
