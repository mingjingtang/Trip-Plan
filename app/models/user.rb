class User < ApplicationRecord
    has_many :trips
    has_and_belongs_to_many :likes
end
