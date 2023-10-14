const inputEl= document.getElementById('example')
const btnEl= document.querySelector('.todo-list_btn')
const fieldEl = document.querySelector('.todo-list_field')
const btnInput = document.querySelector(".todolistinput")
const todolist = []

let id =3

function render() {
    fieldEl.innerHTML= ''
    for (let item of todoList){
        const el = createHtmlElement(item)
        fieldEl.appendChild(el)
    }
}

function onBtnClick() {
    if (inputEl.value.length) {
    const divEl = document.createElement('div')
    divEl.classList.add('todo-list__example')
    divEl.innerText = inputEl.value
    fieldEl.appendChild(divEl)
    inputEl.value = '' 
}
btnEl.addEventListener('click', onBtnClick)
}



function createHtmlElement(item){

        const divEl = document.createElement('div')
        divEl.classList.add('todo-list_item')
        

        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        if(item.isDone){
            checkbox.checked = true
            divEl.classList.add('todo-list_item-done')
        }

        const text = document.createElement('p')
        text.classList.add('todo-list_item-text')
        text.innerText= item.text

        const img= document.createElement('img')
        img.src = '/tools/trash.svg'
        img.classList.add('del')

        img.addEventListener('click',() => {
            removeItem(item.id)
        })

        divEl.appendChild(checkbox)
        divEl.appendChild(text)
        divEl.appendChild(img)

        checkbox.addEventListener('click', () => {
            item.isDone = !item.isDone
            render()
        })
        
        return divEl
    }

function updateItem(id) {
    const item = todoList.find((i) => i.id === id)
    item.isDone = !item.isDone
    render()
}

function removeItem(id) {
    const idx = todoList.findIndex((i)=>i.id === id)
    todoList.splice(idx, 1)
    render()
}

function addItem() {
    if(inputEl.value) {
        const obj = {
            text: inputEl.value,
            isDone: false,
            id: id++
        }

        todoList.push(obj)
        inputEl.value= ''
        render()
    }
    
}


btnEl.addEventListener('click',addItem)
btnInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' ) addItem()
})

render()