function abrirVentana() {
  document.getElementById("miVentanaEmergente").style.display = "block";

    
    var contenido = '<p>Selecciona un precio:</p><input type="range" min="0" max="1000" step="1" value="500" id="rangoPrecio">';
    contenido += '<p id="precioSeleccionado">500€</p><button onclick="seleccionarPrecio()">Seleccionar</button>';
    
    seleccionadorPrecio.display = contenido;
    
     document.getElementById("rangoPrecio");
    document.getElementById("precioSeleccionado");
    
    rangoPrecio.addEventListener("input", function() {
    precioSeleccionado.innerHTML = rangoPrecio.value + "€";


  });
  }
  function cerrarVentana() {
    document.getElementById("miVentanaEmergente").style.display = "none";
  }
  function confirmarPrecio() {
    var rangoPrecio = document.getElementById("rangoPrecio").value;
    alert("El precio seleccionado es: " + rangoPrecio);
    cerrarVentana();
  }

  