
let count=0;
function newTask(){
    count += 1
    let task = document.createElement("textarea")
    // let del = document.createElement("button")
    // del.innerHTML = "X"
    task.id = count
    task.className="todos"
    task.rows = 1
    task.cols = 80
    task.placeholder = "New Task"
    container.appendChild(task)
    // task.appendChild(del)

    let line = document.createElement("br")
    container.appendChild(line)
    document.getElementById("store").onclick =function() {store(task.id)}
    // document.getElementById("store").onclick =function() {remove(task.id)}
    // store(task.name)
        
}
function store(id){
    let a = document.getElementById(id).value
    localStorage.setItem(id,a)
    
}
function remove(){

}

document.getElementById("btn").onclick =function() {newTask(store)}

