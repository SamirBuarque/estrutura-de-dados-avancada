let root = document.querySelector("#root")
let list = []

fetch("tibia.json").then((response) => {
    response.json().then((data) => {
        let lenJson = data.worlds.regular_worlds.length
        for (let i=0; i<lenJson; i++) {
            list.push(data.worlds.regular_worlds[i])
            
        }
        //console.log(list[0].players_online)
        insertionSort(list)

        for (let i=0; i<list.length; i++) {
            root.innerHTML += `<li>Nome: ${list[i].name} | Players Online: ${list[i].players_online}</li>`
        }

    })
})

function insertionSort(array) {
    let lenArray = array.length
    let aux = 0, aux2 = 0
    let j = 0

    for (let i=1; i < lenArray; i++) {
        j = i
        //console.log(array[j-1].players_online)
        while (j > 0 && array[j].players_online < array[j-1].players_online) {
            aux = array[j]
            aux2 = array[j-1]
            array[j-1] = aux
            array[j] = aux2
            j-- 
        }
    }
    console.log(array)
}









