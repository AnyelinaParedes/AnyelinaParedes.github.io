let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 500){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("redux");
        habilidades[3].classList.add("bootstrap5");
        habilidades[4].classList.add("wordpress");
        habilidades[5].classList.add("react");
        habilidades[6].classList.add("Apirest");
        habilidades[7].classList.add("github");
        habilidades[8].classList.add("git");
        habilidades[9].classList.add("python");
        habilidades[10].classList.add("basededatos");
        habilidades[11].classList.add("visulestudiocode");
        habilidades[12].classList.add("flask");
        habilidades[13].classList.add("mysql");
        habilidades[14].classList.add("php");
       
       
        
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 