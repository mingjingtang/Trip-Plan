class User < ApplicationRecord
    has_many :trips, dependent: :delete_all
end
