class CreateAsistencia < ActiveRecord::Migration[5.2]
  def change
    create_table :asistencia do |t|
      t.string :correo
      t.string :nombre

      t.timestamps
    end
  end
end
