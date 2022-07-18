const fill = document.querySelector(".fill")
const empties = document.querySelectorAll(".empty")
fill.addEventListener("dragstart",dargStrat)
fill.addEventListener("dragend",dargend)

for(const empty of empties){
    empty.addEventListener("dragover",dragover)
    empty.addEventListener("dragenter",dragEnter)
    empty.addEventListener("dragleave",dragLeave)
    empty.addEventListener("drop",drop)
}



function dargStrat(){
    this.className += " hold"
}

function dargend(){
    this.className = "fill"
}

function dragover(e){
    e.preventDefault()
}

function dragEnter(e){
    this.className +=" hovered"
}

function dragLeave(e){
    this.className = "empty"
}
function drop(){
    this.className="empty"
    this.append(fill)
}