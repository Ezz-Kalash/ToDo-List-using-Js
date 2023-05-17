
const { clear } = require('console');
const readline = require('readline');
const { start } = require('repl');

function ReadInput(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question(question, (input) => {
      rl.close();
      resolve(input);
    });
  });
}






function Task(description, dueDate, priority) {
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;

  this.completed = false;
}


let arr = [];

async function addTask() {

  const description = await ReadInput('Enter task description:');
  const dueDate = await ReadInput('Enter task due date :');

  const priority = await ReadInput('Enter task priority (high, medium, low):');

  arr.push(new Task(description, dueDate, priority));
  console.log("the task has been added ");
  main()
}

function listTasks() {
  console.log("All the tasks :");
  arr.forEach((x, index) => {
console.log(index+1 +' task discription :'+ x.description +'  task datedue :'+ x.dueDate +'  task discription :'+ x.priority +'  task completed ? :' + x.completed)
}
);
main()

}

function listDone() {
  console.log("The completed tasks:");
  arr.filter(x => x.completed).forEach((x, index) => {
    console.log('task num = '+index+1 +' task discription :'+ x.description +'  task datedue :'+ x.dueDate +'  task discription :'+ x.priority +'  task completed ? :' + x.completed)
  });
  main()

}


async function makeDone() {

  const x = await ReadInput('Enter the number the task to mark is done : ')-1;

  if (x < arr.length) {
    arr[x].completed = true;
    console.log("Done!");
  } else {
    console.log("No task with that num ");
  }
  main()

}

async function deleteTask() {
  const x = await ReadInput('Enter the num of the task to delete ')-1;
  
  if (x < arr.length) {
    arr.splice(x,1);
    console.log("deleted!");
  } else {
    console.log("No task with that num");
  }
  main()

}




function sortDate() {
  arr.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
  console.log("The task is sorted by due date");
  main()
}

function sortPriority() {
  const priorityy = ['high', 'medium', 'low'];
  arr.sort((a, b) => priorityy.indexOf(a.priority) - priorityy.indexOf(b.priority));
  console.log("Tasks sorted by priority!");
  main()

}

function deleteAll() {
  while(arr.length)
  arr.pop()
  console.log("All tasks has been deleted");
  main()
1
}

async function main() {
  console.log("Welcome to JS TODO-APP");
    console.log("press 1 to add new task");
    console.log("press 2 to lest all tasks");
    console.log("press 3 to lest all completedtasks");
    console.log("press 4 to mark it as done");
    console.log("press 5 to delete a task");
    console.log("press 6 to sort the task by date");
    console.log("press 7 to sort the task by proirity");
    console.log("press 8 to delete all tasks");


    const x = await ReadInput('Please enter your name choice: ');

  if (x==1)
  addTask()
  else if (x==2)
  listTasks()
    else if (x==3)
    listDone()
  else if (x==4)
  makeDone()
  else if (x==5)
  deleteTask()
  else if (x==6)
  sortDate()
    else if (x==7)
    sortPriority()
    else if (x==8)
    deleteAll()

  }
 main()
