class Place < ApplicationRecord
    # has_and_belongs_to_many :trips
    has_many :places_trips
    has_many :trips, through: :places_trips
end
