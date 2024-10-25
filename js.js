document.addEventListener("DOMContentLoaded", ()=>{
    let desplegable = document.querySelector("section#desplegable");
    let burger = document.querySelector(".desplegable .burger");
    let cross = document.querySelector(".cerrar .cross");
    let enlaces = document.querySelectorAll(".menu .opciones a");
    let slider = document.querySelector("section#slider");
    let sliderdivs = document.querySelectorAll("section#slider div");
    let rueda = document.querySelector(".rueda");
    let letrasrellenas = document.querySelectorAll("svg .filled");
    let letrassinrellenas = document.querySelectorAll("svg .stroked");
    let svgflecha = document.querySelector("svg .fl");
    // let cartaslide = document.querySelector(".cartaslide");

    burger.addEventListener("click", () =>{
        desplegable.style.height = "100%";
        desplegable.style.backgroundColor = "#EE2737";
        document.body.style.overflow = "hidden";
    })

    cross.addEventListener("click", () =>{
        desplegable.style.height = "0%";
        document.body.style.overflow = "visible";
    })

    enlaces.forEach(enlace => {
        enlace.addEventListener("mouseover", () => {
            enlace.classList.add("sinfill");
            enlace.style.color="rgba(0, 0, 0, 0)";
        })
        enlace.addEventListener("mouseout", () => {
            enlace.classList.remove("sinfill");
            enlace.style.color="white";
        })
    })

    window.addEventListener("scroll", () =>{
        if(window.scrollY > slider.offsetTop - window.innerHeight/4){
            sliderdivs.forEach(div => {
                div.style.opacity = "1";
            })
            slider.style.borderRight = "0";
            slider.style.borderLeft = "0";
        }else{
            sliderdivs.forEach(div => {
                div.style.opacity = "0";
            })
            slider.style.border = "2px solid white";
        }
    })

    rueda.addEventListener("mouseover", () =>{
        rueda.style.backgroundColor = "white";
        letrasrellenas.forEach(letras => {
            letras.style.fill = "#EE2737";
        })
        letrassinrellenas.forEach(letras => {
            letras.style.stroke = "#EE2737";
        })
        svgflecha.style.fill = "#EE2737";
    })

    rueda.addEventListener("mouseout", () =>{
        rueda.style.backgroundColor = "black";
        letrasrellenas.forEach(letras => {
            letras.style.fill = "white";
        })
        letrassinrellenas.forEach(letras => {
            letras.style.stroke = "white";
        })
        svgflecha.style.fill = "white";
    })

    let inicioX;
    let scrollLeft;
    let mover = false; // Agrega esta variable
    
    const cartaslide = document.querySelector(".cartaslide");
    
    cartaslide.addEventListener("mousedown", (e) => {
      e.preventDefault();
      mover = true;
      inicioX = e.clientX - cartaslide.offsetLeft;
      scrollLeft = cartaslide.scrollLeft;
    });
    
    cartaslide.addEventListener("mouseup", (e) => {
        e.preventDefault();
      mover = false;
    });
    
    cartaslide.addEventListener("mouseleave", () => {
      mover = false;
    });
    
    cartaslide.addEventListener("mousemove", (e) => {
      if (!mover) return;
      e.preventDefault();
      const x = e.clientX - cartaslide.offsetLeft;
      const desplazamiento = x - inicioX;
      cartaslide.scrollLeft = scrollLeft - desplazamiento;
    });
})