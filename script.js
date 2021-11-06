const list = {
  "create a task": "In Progress",
  "make a bed": "Done",
  "write a post": "To Do",
  "write ": "To Do",
};

function changeStatus(k, done) {
  for (let key in list) {
    if (key == k) {
      list[key] = done;
    }
  }
}
changeStatus("write a post", "Done");

function addTask(task) {
  list[task] = "To Do";
}

addTask("have a walk");

function deleteTask(tas) {
  for (let key in list) {
    if (key == tas) {
      delete list[key];
    }
  }
}
deleteTask("have a walk");

function showList() {
  let result = {};
  let result1 = {};
  let result2 = {};
  for (let key in list) {
    if (list[key] == "To Do") {
      result[key] = list[key];
    }
    if (list[key] == "In Progress") {
      result1[key] = list[key];
    }
    if (list[key] == "Done") {
      result2[key] = list[key];
    }
  }
  console.log("To Do:");
  for (let key in result) {
    console.log(` '${key}'`);
  }
  console.log("In Progress:");
  for (let key in result1) {
    console.log(` '${key}'`);
  }
  console.log("Done:");
  for (let key in result2) {
    console.log(` '${key}'`);
  }
}
showList();
