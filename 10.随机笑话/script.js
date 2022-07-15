const jokel = document.getElementById("joke")
const jokebtn = document.getElementById("jokebtn")

jokebtn.addEventListener("click",getjoke)

getjoke()

async function getjoke(){
    const config = {
        headers:{
            Accept:"application/json",
        }
    }

    const res = await fetch("https://icanhazdadjoke.com",config)
    const data = await res.json()
    jokel.innerHTML = data.joke
}