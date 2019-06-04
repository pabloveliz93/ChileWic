class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :nombre
      t.string :apellido
      t.string :usuario
      t.string :ciudad
      t.string :institucion
      t.string :grado
      t.boolean :acept

      t.timestamps
    end
  end
end
