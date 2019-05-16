class CreateAsistencia < ActiveRecord::Migration[5.2]
  def change
    create_table :asistencia do |t|
      t.string :nombre
      t.string :apellido
      t.string :correo
      t.integer :telefono
      t.string :institucion


      t.timestamps
    end
  end
end
