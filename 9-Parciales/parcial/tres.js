function Mostrar()
{
  var largo;
  var ancho;
  var perimetro;
  var perimetroDos;

  largo=document.getElementById("alrgo").value;

  largo=parseInt(largo);
  
  ancho=document.getElementById("ancho").value;

  ancho=parseInt(ancho);

  perimetro=largo+ancho+largo+ancho;

  perimetroDos=perimetro*3;

  document.getElementById("alrgo").value=largo;
  
  document.getElementById("ancho").value=ancho;
  
  alert("Usted necesita "+perimetroDos+" metros de alambre");

}
