//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numero;
	var respuesta="no";
	var contador=0;
	var contadorPares=0;
	var acumulador;
	var acumuladorNumeros=0;
	var maximo;
	var minimo;
	var promedio;

	while(respuesta!="si")
	{
		contador++;
		numero=prompt("ingrese numero");
		numero=parseInt(numero);
		respuesta=prompt("terminar?");
		while(numero<=0)
		{
			numero=prompt("ingrese numero");
			numero=parseInt(numero);

		}
		if(numero%2==0)
		{
			contadorPares++;
		}
		if(contador==1)
		{
			maximo=numero;
			minimo=numero;
		}
		else{
			if(numero>maximo)
			{
				maximo=numero;
			}
			else{
				if(numero<minimo)
				{
					minimo=numero;
				}
			}
		}
		acumuladorNumeros=acumuladorNumeros+numero;
		promedio=acumuladorNumeros/contador;
	}
document.write("la cantidad de numeros pares es de "+contadorPares+" el promedio es "+promedio+" la suma de los numeros es "+acumuladorNumeros+" el numero maximo es "+maximo+" y el minimo es "+minimo);	
}

