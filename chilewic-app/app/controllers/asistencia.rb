class AsistenciaController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :authenticate_asistencia!
  def index
    @asistencia = Asistencia.all.order :id
  end

  def new
    @asistencia = Asistencia.new
  end

  def create
    @asistencia = Asistencia.new asistencia_params
    if @asistencia.valid?
      @asistencia.save
      redirect_to asistencias_path, notice: "asistencia creado exitosamente"
    else
      render :new
    end
  end

  def edit
    @asistencia = Asistencia.find params[:id]
  end

  def update
    if Asistencia.exists?(params[:id])
      @asistencia = Asistencia.find params[:id]
      if @asistencia.update(asistencia_params)
        redirect_to asistencias_path, notice: "asistencia editado exitosamente"
      else
        flash.now[:alert] = "Ha ocurrido un error"
        render :edit
      end
    else
      redirect_to asistencias_path, alert: "asistencia no existe"
    end
  end

  private
  def asistencia_params
    params.require(:Asistencia).permit(:nombre, :apellido, :rut, :email)
  end
end
