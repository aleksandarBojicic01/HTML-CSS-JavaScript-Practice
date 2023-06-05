const todo = [ {
  name: 'Wash dishes',
  date: '2023-06-04'
}, {
  name: 'Cook diner',
  date: '2023-06-04'}];
updateTodo();

function addTodo() {
 let itemName = document.querySelector('.js-text-box').value;
 let itemDate = document.querySelector('.date-picker').value;
 todo.push({
  name: itemName,
  date: itemDate
 });
 document.querySelector(".js-text-box").value = '';
}

function accumulateHTML() {
  let html = '';
  for (let i = 0; i < todo.length; i++) {
    html += 
    `
    <div class="div-todo-name">${todo[i].name}</div> 
    <div class="div-todo-date">${todo[i].date}</div> 
    <button class="js-delete-btn delete-btn" onclick="deleteTodo(${i});">
    Delete
    </button>
    `
  }
  return html;
}

function updateTodo() {
  document.querySelector('.js-div-todo').innerHTML = accumulateHTML();
}

function deleteTodo(index) {
  todo.splice(index, 1);
  updateTodo();
}