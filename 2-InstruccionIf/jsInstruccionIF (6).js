function Mostrar()
{
var edad;
edad=document.getElementById("edad").value;

if(edad>17)
{
    alert("adulto");
}
else
  {
    if(edad<13)
    {
        alert("niño");
    }
    else
       {
        alert("adolescente");
       }
  }
}
//FIN DE LA FUNCIÓN

//el ultimo else toma los valores que no son ni mayor a 13 ni menor a 18, se ahorra el poner (edad>18||edad<13)//