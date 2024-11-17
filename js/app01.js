$("#boton1").click(function () {
    $("#formulario").html('<form>Ingrese nombre:<input ' +
        'type="text" id="nombre"><br>Ingrese clave:<input ' +
        'type="text" id="clave"><br><input type="submit" ' +
        'value="confirmar"></form>');
});
$("#boton2").click(function () {
    alert($("#formulario").html());
});