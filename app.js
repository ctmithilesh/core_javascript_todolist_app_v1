var user_id = '64e2f432c9f831ea3b572f2c'

var deleteBtn = document.getElementById("btn")
deleteBtn.addEventListener("click", () => {

    console.log('asfasf')

})
async function getTodos() {
    const response = await fetch('https://sea-lion-app-77lg6.ondigitalocean.app/api/todo/find/all')
    const result = await response.json()
    console.log(result)
    result.forEach((item) => {
        const tableBody = document.getElementById("table_body")

        tableBody.innerHTML +=
            `
             <tr>
                <td scope="row">${item.todo_title} </td>
                 <td scope="row"> <a onclick="deleteTodo()" class="delete" name=${item.id} id="deletehref"> View </a> </td>
             </tr>
            `

        // listItem.textContent = item.todo_title
        // ulEl.appendChild(listItem)
        // todoEl.appendChild(ulEl)
    })

}
async function deleteTodo() {
    const deleteEl = document.getElementById("deletehref")
    console.log(deleteEl)
    console.log(deleteEl.name)
    const data = {
        todo_id: deleteEl.name
    }
    const response = await fetch('https://sea-lion-app-77lg6.ondigitalocean.app/api/todo/delete', {
        method: "post",
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    const result = await response.json()
    console.log(result)
    window.location.reload()
    //let value = deleteEl.value
    //console.log(value)


}
document.addEventListener("DOMContentLoaded", () => {

    getTodos()

})

const addTodo = async (todo_title, todo_description, user_id) => {

    const data = {
        todo_title,
        todo_description,
        user_id
    }
    const response = await fetch('https://sea-lion-app-77lg6.ondigitalocean.app/api/todo/add', {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)

    })
    const result = await response.json()
    console.log(result)
    window.location.reload()

}

const button = document.getElementById("btn")

button.addEventListener("click", () => {

    const todo_title = document.getElementById("todo_title").value
    const todo_description = document.getElementById("todo_description").value
    addTodo(todo_title, todo_description, user_id)

})

