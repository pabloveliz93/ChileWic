require 'test_helper'

class AsistenciaControllerTest < ActionDispatch::IntegrationTest
  setup do
    @asistencium = asistencia(:one)
  end

  test "should get index" do
    get asistencia_url
    assert_response :success
  end

  test "should get new" do
    get new_asistencium_url
    assert_response :success
  end

  test "should create asistencium" do
    assert_difference('Asistencium.count') do
      post asistencia_url, params: { asistencium: { correo: @asistencium.correo, nombre: @asistencium.nombre } }
    end

    assert_redirected_to asistencium_url(Asistencium.last)
  end

  test "should show asistencium" do
    get asistencium_url(@asistencium)
    assert_response :success
  end

  test "should get edit" do
    get edit_asistencium_url(@asistencium)
    assert_response :success
  end

  test "should update asistencium" do
    patch asistencium_url(@asistencium), params: { asistencium: { correo: @asistencium.correo, nombre: @asistencium.nombre } }
    assert_redirected_to asistencium_url(@asistencium)
  end

  test "should destroy asistencium" do
    assert_difference('Asistencium.count', -1) do
      delete asistencium_url(@asistencium)
    end

    assert_redirected_to asistencia_url
  end
end
