let tasksArray = [];

let addTask = (task)=>{
    tasksArray.push(task);
    console.log("Task: "+task+" has been added to our Array");
    return tasksArray.length;
    //adds task and returns the added task
}

let listAllTasks = ()=>{
    for(let i=0;i<tasksArray.length;i++){
        console.log(tasksArray[i]);
    }

    tasksArray.forEach((item)=>{
        console.log(item);
    });

}

let deleteTask = (task)=>{
    let index = tasksArray.indexOf(task);
    if(index > -1){
//delete task function


    tasksArray.splice(index, 1);
    console.log("Task: "+task+"has been removed from the array");
    //return deleted task
}
return tasksArray.length;
}

addTask("Learn JavaScript");
addTask("Learn Everything");

listAllTasks();
deleteTask("Learn JS");