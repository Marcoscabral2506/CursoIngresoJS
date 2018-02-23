	function Mostrar()
	{

		var contador=0;
		//declarar contadores y variables 
		var numero;
		var respuesta="si";
		var negativos=0;
		var positivos=0;
		var acumuladorNegativos;
		var contadorNegativos;
		var acumuladorPositivos;
		var contadorPositivos;
		var contadorCeros;
		var contadorPares;
		var promedioPositivos;
		var promedioNegativos;
		var diferencia;

		while(respuesta!="no")
		{	
			contador++;
			numero = prompt("ingrese un numero");
			numero = parseInt(numero);

			if(numero%2==0 && numero!=0)
			{
				contadorPares++;
			}

			if(numero<0)
			{
				acumuladorNegativos=acumuladorNegativos+numero;
				contadorNegativos++;

			}else 
			{ 
				if(numero>0)
				{
					acumuladorPositivos=acumuladorPositivos+numero;

					contadorPositivos++;
				}
			else{
				contadorCeros++;
			}

			}
respuesta=prompt("no para  salir?");
			

promedioNegativos=acumuladorNegativos/contadorNegativos;
promedioPositivos=acumuladorPositivos/contadorPositivos;
diferencia=acumuladorPositivos-acumuladorNegativos;
}
document.write("La suma de los negativos es"+acumuladorPositivos);
			}	
		//FIN DE LA FUNCIÓN