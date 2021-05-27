const button = document.querySelector(".button")

let contador = 0

const saludar = ((e, selector) => {
    if(e.target.matches(selector) && contador === 0){
        console.log("Delegacion de Eventos")
        contador = 1
        button.classList.add("newclass")
    }
    else{
        contador = 0
        button.classList.remove("newclass")
    }
})

const sumar = ((numero1, numero2, e, selector) => {
    if(e.target.matches(selector)){
        console.log(numero1 + numero2)
    }
    
    
}) 

document.addEventListener("click", (e) => {
    saludar(e,".button")
    sumar(12,3, e, ".button")
})
