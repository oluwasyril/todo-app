let todoArray = []
let listCont = document.getElementById("list-cont")
let input = document.getElementById("input")
function add(){
    listCont.innerHTML = ""
    todoArray.push(input.value)
    for (let i = 0; i < todoArray.length; i++){
      const inpValue = todoArray[i]
      listCont.innerHTML += `
    <div class="list"> <p id="for">${inpValue}</p> <p> <button onclick="edit()" class="edit">EDIT</button> <button class="del" id="del" onclick="del()">X</button> </p></div>`
    }
    listCont.classList.add("pad")
}
function del(){
    let del = document.getElementsByClassName("del")
    for (prop of del){
        prop.addEventListener("click", rem)
    }
}
function rem(e){
    let list = e.target.parentNode
    list.style.display = "none"
}

function remove(){
    input.value =""
}

function back(){
    input.value = input.value.substr(0,input.value.length -1 )
}

function edit(i){
  
  let newItem = prompt("Insert new item to the todo")
    todoArray.splice(i, 1, newItem)
    listCont.innerHTML = ""
    for (let i = 0; i < todoArray.length; i++){
      const inpValue = todoArray[i]
      listCont.innerHTML += `
    <div class="list"> <p id="for">${inpValue}</p> <p> <button onclick="edit()" class="edit">EDIT</button> <button class="del" id="del" onclick="del()">X</button> </p></div>`
    }
}