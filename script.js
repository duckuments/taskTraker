let data = [];

function createItem(text, status, index) {
  // <li>
  const li = document.createElement('li')
  li.className = "flex flex-row gap-3 p-3 shadow-sm items-center justify-between"

  // left box container
  const left = document.createElement('div')
  left.className = "flex flex-row gap-2 items-center"

  // checkbox
  const checkbox = document.createElement('input')
  checkbox.type = "checkbox"
  checkbox.checked = status
  checkbox.className = "checkbox"
  checkbox.addEventListener('change', () => changeStatusTask(index))

  // text
  const p = document.createElement('p')
  p.textContent = text
  if (status) {
    p.className = "line-through"
  }

  // add checkbox + text into left container
  left.appendChild(checkbox)
  left.appendChild(p)

  // delete button
  const btn = document.createElement('button')
  btn.type = "button"
  btn.className = "btn btn-small btn-error"
  btn.addEventListener('click', () => deleteTask(index))

  // icon
  const icon = document.createElement('i')
  icon.className = "bx bx-trash"

  btn.appendChild(icon)

  // put left container + button inside <li>
  li.appendChild(left)
  li.appendChild(btn)

  return li
}


function updateTasks() {
  const list = document.querySelector('ul');
  list.innerHTML = "";

  data.forEach((item, index) => {
    list.appendChild(createItem(item.text, item.status, index))
  })

  console.log("update run", data)

}

function addTask() {
  let addField = document.getElementById("addField").value
  data.push({
    text: addField,
    status: false,
  })

  console.log("create run", data)
  updateTasks()
}

function deleteTask(index) {
  console.log('delete run', data, index)
  // data = data.splice(index, 1)
  delete data[index]
  updateTasks()
}

function changeStatusTask(index) {
  console.log("change status", data)
  data[index].status = !data[index].status
  updateTasks()
}
