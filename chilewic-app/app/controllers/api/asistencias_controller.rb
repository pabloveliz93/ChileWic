module API
  class AsistenciasController < ApplicationController
    def index
        asistencias = Asistencium.order("created_at DESC")

      render json: { asistencias: asistencias }
    end

    def create
      asistencium = Asistencium.create(asistencium_param)
      render json: asistencium

    end



    private
    def asistencium_param
      params.require(:asistencium).permit(:nombre, :apellido, :correo, :telefono, :institucion)
    end
  end
end
