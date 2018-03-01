//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe=-1, maximo, minimo, diaMax, diaMin;
	var contador=0;
	var acumulador;
	

	while(contador<7)
	{
		while(importe<0){
		importe=prompt("ingrese importe");
		importe=parseInt(importe);
		}
		if(contador==1)
		{
			maximo=importe;
			minimo=importe;
		}
		else{
			if(importe>maximo)
			{
				maximo=importe;
			}
		if(importe<minimo){
				minimo=importe;
			}
		}

	}		
alert("El mayor importe fue "+maximo+ " y su menor importe fue "+minimo);
}

