//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var largo;
	var ancho;
	var perimetro;
	var resultado;

	ancho=document.getElementById("ancho").value;
	largo=document.getElementById("largo").value;

	ancho=parseInt(ancho);
	largo=parseInt(largo);

	perimetro=ancho*2+largo*2;

	resultado=perimetro*6;
	
	alert("Ustede necesita "+resultado + " metros de alambre");
}

