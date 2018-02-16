function Mostrar()
{
//tomo la edad  
    var mesDelAño;
    mesDelAño= document.getElementById('mes').value;
    
    switch(mesDelAño)
    {
           
        case "Febrero":
            alert("Este mes tiene menos de 29 días");
            break; 
        default:
            alert("Este mes tiene mas de 30 días o más");
            break;

    }
//alert (mesDelAño);

}//FIN DE LA FUNCIÓN