<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>XML HTTP Request</h1>
    <div class="root">

    </div>
    </body>
<script>

// const request = new XMLHttpRequest()

//     // console.log(request)

// request.onreadystatechange = function(){
//     if(this.readyState === 4){
//         console.log(this.readyState === 4)
//         const response = JSON.parse(this.responseText)
//         const image = document.createElement("img")
//         image.src = response.sprites.front_default
//         const div = document.querySelector(".root")
//         div.append(image)

//     // console.log(response)
//     // const response = this.response 
//     // console.log(this.status)
//     // console.log(this.response)
//     // console.log(this.responseURL)
//     }
    
// }
// // open takes in two arguments, HTTP Method is the URL or the location of what you want to get
//     // request.open("GET", "./sample.txt")

//     request.open("GET","https://pokeapi.co/api/v2/pokemon/6")
//     request.send()

// !<--------->! 
// const getPokemonData = ()=> {
//     let returnData = {}
//     const data = fetch("https://pokeapi.co/api/v2/pokemon/6")
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//         let name = document.createElement("h1")
//         name.innerHTML = data.name
//         let img = document.createElement("img")
//         let root = document.querySelector(".root")
//         img.src = data.sprites.front_default
//         root.append(img, name)
//     })
// }
//     getPokemonData()
// !<--------->! 


// !-------NEWEST METHOD---------!
const getPokemonData = async ()=> {
    const data = await fetch("https://pokeapi.co/api/v2/pokemon/6")
    const formattedJson = await data.json()

    let name = document.createElement("h1")
    name.innerHTML = formattedJson.name
    let img = document.createElement("img")
    let root = document.querySelector(".root")
    img.src = formattedJson.sprites.front_default
    root.append(img, name)
    
}
    getPokemonData()    

</script>
</html>