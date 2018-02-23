function Mostrar()
{
    //tomo la edad  
    var mesDelAño; 
    mesDelAño= document.getElementById('mes').value;

    switch(mesDelAño)
    {
        case "Enero":
            alert("que comiences bien el año!!!." );            
            break;       
        case "Marzo":
            alert("a clases!!!." );            
            break;
        case "Julio":
            alert("se vienen las vacaciones!!!." );    
            break;     
        case "Diciembre":
            alert( "Felices fiesta!!!.");
            break;
    }
   
    
}

//FIN DE LA FUNCIÓN

/* switch se transforma a if, pero if no siempre
siempre evaluando la misma variable con == 

*/