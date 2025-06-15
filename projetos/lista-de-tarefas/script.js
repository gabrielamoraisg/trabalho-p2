document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById("input-task");
    const button = document.getElementById("addtask-btn");
    const taskList = document.getElementById("tasklist");
    const emptyMessage = document.getElementById("emptyMessage");
  
    button.addEventListener("click", function() {
      const taskText = input.value.trim();
      
      if (taskText === "") {
        alert("Por favor, digite uma tarefa válida.");
        return;
      }

      if (taskText !== "") {
        const li = document.createElement("li");
        li.textContent = taskText;
      
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Excluir";
        deleteBtn.classList.add("delete-btn"); 
  
        deleteBtn.addEventListener("click", function() {
          li.remove();
          if (taskList.children.length === 0) {
            emptyMessage.style.display = "block";
          }
        });

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
  
        input.value = "";
        emptyMessage.style.display = "none";
      }
    });
  });