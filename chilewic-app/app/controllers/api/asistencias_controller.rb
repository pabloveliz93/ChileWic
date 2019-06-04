module API
  class AsistenciasController < ApplicationController
    def index
        @asistencia = Asistencium.all

      render json: { asistencias: @asistencias }
    end

    def new
      @asistencium = Asistencium.new
    end

    def show
    render json: { status: 'SUCCESS', message: "asistencia #{@asistencium.id} Loaded", data: @aasistencium }, status: :ok
  end


    def create
      @asistencium = Asistencium.new(asistencium_params)
      respond_to  do |format|
      if @asistencium.save



            format.html { redirect_to  @asistencium, notice: 'Asistencium was successfully created.' }
            format.json { render :show, status: :created, location: @asistencium }




      else
        format.html { render :new }
        format.json { render json: @asistencium.errors, status: :unprocessable_entity }
      end
    end




    end



    private
    def asistencium_params
      params.require(:asistencium).permit(:nombre, :apellido, :correo, :telefono, :institucion)
    end
  end
end
