class CreateAllplaces < ActiveRecord::Migration[5.2]
  def change
    create_table :allplaces do |t|
      t.string :name
      t.string :region
      t.string :image

      t.timestamps
    end
  end
end
