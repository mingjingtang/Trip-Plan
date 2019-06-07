class Trip < ApplicationRecord
    belongs_to :user
    # has_and_belongs_to_many :places
    has_many :places_trips
    has_many :places, :through => :places_trips
end
