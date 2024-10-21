document.addEventListener("DOMContentLoaded", ()=>{
    let desplegable = document.querySelector("section#desplegable");
    let burger = document.querySelector(".desplegable .burger");
    let cross = document.querySelector(".cerrar .cross");
    let enlaces = document.querySelectorAll(".menu .opciones a");
    let enlaces2 = document.querySelectorAll(".menu .extras");
    let hovHR = document.querySelectorAll(".menu .opciones a hr");

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

    enlaces2.forEach
    

})