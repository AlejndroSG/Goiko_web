document.addEventListener("DOMContentLoaded", ()=>{
    let desplegable = document.querySelector("section#desplegable");
    let burger = document.querySelector(".desplegable .burger");
    let cross = document.querySelector(".cerrar .cross");
    let enlaces = document.querySelectorAll(".menu .opciones a");
    let slider = document.querySelector("section#slider");
    let sliderdivs = document.querySelectorAll("section#slider div");
    let header = document.querySelector("header");

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
            // header.style.opacity = "0";
        }else{
            sliderdivs.forEach(div => {
                div.style.opacity = "0";
            })
            slider.style.border = "2px solid white";
            // header.style.opacity = "1";
        }

        // if(window.scrollY > slider.offsetTop - window.innerHeight/3){
        //     header.style.opacity = "0.33";
        // }else{
        //     header.style.opacity = "0.66";
        // }

        // if(window.scrollY > slider.offsetTop - window.innerHeight/2){
        //     header.style.opacity = "0.66";
        // }else{
        //     header.style.opacity = "0.33";
        // }

        // if(window.scrollY > slider.offsetTop - window.innerHeight){
        //     header.style.opacity = "1";
        // }else{
        //     header.style.opacity = "0";
        // }
    })
})