const search = document.querySelector(".search")
const btn = document.querySelector(".btn")
const input = document.querySelector(".input")

console.log(search)
console.log(btn)
console.log(input)
btn.addEventListener("click",()=>{
    search.classList.toggle("active")
    input.focus()
})