const closeEl = document.getElementById("close")
const openEl = document.getElementById("open")
const navEl = document.getElementById("nav")

closeEl.addEventListener("click", function(){
    navEl.style.right = "-200px"
})

openEl.addEventListener("click", function(){
    navEl.style.right = "0"
})