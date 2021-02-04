var add=document.querySelector('#add-button');
add.addEventListener('click',addToDoItem);

var save=document.querySelector('#save-button');
save.addEventListener('click', saveList);

var clear=document.querySelector('#clear-button');
clear.addEventListener('click',clearedlist);

var empty=document.querySelector('#empty-button');
empty.addEventListener('click',emptyList);


var entrybox=document.querySelector('#todo-entry-box');
var list=document.querySelector('#todo-list');

function addToDoItem()
{
  var itemText=entrybox.value;
  newToDoItem(itemText,false);
}

function newToDoItem(itemText, completed)
{
  var toDoItem = document.createElement("li");
    var toDoText = document.createTextNode(itemText);
    toDoItem.appendChild(toDoText);

    if (completed) {
        toDoItem.classList.add("completed");
    }

    list.appendChild(toDoItem);
    toDoItem.addEventListener("dblclick", toggleToDoItemState);
}

function toggleToDoItemState()
{
  if(this.classList.contains('completed'))
  {
    this.classList.remove('completed');
  }
  else{
    this.classList.add('completed');
  }
}

function clearedlist()
{
  var completedItems = list.getElementsByClassName("completed");

    while (completedItems.length > 0) {
        completedItems.item(0).remove();
    }
}

function emptyList() {
  var toDoItems = list.children;
  while (toDoItems.length > 0) {
      toDoItems.item(0).remove();
  }
}


function saveList() {
  var toDos = [];

  for (var i = 0; i < list.children.length; i++) {
      var toDo = list.children.item(i);

      var toDoInfo = {
          "task": toDo.innerText,
          "completed": toDo.classList.contains("completed")
      };

      toDos.push(toDoInfo);

  }

  localStorage.setItem("toDos", JSON.stringify(toDos));
}

function loadList() {
  if (localStorage.getItem("toDos") != null) {
      var toDos = JSON.parse(localStorage.getItem("toDos"));

      for (var i = 0; i < toDos.length; i++) {
          var toDo = toDos[i];
          newToDoItem(toDo.task, toDo.completed);
      }
  }
}

loadList();