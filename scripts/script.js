// Assigned Tasks
const tasksAssignedBtns = document.getElementsByClassName("btn-completed");

for(let i = 0; i < tasksAssignedBtns.length; i++){
  tasksAssignedBtns[i].addEventListener("click", function(event){
    alert("Board updated successfully");
    tasksAssignedBtns[i].disabled = true;
    tasksAssignedBtns[i].classList.add("cursor-not-allowed", "bg-gray-500");
    tasksAssignedBtns[i].classList.remove("accent");

    const remainingTaskElement = document.getElementById("remaining-tasks");
    let remainingTaskNumber = parseInt(remainingTaskElement.innerText);
    if(remainingTaskNumber > 0){
      remainingTaskElement.innerText = remainingTaskNumber - 1;
    }
    
    const totalTaskElement = document.getElementById("total-completed-tasks");
    let totalTaskNumber = parseInt(totalTaskElement.innerText);
    if(!isNaN(totalTaskNumber)){
      totalTaskElement.innerText = totalTaskNumber + 1;
    }

    const taskTitle = tasksAssignedBtns[i].closest(".bg-default").querySelector("h1").textContent;

    const currentTime = new Date().toLocaleString();

    const activityLog = document.getElementById("activity-logs");
    const messageFormat = `You have completed the task ${taskTitle} at ${currentTime}`;

    const newMessage = document.createElement("p");
    newMessage.textContent = messageFormat;

    newMessage.classList.add("bg-default", "p-2", "w-[90%]", "self-center", "rounded-lg");

    activityLog.appendChild(newMessage);
  })
}

const activityLogs = document.getElementById("activity-logs");
const clearHistoryBtn = document.getElementById("clear-history-btn");
clearHistoryBtn.addEventListener("click", function(){
  activityLogs.innerHTML = "";
})

const currentDate = new Date();

const formattedDate = currentDate.toLocaleDateString('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric'
})

const liveDateElement = document.getElementById("current-date");

if(liveDateElement){
  liveDateElement.textContent = formattedDate;
}

function getRandomColor(){
  const chars = '0123456789ABCDEFGH';
  let color = '#';

  for(let i = 0; i < 6; i++){
    color += chars[Math.floor(Math.random() * 16)];
  }
  return color
}

let randomBgColorBtn = document.getElementById('btn-random-bg-color');

randomBgColorBtn.addEventListener('click', function(){
  let randomColor = getRandomColor();

  document.body.style.backgroundColor = randomColor;

  document.body.classList.remove('bg-default');
})