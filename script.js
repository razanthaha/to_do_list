// Select input, button, and task list
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

// Add task to the list
addTaskButton.addEventListener("click", function () {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const li = document.createElement("li");
    li.innerHTML = `${taskText} <button class="deleteTaskButton">Delete</button>`;
    taskList.appendChild(li);

    taskInput.value = ""; // Clear input field

    // Add delete task functionality
    const deleteButton = li.querySelector(".deleteTaskButton");
    deleteButton.addEventListener("click", function () {
      li.remove();
    });
  } else {
    alert("Please enter a task!");
  }
});
