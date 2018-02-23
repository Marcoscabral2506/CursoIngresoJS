function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;
	
	while(true)
	{
		contador++;
		respuesta=prompt("¿Quiere terminar?");
		if(respuesta=="si")
		{
			break;
		}
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);
		
		while(isNaN(numero))
		{
			numero=prompt("");
			numero=parseInt(numero);
		}
		acumulador=acumulador+numero;
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN