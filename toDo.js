const list = {
  "create a new practice task": "In Progress",
  "make a bed": "Done",
  "write a post": "To Do",
};
let toDoTasks = "";
let inProgressTasks = "";
let doneTasks = "";

function changeStatus(task, status) {
  if ([task] in list) {
    list[task] = status;
  }
}

function addTask(task) {
  list[task] = "To Do";
}

function deleteTask(task) {
  delete list[task];
}

function showList(obj) {
  for (let task in obj) {
    if (obj[task] == "To Do") {
      toDoTasks += `\n \"${[task]}"`;
    } else if (obj[task] == "In Progress") {
      inProgressTasks += `\n \"${[task]}"`;
    } else {
      doneTasks += `\n \"${[task]}"`;
    }
  }
  if (toDoTasks.length === 0) {
    toDoTasks += "\n -";
  }
  if (inProgressTasks.length === 0) {
    inProgressTasks += "\n -";
  }
  if (doneTasks.length === 0) {
    doneTasks += "\n -";
  }
  console.log(`Todo: ${toDoTasks} \nIn Progress: ${inProgressTasks} \nDone: ${doneTasks}`);
}

changeStatus("create a new practice task", "Done");
addTask("have a walk");
addTask("make toDo list");
addTask("finish the work week");
addTask("pass the algorithms exam");
changeStatus("make toDo list", "Done");
changeStatus("pass the algorithms exam", "In Progress");
changeStatus("finish the work week", "In Progress");
deleteTask("have a walk");
deleteTask("make a bed");
deleteTask("create a new practice task");
deleteTask("write a post");

showList(list);
