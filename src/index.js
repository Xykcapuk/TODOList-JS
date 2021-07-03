// eslint-disable-next-line no-unused-vars
// let container = document.getElementById("container")
import localforage from 'localforage'

const addText = document.querySelector('.addText')
const addDate = document.querySelector('.addDate')
const buttonAdd = document.querySelector('.add')
import Render from './Render.js'

let todoList = []
let render = null
render = new Render()
const keyDb = 'todoList'

localforage.getItem(keyDb).then(function(value) {
  // This code runs once the value has been loaded
  // from the offline store.
  if (value && Array.isArray(value)) {
    todoList = value
    render.renderList(todoList)
  } else console.log('Данные отсутствуют')
}).catch(function(err) {
  // This code runs if there were any errors
  console.log(err)
})

function add() {
  const newTodo = {
    text: addText.value,
    date: addDate.value
  }
  todoList.push(newTodo)
  localforage.setItem(keyDb, todoList)
  render.renderItem(newTodo)
  addText.select()
}

buttonAdd.onclick = () => add()

addText.onkeyup = (event) => {
  console.log(event)
  if (event.key === 'Enter') {
    add()
  }
}

// container.innerHTML += `
//     <div>${inputText.value}</div>
//     <div>${inputDate.value}</div>
// `
// inputText.value = ''
// inputDate.value = ''
// inputText.focus()
