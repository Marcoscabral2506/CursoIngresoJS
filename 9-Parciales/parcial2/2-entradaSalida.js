//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importeDelProducto;
	var importeFinal;
	importeDelProducto=prompt("ingrese el importe");
	importeFinal=importeDelProducto*1.21;
	document.getElementById('importe').value=importeFinal;
}

