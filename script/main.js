
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

const themes = ["bg-green-200", "bg-blue-200", "bg-yellow-200", "bg-red-200", "bg-purple-200", "bg-pink-300"];
let currentTheme = parseInt(localStorage.getItem('themeIndex')) || 0;

applyTheme(currentTheme);

themeToggle.addEventListener("click", () => {
    currentTheme = (currentTheme + 1) % themes.length;
    applyTheme(currentTheme);
    localStorage.setItem('themeIndex', currentTheme);
});

function applyTheme(index) {
    body.classList.remove(...themes); 
    body.classList.add(themes[index]); 
}

document.getElementById('discover-something').addEventListener('click', function() {
    window.location.href = 'second.html';  
});


 
 const now = new Date();
 const formattedDate = now.toLocaleString('en-US', {
     weekday: 'long', year: "numeric", month: "long", day: "numeric", 
     hour: "2-digit", minute: '2-digit', second: '2-digit'
 });

 function updateTime() {
    const now = new Date(); 
    const formattedDate = now.toLocaleString(); 

    document.getElementById('btn-time').textContent = formattedDate; 
}

setInterval(updateTime, 1000);
updateTime();


 
document.addEventListener('DOMContentLoaded', function () {
    const btnCompleteList = document.querySelectorAll('.btn-complete'); 
    const btnTask = document.getElementById('btn-task'); 
    const btnNavBar = document.getElementById('btn-navbar'); 
    const btnClearHistory = document.querySelector('.btn-clear-history'); 
    const activitySection = document.querySelector('.activity-long-card'); 
   
    let taskCount = parseInt(btnTask.textContent);
    let navBarCount = parseInt(btnNavBar.textContent);
    let completedTasks = 0;

    btnCompleteList.forEach((btn) => {
        btn.addEventListener('click', function () {
            alert('Board update successfully');

            taskCount--;
            navBarCount++;
            btnTask.textContent = taskCount;
            btnNavBar.textContent = navBarCount;

            const taskName = btn.parentElement.parentElement.querySelector('p').textContent;
            const message = document.createElement('p');
            message.textContent = `✅ : "${taskName}" `;
            message.classList.add('p-2','rounded-md', 'mt-1');
            activitySection.appendChild(message);

            btn.disabled = true;
            btn.classList.add('opacity-50', 'cursor-not-allowed');

            completedTasks++;
            if (completedTasks === btnCompleteList.length) {
                setTimeout(() => {
                    alert('Congratulations!!! You have completed all the current tasks!');
                }, );
            }
        });
    });
    
    btnClearHistory.addEventListener('click', function () {
        activitySection.querySelectorAll('p').forEach((p) => p.remove());
    });
});

