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


  //Ventana de color
  function abrirVentanaColor() {
    document.getElementById("miVentanaEmergenteColor").style.display = "block";
}

function cerrarVentanaColor() {
    document.getElementById("miVentanaEmergenteColor").style.display = "none";
}

function seleccionarColor() {
    var seleccionadorColor = document.getElementById("seleccionadorColor");
    var colorSeleccionado = seleccionadorColor.options[seleccionadorColor.selectedIndex].value;
    alert("El color seleccionado es: " + colorSeleccionado);
    cerrarVentanaColor();
}

//Ventana de plazas
function abrirVentanaPlazas() {
    document.getElementById("miVentanaEmergentePlazas").style.display = "block";
}

function cerrarVentanaPlazas() {
    document.getElementById("miVentanaEmergentePlazas").style.display = "none";
}

function seleccionarPlazas() {
    var seleccionadorPlazas = document.getElementById("seleccionadorPlazas");
    var plazasSeleccionadas = seleccionadorPlazas.options[seleccionadorPlazas.selectedIndex].value;
    alert("El número de plazas seleccionado es: " + plazasSeleccionadas);
    cerrarVentanaPlazas();
}

function mostrarMapa() {
  var popup = window.open("", "mapa", "width=600,height=450");
  popup.document.write('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56303.26422620416!2d-15.474722322594067!3d28.117431982132615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc40950e91c097d1%3A0xab36b5ac5338ba65!2sLas%20Palmas%20de%20Gran%20Canaria%2C%20Las%20Palmas!5e0!3m2!1ses!2ses!4v1679227388544!5m2!1ses!2ses" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');
}
