function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta='si';
	var numero;
	
	

	while(true)
	{	
		contador++;
		respuesta=prompt("terminar?");
		if(respuesta=="si")
		{
			break;
		}

			numero=prompt("Ingrese un numero");
			numero=parseInt(numero);

			while(isNaN(numero))
			{
				numero=prompt("Ingrese un numero");
				numero=parseInt(numero);
			}
			if(numero>0)
			{
				positivo=positivo+numero;
			}
			else if(numero!=0)
			{
				negativo=negativo*numero;
			}
		}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}
