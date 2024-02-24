const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    }
});

function addTask(taskText) {
    const li = document.createElement('li');
    li.innerHTML = `
        <input type="checkbox">
        <span>${taskText}</span>
        <button class="delete">Delete</button>
    `;
    taskList.appendChild(li);

    const deleteBtn = li.querySelector('.delete');
    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(li);
    });

    const checkbox = li.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('change', () => {
        li.classList.toggle('completed', checkbox.checked);
    });
}
