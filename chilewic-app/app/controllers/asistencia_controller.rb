class AsistenciaController < ApplicationController
  before_action :set_asistencium, only: [:show, :edit, :update, :destroy]

  # GET /asistencia
  # GET /asistencia.json
  def index
    @asistencia = Asistencium.all
  end

  # GET /asistencia/1
  # GET /asistencia/1.json
  def show
  end

  # GET /asistencia/new
  def new
    @asistencium = Asistencium.new
  end

  # GET /asistencia/1/edit
  def edit
  end

  # POST /asistencia
  # POST /asistencia.json
  def create
    @asistencium = Asistencium.new(asistencium_params)

    respond_to do |format|
      if @asistencium.save
        format.html { redirect_to @asistencium, notice: 'Asistencium was successfully created.' }
        format.json { render :show, status: :created, location: @asistencium }
      else
        format.html { render :new }
        format.json { render json: @asistencium.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /asistencia/1
  # PATCH/PUT /asistencia/1.json
  def update
    respond_to do |format|
      if @asistencium.update(asistencium_params)
        format.html { redirect_to @asistencium, notice: 'Asistencium was successfully updated.' }
        format.json { render :show, status: :ok, location: @asistencium }
      else
        format.html { render :edit }
        format.json { render json: @asistencium.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /asistencia/1
  # DELETE /asistencia/1.json
  def destroy
    @asistencium.destroy
    respond_to do |format|
      format.html { redirect_to asistencia_url, notice: 'Asistencium was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_asistencium
      @asistencium = Asistencium.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def asistencium_params
      params.require(:asistencium).permit(:nombre, :apellido, :correo, :telefono, :institucion)
    end
end
