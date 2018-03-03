//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var notas;
	var sexo;
	var contador=0;
	var acumuladorNotas=0;
	var promedio;
	var masBaja;
	var contadorSexo=0;

	while(contador<6)
	{
		contador++;
		notas=prompt("Ingrese la nota");
		notas=parseInt(notas);

		while(notas<=0 || notas>10)
		{
			notas=prompt("Ingrese la nota");
			notas=parseInt(notas);
		}
		sexo=prompt("Ingrese f si es femenina, o m si es masculino");
		
		while(sexo!="f" && sexo!="m" && sexo!=null)
			{
				sexo=prompt("Ingrese f si es femenina, o m si es masculino");
			}
	
	if(contador==1)
		{
			masBaja=notas;
		}
		else{
			if(notas<masBaja)
			{
				masBaja=notas;
			}
		}
	if(sexo=="m" && notas>=6)
	{
		contadorSexo = contadorSexo +1;
	}	

	acumuladorNotas= acumuladorNotas+ notas;
}
promedio= acumuladorNotas/ contador;
alert("El promedio es "+ promedio+ " la nota mas baja fue "+masBaja+" "+".La cantidad de varones con nota mayor a 6 fueron "+contadorSexo);

}

