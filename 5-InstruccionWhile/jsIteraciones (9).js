function Mostrar()
{

	var contador=0;
	var numero;
	var maximo;
	var minimo;
	// declarar variables
	
	var respuesta='si';

	while(respuesta!='no')
	{
		contador= contador+1;
		numero= prompt("Ingrese numero");
		numero=parseInt(numero);

		if( contador== 1)
		{
			maximo=numero;
			minimo= numero;
		}
		else{
			if(numero>maximo)
			{
				maximo=numero;
			}
		if (numero<minimo)
			{	
				minimo=numero;
			}
		}
	respuesta=prompt("Si desea continuar ponga si, de lo contrario ponga no");
	}

	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;


}//FIN DE LA FUNCIÓN