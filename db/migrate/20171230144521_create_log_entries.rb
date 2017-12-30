class CreateLogEntries < ActiveRecord::Migration[5.1]
  def change
    create_table :log_entries do |t|
      t.datetime :datetime
      t.string :category
      t.text :content

      t.timestamps
    end
  end
end
