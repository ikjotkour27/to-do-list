// Get elements
const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Function to add a task to the list
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        // Create a new task element
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a button to delete the task
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            taskList.removeChild(li);
        };

        // Append delete button to the task
        li.appendChild(deleteButton);

        // Add click event to mark the task as done
        li.onclick = function() {
            li.classList.toggle('done');
        };

        // Append the task to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
    }
}

// Add task when the button is clicked
addButton.addEventListener('click', addTask);

// Add task when the 'Enter' key is pressed
taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
