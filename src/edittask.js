import { pressAddNewTaskButton, deleteTask } from "./newtask";

function editTask(taskId) {
  document.querySelector(".newtaskpopup").classList.remove("hidden");
  exitOutofEditTask();
  document.querySelector(".tasknameinput").value = document.querySelector(
    `.n${taskId}`
  ).textContent;
  document.querySelector("#notesinput").value = document.querySelector(
    `.d${taskId}`
  ).textContent;
  document.querySelector("#prioritylevelinput").value = document.querySelector(
    `.p${taskId}`
  ).value;
  document.querySelector(".addtaskbutton").addEventListener("click", () => {
    deleteTask(taskId);
  });
}

function exitOutofEditTask() {
  window.addEventListener("click", function (event) {
    if (
      !event.target.closest(".tasks-header") &&
      !event.target.closest(".edit") &&
      !event.target.closest(".newtaskpopup")
    ) {
      document.querySelector(".newtaskpopup").classList.add("hidden");
    }
  });
}
// edit.classList.value

export { editTask };
