class Trip < ApplicationRecord
    def change
        create_table :trip do |t|
            t.string :name
            t.string :type
            t.string :region

            t.timestamps
    end  
end
