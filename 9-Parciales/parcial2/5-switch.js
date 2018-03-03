//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	
	var mesDelAño;
	mesDelAño=prompt("Ingrese un mes del año");

	switch(mesDelAño)
	{
		case "enero":
		case "febrero":
			alert("Veranito!!!");
			break;
		default:
			alert("Extraño enero y febrero!!!");	
	}
	
}

