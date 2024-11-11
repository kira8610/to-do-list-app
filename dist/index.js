// Select HTML elements and assign them to variables

const addTaskForm = document.getElementById("addTaskForm");
const taskInput = document.getElementById("taskInput");
const deadlineInput = document.getElementById("deadlineInput");
const priorityInput = document.getElementById("priorityInput");
const taskList = document.getElementById("taskList");

// Array to store tasks
let tasks = [];

addTaskForm.addEventListener("submit", event => {
    event.preventDefault();

    // Get the values of the inputs when users click "+"
    const task = taskInput.value;
    const deadline = deadlineInput.value;
    const priority = priorityInput.value;

    // Create a new task object
    const newTask = {
        task,
        deadline,
        priority
    }

    // Add the task to the task array
    tasks.push(newTask);

    // Render the task list
    renderTasks();

    // Clear the input fields after adding the task
    taskInput.value = '';
    deadlineInput.value = '';
    priorityInput.value = 'low'; // Reset to default priority
})

// Function to render tasks from the array
function renderTasks() {
    taskList.innerHTML = ''; // Clear existing tasks. Use innerHTML = '' to clear out all child elements and text. Use textContent = '' only if I need to clear text but want to keep any nested HTML elements.

    // Loop through the tasks array and create HTML for each task
    tasks.forEach((taskObj, index) => {
        const taskRow = document.createElement("div");
        taskRow.className = "grid grid-cols-10 gap-6 mb-4 text-2xl items-center";
    
        // Create a checkbox
        const taskCheckbox = document.createElement("input");
        taskCheckbox.type = "checkbox";
        taskCheckbox.className = "col-span-1 text-base w-8 h-8";
        taskRow.appendChild(taskCheckbox);
    
        // Create a paragraph for the task name
        const taskName = document.createElement("p");
        taskName.textContent = taskObj.task;
        taskName.className = "col-span-3";
        taskRow.appendChild(taskName);
    
        // Create a paragraph for the deadline
        const taskDeadline = document.createElement("p");
        taskDeadline.textContent = taskObj.deadline;
        taskDeadline.className = "col-span-3";
        taskRow.appendChild(taskDeadline);
    
        // Create a paragraph for the priority
        const taskPriority = document.createElement("p");
        taskPriority.textContent = taskObj.priority;
        taskPriority.className = "col-span-2";
        taskRow.appendChild(taskPriority);
    
        // Create a delete button
        const  taskDelete = document.createElement("button");
        taskDelete.textContent = "X";
        taskDelete.className = "col-span-1 text-purple-400 border-purple-400 rounded-lg border-2 font-bold p-2 w-12 h-12"
        taskRow.appendChild(taskDelete);
        
        // Append the task row to the task list
        taskList.appendChild(taskRow);
    
        // Move the task towards the end of the list when the checkbox is checked
        taskCheckbox.addEventListener("change", event => {
            taskList.appendChild(taskRow);
        })
    
        // Delete task function
        taskDelete.addEventListener("click", event => {
            tasks.splice(index, 1); // Remove the task from the array. If I use. tasks.remove() here, I'll just remove the HTML element from the page but it won't be removed from the array.
            renderTasks(); // Re-render the tasks
        });
    });
}
   




