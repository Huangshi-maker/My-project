const boxs = document.querySelectorAll(".box")
window.addEventListener("scroll",checkboxs)


checkboxs()
function checkboxs(){
    const triggerBottom = window.innerHeight/5*4;
    boxs.forEach(box=>{
        const boxtop = box.getBoundingClientRect().top
        if(boxtop<triggerBottom){
            box.classList.add("show")
        }
        else{
            box.classList.remove("show")
        }
    })
}