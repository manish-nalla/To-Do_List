const inputTask = document.getElementById('input-task');
const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');

addTask.addEventListener('click',function(){

    let task = document.createElement('div');
    task.classList.add('task');

    let li = document.createElement('li');
    li.innerText = `${inputTask.value}`;
    task.appendChild(li);

    let tickButton = document.createElement('button');
    tickButton.innerHTML = `<i class="fa-solid fa-check"></i>`;
    tickButton.classList.add('check-btn')
    task.appendChild(tickButton);

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
    deleteButton.classList.add('delete-btn')
    task.appendChild(deleteButton);

    if(inputTask.value === ""){
        alert("Please enter a Task");
    } else{
        taskContainer.appendChild(task);
    }

    inputTask.value = "";
    
    tickButton.addEventListener('click',function(){
        tickButton.parentElement.style.textDecoration = "line-through";
    });

    deleteButton.addEventListener('click',function(e){
        let target = e.target;
        target.parentElement.parentElement.remove();
    });

});

