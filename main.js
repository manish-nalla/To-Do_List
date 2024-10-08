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

    let editButton = document.createElement('button');
    editButton.innerHTML = `<i class="far fa-edit"></i>`;
    editButton.classList.add('edit-btn');
    task.appendChild(editButton);
    
    tickButton.addEventListener('click',function(){
        tickButton.parentElement.style.textDecoration = "line-through";
    });

    deleteButton.addEventListener('click',function(){
        task.remove();
    });

    editButton.addEventListener('click',function(){
        let editInput = document.createElement('input');
        editInput.type = 'text';
        editInput.classList.add('edit-input');
        editInput.value = li.innerText;

        let saveBtn = document.createElement('button');
        saveBtn.classList.add('save-btn');
        saveBtn.innerHTML = `<i class="fas fa-save"></i>`;

        task.replaceChild(saveBtn, editButton);
        task.replaceChild(editInput, li);

        saveBtn.addEventListener('click',function(){

            li.innerText = editInput.value;

            task.replaceChild(li,editInput);
            task.replaceChild(editButton, saveBtn);
        })
    })

    
    if(inputTask.value === ""){
        alert("Please enter a Task");
    } else{
        taskContainer.appendChild(task);
    }

    inputTask.value = ""

});

