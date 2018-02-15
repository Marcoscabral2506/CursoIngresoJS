function Mostrar()
{
var edad;

var estadoCivil;

estadoCivil=document.getElementById("estadoCivil").value;

edad=document.getElementById("edad").value;

if(edad<18 && estadoCivil !="Soltero")
   {
    edad>=18 && estadoCivil=="Soltero"
   }
    else
       {
        alert("Usted es soltero y no es menor");
        }	

}//FIN DE LA FUNCIÓN