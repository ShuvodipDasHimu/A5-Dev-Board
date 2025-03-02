// Random Background Color Generator for Body Tag (Took help from FreeCodeCamp Article)

// const hexCharacters = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]


// function getCharacter(i){
//   return hexCharacters[i];
// }

// function generateAColor(){
//   let hexColorRep = "#"

//   for(let i = 0; i < 6; i++){
//     hexColorRep += getCharacter(i)
//   }
//   return hexColorRep;
// }

// // console.log(generateAColor());

// const randomBackgroundColor = document.getElementById("btn-random-bg-color").addEventListener("click", function(){
//   // document.getElementsByTagName("body").classList.remove("bg-default");
//   document.querySelector("body").classList.remove("bg-default");
//   const randomColor = generateAColor();
//   document.querySelector("body").classList.add("bg-[" + randomColor + "]");
// })

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