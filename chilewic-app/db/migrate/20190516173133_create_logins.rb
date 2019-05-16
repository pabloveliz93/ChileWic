class CreateLogins < ActiveRecord::Migration[5.2]
  def change
    create_table :logins do |t|
      t.string :mail
      t.string :contrasena

      t.timestamps
    end
  end
end
