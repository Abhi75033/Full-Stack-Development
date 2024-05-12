let todos=[];

function addtodo(task){
todos.push(task);
}

function removetodo(task){
    // todos = todos.filter(function(item){return item!==task})
    const index= todos.findIndex(function(item){return task==item})
    todos.splice(index,1)
}

function Display(){
    console.log(todos);
}