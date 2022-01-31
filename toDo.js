const STATUSES = {
  TO_DO: "To Do",
  IN_PROGRESS: "In Progress",
  DONE: "Done",
};

const DEFAULT_STATUS = STATUSES.TO_DO;

const list = {
  "create a new practice task": STATUSES.IN_PROGRESS,
  "make a bed": STATUSES.DONE,
  "write a post": STATUSES.TO_DO,
};

function changeStatus(task, status) {
  if ([task] in list) {
    list[task] = status;
  }
}

function addTask(task) {
  list[task] = DEFAULT_STATUS;
}

function deleteTask(task) {
  delete list[task];
}

function showList() {
  let tasks = {
    [STATUSES.TO_DO]: "",
    [STATUSES.IN_PROGRESS]: "",
    [STATUSES.DONE]: "",
  };

  for (let key in list) {
    tasks[list[key]] += `\n \"${[key]}"`;
  }
  console.log(
    `Todo: ${tasks[STATUSES.TO_DO] || "\n -"} 
    \rIn Progress: ${tasks[STATUSES.IN_PROGRESS] || "\n -"} 
  \rDone: ${tasks[STATUSES.DONE] || "\n -"}`
  );
}

changeStatus("create a new practice task", STATUSES.DONE);
addTask("have a walk");
addTask("make toDo list");
addTask("finish the work week");
addTask("pass the algorithms exam");
changeStatus("make toDo list", STATUSES.DONE);
changeStatus("pass the algorithms exam", STATUSES.DONE);
changeStatus("finish the work week", STATUSES.DONE);
deleteTask("make a bed");
deleteTask("create a new practice task");
deleteTask("write a post");

showList();
