class CreateJoinTablePlacesTrips < ActiveRecord::Migration[5.2]
  def change
    create_join_table :places, :trips do |t|
      t.index [:place_id, :trip_id]
      t.index [:trip_id, :place_id]
    end
  end
end
