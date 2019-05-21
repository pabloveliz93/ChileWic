class CreateUsuarios < ActiveRecord::Migration[5.2]
  def change
    create_table :usuarios do |t|
      t.string :nombre
      t.string :mail
      t.string :organizacion
      t.string :contraseña

      t.timestamps
    end
  end
end
