let data = [];


function updateTasks() {
  let list = document.getElementById("list");
  list.innerHTML = ""

  let li = document.createElement("li")

  li.className = "flex flex-row gap-3 p-3 shadow-sm items-center justify-between"

  // TODO : fix the bug : for appendChild function

  data.forEach(item => {
    console.log(item)
    li.innerHTML = item.text
    list.appendChild(li)
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
