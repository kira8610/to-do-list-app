// Select HTML elements and assign them to variables

const addTaskForm = document.getElementById("addTaskForm");
const taskInput = document.getElementById("taskInput");
const deadlineInput = document.getElementById("deadlineInput");
const priorityInput = document.getElementById("priorityInput");
const taskList = document.getElementById("taskList");


addTaskForm.addEventListener("submit", event => {
    event.preventDefault();

    // Get the values of the inputs when users click "+"
    task = taskInput.value;
    deadline = deadlineInput.value;
    priority = priorityInput.value;

    // Create a container for the new task
    const taskRow = document.createElement("div");
    taskRow.className = "grid grid-cols-10 gap-6 mb-4 text-2xl items-center";

    // Create a checkbox
    const taskCheckbox = document.createElement("input");
    taskCheckbox.type = "checkbox";
    taskCheckbox.className = "col-span-1 text-base w-8 h-8";
    taskRow.appendChild(taskCheckbox);

    // Create a paragraph for the task name
    const taskName = document.createElement("p");
    taskName.textContent = task;
    taskName.className = "col-span-3";
    taskRow.appendChild(taskName);

    // Create a paragraph for the deadline
    const taskDeadline = document.createElement("p");
    taskDeadline.textContent = deadline;
    taskDeadline.className = "col-span-3";
    taskRow.appendChild(taskDeadline);

    // Create a paragraph for the priority
    const taskPriority = document.createElement("p");
    taskPriority.textContent = priority;
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
        taskRow.remove();
    })

    // Clear input fields after adding the task
    taskInput.value = '';
    deadlineInput.value = '';
    priorityInput.value = 'low'; // Reset to default priority
})


