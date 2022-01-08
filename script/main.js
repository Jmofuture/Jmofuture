'use strict'


let titleAbout = document.getElementById("demo")

console.log(titleAbout )

titleAbout.addEventListener("mouseover", () =>{
    console.log('Hola Mouse')
    document.getElementById('demo').classList.add('anchorHide');
    document.getElementById('anchorWork').classList.add('anchorShow')

})

