// Get elements from the DOM
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// === Page Styling (applies once) ===
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.alignItems = "center";
document.body.style.justifyContent = "center";
document.body.style.height = "100vh";
document.body.style.backgroundColor = "#f9f9f9";

// Style input field
taskInput.style.padding = "10px";
taskInput.style.fontSize = "16px";
taskInput.style.marginRight = "10px";
taskInput.style.border = "1px solid #ccc";
taskInput.style.borderRadius = "4px";
taskInput.style.outline = "none";

// Style add button
addBtn.style.padding = "10px 16px";
addBtn.style.fontSize = "16px";
addBtn.style.backgroundColor = "#4CAF50";
addBtn.style.color = "white";
addBtn.style.border = "none";
addBtn.style.borderRadius = "4px";
addBtn.style.cursor = "pointer";

// Hover effect for add button
addBtn.addEventListener("mouseover", () => {
  addBtn.style.backgroundColor = "#45a049";
});
addBtn.addEventListener("mouseout", () => {
  addBtn.style.backgroundColor = "#4CAF50";
});

// Style task list
taskList.style.listStyle = "none";
taskList.style.padding = "0";
taskList.style.width = "300px";
taskList.style.marginTop = "20px";

// === Event Listener for Adding Task ===
addBtn.addEventListener("click", function () {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  // Create new task <li>
  const newTask = document.createElement("li");
  newTask.textContent = taskText;

  // Style the new task
  newTask.style.display = "flex";
  newTask.style.justifyContent = "space-between";
  newTask.style.alignItems = "center";
  newTask.style.backgroundColor = "#fff";
  newTask.style.padding = "10px";
  newTask.style.marginBottom = "8px";
  newTask.style.border = "1px solid #ddd";
  newTask.style.borderRadius = "4px";
  newTask.style.boxShadow = "0 1px 2px rgba(0,0,0,0.05)";

  // Toggle completed (line-through) when clicked
  newTask.addEventListener("click", () => {
    newTask.style.textDecoration =
      newTask.style.textDecoration === "line-through" ? "none" : "line-through";
  });

  // Create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.style.marginLeft = "10px";
  deleteBtn.style.backgroundColor = "white";
  deleteBtn.style.border = "none";
  deleteBtn.style.color = "white";
  deleteBtn.style.padding = "6px 10px";
  deleteBtn.style.borderRadius = "4px";
  deleteBtn.style.cursor = "pointer";

  // Delete task on click
  deleteBtn.addEventListener("click", () => {
    taskList.removeChild(newTask);
  });

  // Add delete button to task
  newTask.appendChild(deleteBtn);

  // Add task to the list
  taskList.appendChild(newTask);

  // Clear input
  taskInput.value = "";
});

  taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addBtn.click();
});
