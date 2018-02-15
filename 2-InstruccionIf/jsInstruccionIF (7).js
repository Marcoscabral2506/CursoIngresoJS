function Mostrar()
{
var edad;
var estadoCivil;

estadoCivil=document.getElementById("estadoCivil").value;

edad=document.getElementById("edad").value;

if(edad<18 && estadoCivil!="Soltero")
 { 
     alert("Es muy pequeño para NO ser soltero");
}
	
}

//FIN DE LA FUNCIÓN