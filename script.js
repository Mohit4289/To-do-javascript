document.getElementById("submit").onclick = function () {
  let data = document.getElementById("head").value;
  
  if (data) {
    let tableBody = document.getElementById("task-table-body");

    // Create a new row
    let row = document.createElement("tr");

    // Create a cell for the task
    let taskCell = document.createElement("td");
    taskCell.textContent = data;

    // Create a cell for actions
    let actionCell = document.createElement("td");

    // Create an Edit button
    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.onclick = function () {
      let newData = prompt("Edit task:", taskCell.textContent);
      if (newData) {
        taskCell.textContent = newData;
      }
    };

    // Create a Delete button
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
      tableBody.removeChild(row);
    };

    // Append buttons to action cell
    actionCell.appendChild(editButton);
    actionCell.appendChild(deleteButton);

    // Append cells to row
    row.appendChild(taskCell);
    row.appendChild(actionCell);

    // Append row to table body
    tableBody.appendChild(row);

    // Clear input field
    document.getElementById("head").value = "";
  }
};
