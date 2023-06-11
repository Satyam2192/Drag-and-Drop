const draggables = document.querySelectorAll(".draggable");
const droppable = document.querySelector(".droppable");
const successMessage = document.querySelector(".success-message");
const resetButton = document.querySelector("#reset-button");
const resetMessage = document.querySelector("#reset-message");
const confirmResetButton = document.querySelector("#confirm-reset-button");
const cancelResetButton = document.querySelector("#cancel-reset-button");

let draggedElement = null;

function handleDragStart() {
  this.classList.add("dragging");
  draggedElement = this;
}

function handleDragEnd() {
  this.classList.remove("dragging");
}

function handleDragOver(event) {
  event.preventDefault();
}

function handleDragEnter(event) {
  event.preventDefault();
  this.classList.add("highlight");
}

function handleDragLeave() {
  this.classList.remove("highlight");
}

function handleDrop() {
  this.classList.remove("highlight");
  this.appendChild(draggedElement);
  successMessage.style.opacity = "1";
  setTimeout(function () {
    successMessage.style.opacity = "0";
  }, 2000); // Display message for 2 seconds
}

function handleResetClick() {
  resetMessage.classList.add("active");
}

function handleConfirmResetClick() {
  resetMessage.classList.remove("active");
  successMessage.style.opacity = "0";
  droppable.innerHTML = "<h2>Drop Here</h2>";
  draggables.forEach((draggable) => {
    document.getElementById("drag-container").appendChild(draggable);
  });
}

function handleCancelResetClick() {
  resetMessage.classList.remove("active");
}

draggables.forEach((draggable) => {
  draggable.addEventListener("dragstart", handleDragStart);
  draggable.addEventListener("dragend", handleDragEnd);
});

droppable.addEventListener("dragover", handleDragOver);
droppable.addEventListener("dragenter", handleDragEnter);
droppable.addEventListener("dragleave", handleDragLeave);
droppable.addEventListener("drop", handleDrop);

resetButton.addEventListener("click", handleResetClick);
confirmResetButton.addEventListener("click", handleConfirmResetClick);
cancelResetButton.addEventListener("click", handleCancelResetClick);
