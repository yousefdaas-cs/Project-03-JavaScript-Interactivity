let totalTasks = 0;

const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");
const taskCountDisplay = document.getElementById("task-count");

//Update Counter Function
function updateCounter() {
    taskCountDisplay.textContent = totalTasks;
}

//Core Logic
function addTask() {
    const taskText = taskInput.value.trim();

    // Ignore input if empty strings are entered
    if (taskText === "") {
        return;
    }

    // A. Create elements dynamically
    const li = document.createElement("li");
    const textSpan = document.createElement("span");
    const deleteBtn = document.createElement("button");

    // B. Structure text nodes safely without innerHTML
    textSpan.textContent = taskText;
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    // C. Assembly elements
    li.appendChild(textSpan);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // D. Increment task state counter
    totalTasks = totalTasks + 1;
    updateCounter();

    // E. Clear out input bar
    taskInput.value = "";

        // Toggle completion status on click
    textSpan.addEventListener("click", function() {
        if (textSpan.classList.contains("completed")) {
            textSpan.classList.remove("completed");
        } else {
            textSpan.classList.add("completed");
        }
    });

    // Handle removal
    deleteBtn.addEventListener("click", function() {
        li.remove();
        totalTasks = totalTasks - 1;
        updateCounter();
    });
}


// Button Click Trigger
addTaskBtn.addEventListener("click", function() {
    addTask();
});

// Keydown Enter Key Trigger
taskInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
