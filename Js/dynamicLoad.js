
// Cargar el archivo JSON
fetch('../../vehiculos.json')
	.then(response => response.json())
	.then(data => {

		
	// Iterar sobre el array de vehículos
	data.vehiculos.forEach((vehiculo, index) => {
	// Obtener el contenedor HTML correspondiente para la foto del vehículo
	
	const contenedorFoto = document.querySelectorAll('.FotoProducto')[index];
	// Crear la imagen y establecer la fuente desde el archivo JSON
	const imagenFoto = new Image();
	imagenFoto.src = vehiculo.foto;
	// Agregar la imagen al contenedor de la foto
	contenedorFoto.appendChild(imagenFoto);
	// Iterar sobre el array de vistas del vehículo
		vehiculo.vista.forEach((vista, i) => {
			// Obtener el contenedor HTML correspondiente para la vista del vehículo
			const contenedorVista = document.querySelectorAll('.cuadradoProductos')[(index + 1) * (i + 1) - 1];
			// Crear la imagen y establecer la fuente desde el archivo JSON
			const imagenVista = new Image();
			imagenVista.src = vista.foto;
			// Agregar la imagen al contenedor de vistas
			contenedorVista.appendChild(imagenVista);
		});
	});
 });
