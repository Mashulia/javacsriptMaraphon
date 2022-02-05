const STATUSES = {
  TO_DO: "To Do",
  IN_PROGRESS: "In Progress",
  DONE: "Done",
};
const PRIORITY = {
  HIGH: "high",
  LOW: "low",
};

const DEFAULT_STATUS = STATUSES.TO_DO;
const DEFAULT_PRIORITY = PRIORITY.HIGH;

const list = [
  {
    name: "make toDo list",
    status: STATUSES.TO_DO,
    priority: PRIORITY.HIGH,
  },
  { name: "make a bed", status: STATUSES.DONE, priority: PRIORITY.LOW },
  {
    name: "finish the working week",
    status: STATUSES.IN_PROGRESS,
    priority: PRIORITY.LOW,
  },
  {
    name: "to go to the hospital",
    status: STATUSES.TO_DO,
    priority: PRIORITY.HIGH,
  },
];

function changeStatus(task, status) {
  list.forEach(element => {
    if (element.name === task) {
      element.status = status;
    }
  });
}
function changePriority(task, priority) {
  list.forEach(element => {
    if (element.name === task) {
      element.priority = priority;
    }
  });
}

function addTask(task) {
  for (element of list) {
    if (element.name === task) {
      return;
    }
  }
  list.push({
    name: task,
    status: DEFAULT_STATUS,
    priority: DEFAULT_PRIORITY,
  });
}

function deleteTask(task) {
  let indexOfTask = list.findIndex(element => element.name === task);
  list.splice(indexOfTask, 1);
}

function showBy(identifier) {
  const identifiersList = {};

  if (identifier === "priority") {
    for (let key in PRIORITY) {
      identifiersList[PRIORITY[key]] = [];
    }
  } else if (identifier === "status") {
    for (let key in STATUSES) {
      identifiersList[STATUSES[key]] = [];
    }
  }
  list.forEach(element => {
    identifiersList[element[identifier]].push(element.name);
  });
  for (let key in identifiersList) {
    console.log(`${key}:`);
    if (identifiersList[key].length) {
      identifiersList[key].map((item) => {
        console.log(` \"${item}\"`);
      });
    } else {
      console.log(" -");
    }
  }
}

changeStatus("make toDo list", STATUSES.IN_PROGRESS);
addTask("have a walk");
addTask("have a walk");
changePriority("finish the working week", PRIORITY.HIGH);
deleteTask("make a bed");
showBy("priority");
showBy("status");
