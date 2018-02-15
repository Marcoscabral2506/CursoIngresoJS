function Mostrar()
{
	var nota;
	nota=parseInt((Math.random()*(11-1))+1)
	alert(nota);
	if(nota>=9)
   {
	   alert("excelente");
   }
	else if (nota<=8 && nota>=6)
	{ 
	 alert("muy bien");
    }
	else if (nota<=5 && nota>=4)
	{
		alert("bien");
	}
	else if (nota<=3 && nota>=2)
	{
		alert("mal");
	}
	else if (nota<=1 && nota>=0)
	{
		alert("desastre");
	}
}//FIN DE LA FUNCIÓN
/* else if (nota>=6) esta bien porque si es mayor que 8 entra en el primero
else if (nota>=4)
else if (nota>=2)
else 

o se puede hacer
else
{ 
	if(nota>=6)
	{

 	} 
	else
	{

	}
		if(nota>=4)
		{

		}
		else
		{
			if(nota>=4)
		
		}
} 