document.addEventListener("DOMContentLoaded", ()=>{
    let desplegable = document.querySelector("section#desplegable");
    let burger = document.querySelector(".desplegable .burger");
    let cross = document.querySelector(".cerrar .cross");
    let enlaces = document.querySelectorAll(".menu .opciones a");
    let enlaces2 = document.querySelectorAll("#principal .opcion a");
    let slider = document.querySelector("section#slider");
    let sliderdivs = document.querySelectorAll("section#slider div");
    let rueda = document.querySelector(".rueda");
    let letrasrellenas = document.querySelectorAll("svg .filled");
    let letrassinrellenas = document.querySelectorAll("svg .stroked");
    let svgflecha = document.querySelector("svg .fl");
    // let cartaslide = document.querySelector(".cartaslide");
    let rrss = document.querySelectorAll(".rrss a");
    let reds = document.querySelectorAll(".reds a");

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

    enlaces2.forEach(enlace => {
        enlace.addEventListener("mouseover", () => {
            enlace.style.color="rgba(0, 0, 0, 0)";
            enlace.style.webkitTextStroke = "2px black";
        })
        enlace.addEventListener("mouseout", () => {
            enlace.style.color="black";
            enlace.style.webkitTextStroke = "0px black";
        })
    })

    window.addEventListener("scroll", () =>{
            if(window.scrollY > slider.offsetTop - window.innerHeight/4){
                if(innerWidth > 768){
                sliderdivs.forEach(div => {
                    div.style.opacity = "1";
                })
                slider.style.borderRight = "0";
                slider.style.borderLeft = "0";
                }
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

    rrss.forEach(rrss => {
        let svgg = rrss.querySelector("svg");
        rrss.addEventListener("mouseover", () => {
            rrss.style.backgroundColor = "#EE2737";
            svgg.style.fill = "white";
        })
        rrss.addEventListener("mouseout", () => {
            rrss.style.backgroundColor = "white";
            svgg.style.fill = "#EE2737";
        })
    })

    reds.forEach(red => {
        let svgg = red.querySelector("svg");
        red.addEventListener("mouseover", () => {
            red.style.backgroundColor = "white";
            svgg.style.fill = "black";
        })
        red.addEventListener("mouseout", () => {
            red.style.backgroundColor = "black";
            svgg.style.fill = "white";
        })
    })
})