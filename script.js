var isstatus = document.querySelector("h2")
var add = document.querySelector("#add")
var remove = document.querySelector("#remove")

add.addEventListener("click",function(){
    isstatus.innerHTML= "Friends" 
    isstatus.style.color = "green"
})
remove.addEventListener("click",function(){
    isstatus.innerHTML = "Stranger"
    isstatus.style.color = "Red"
})