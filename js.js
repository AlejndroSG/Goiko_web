document.addEventListener("DOMContentLoaded", ()=>{
    let desplegable = document.querySelector("section#desplegable");
    let burger = document.querySelector(".desplegable .burger");
    let cross = document.querySelector(".cerrar .cross");
    let enlaces = document.querySelectorAll(".menu .opciones a");
    let slider = document.querySelector("section#slider");
    let sliderdivs = document.querySelectorAll("section#slider div");

    burger.addEventListener("click", () =>{
        desplegable.style.height = "100%";
        desplegable.style.backgroundColor = "#EE2737";
    })

    cross.addEventListener("click", () =>{
        desplegable.style.height = "0%";
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
            slider.classList.add("tam");
            sliderdivs.forEach(div => {
                div.style.opacity = "1";
            })
        }else{
            slider.classList.remove("tam");
            sliderdivs.forEach(div => {
                div.style.opacity = "0";
            })
        }
        if(window.scrollY > slider.offsetTop - window.innerHeight/3){
            slider.classList.add("tam2");
        }else{
            slider.classList.remove("tam2");
        }
        if(window.scrollY > slider.offsetTop - window.innerHeight/2){
            slider.classList.add("tam3");
        }else{
            slider.classList.remove("tam3");
        }
        if(window.scrollY > slider.offsetTop - window.innerHeight/1.5){
            slider.classList.add("tam4");
        }else{
            slider.classList.remove("tam4");
        }
    })
})