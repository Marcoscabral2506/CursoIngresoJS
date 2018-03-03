//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var contador=0;
	var importe=-1;
	var maximo;
	var minimo;
	var acumulador;

	while(contador<7)
	{
		contador++;
		importe=prompt("ingrese importe");
		importe=parseInt(importe);
	
		while(importe<=0)
		{
			importe=prompt("ingrese importe mayor a 0");
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
		else{
				minimo=importe;
			}
		}
	}		
alert("El mayor importe fue "+maximo+" y el minimo fue "+minimo);
}
