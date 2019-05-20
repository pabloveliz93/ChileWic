# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_05_16_173133) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "asistencia", force: :cascade do |t|
    t.string "correo"
    t.string "nombre"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "asistentes", force: :cascade do |t|
    t.string "nombre"
    t.string "apellido"
    t.string "mail"
    t.integer "telefono"
    t.string "institucion"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "logins", force: :cascade do |t|
    t.string "mail"
    t.string "contrasena"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
