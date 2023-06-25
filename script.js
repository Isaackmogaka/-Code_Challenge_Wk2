let animaldiv = document.getElementById('animaldiv')
//Getting my data
fetch('http://localhost:3000/characters').then((response)=>{
    return response.json()
}).then((jsData)=>{
    console.log(jsData) //array

    for (animalObj of jsData){
        console.log(animalObj.name)
    //create li tag
    let liTag = document.createElement('li')

    //create li data
    let liData = document.createTextNode(animalObj.name)

    //append li data to li tag
    liTag.append(liData)

    //append li tag to ul div
    animaldiv.append(liTag)
    }
    
}).catch((error)=>{
    console.error(error)
})

//Animal informtion




// more information
// function information(){
//     let moreInfo = document.createElement('div')
//     moreInfo.className = 'moreinfo'
//     moreInfo.innerHTML = `Votes: ${event.votes}`
//     container.appendChild('moreInfo')
// }
// liTag.addEventListener('click', () => {
//     information
// })

// //Getting my Data
// fetch('http://localhost:3000/characters').then((response)=>{
//     // console.log (response.json())
//     return response.json()
// }).then((jsData)=>{
//     console.log(jsData)
// })

// //Dom manipulation
// function domData(par){
//     for (let item of par){
//      let container = document.getElementById('container')
//      let list =document.createElement('li')
//      list.innerText = item.name
//      container.appendChild(list)
//     }
// }

