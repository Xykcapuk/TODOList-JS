export default class Render {
  constructor() {
    this.todo = document.querySelector('.todo')
  }
  renderList(todoList) {
    let renderList = ''
    console.log(this)
    const self = this
    todoList.forEach(function(element) {
      renderList += self.itemHTML(element)
      console.log(renderList)
    })
    this.todo.innerHTML = renderList
  }

  renderItem(newTodo) {
    this.todo.insertAdjacentHTML('afterBegin', this.itemHTML(newTodo))
  }

  itemHTML(item) {
    return `
        <div class="item">
           <span>${item.date}</span>
           <span>${item.text}</span>
        </div>
    `
  }
}
