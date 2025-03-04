// Select elements
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Available themes
const themes = ["bg-green-200", "bg-blue-200", "bg-yellow-200", "bg-red-200", "bg-purple-200"];
let currentThemeIndex = parseInt(localStorage.getItem('themeIndex')) || 0;

// Apply the saved theme on page load
applyTheme(currentThemeIndex);

// Toggle theme on button click
themeToggle.addEventListener("click", () => {
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    applyTheme(currentThemeIndex);
    localStorage.setItem('themeIndex', currentThemeIndex);
});

// Function to apply theme
function applyTheme(index) {
    body.classList.remove(...themes); // Remove all previous themes
    body.classList.add(themes[index]); // Apply the new theme
}

document.getElementById('discover-something').addEventListener('click', function() {
    window.location.href = 'second.html'; // Change to your desired page
});

// document.getElementById('btn-back').addEventListener('click', function() {
//     window.history.back();
// });

 




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

            // Update values
            taskCount--;
            navBarCount++;
            btnTask.textContent = taskCount;
            btnNavBar.textContent = navBarCount;

            // Get current date and time
            const now = new Date();
            const formattedDate = now.toLocaleString('en-US', {
                weekday: 'long', year: "numeric", month: "long", day: "numeric", 
                hour: "2-digit", minute: '2-digit', second: '2-digit'
            });

            // Show task completion message
            const taskName = btn.parentElement.parentElement.querySelector('p').textContent;
            const message = document.createElement('p');
            message.textContent = `✅ : "${taskName}" on ${formattedDate}`;
            message.classList.add('p-2','rounded-md', 'mt-1');
            activitySection.appendChild(message);

            // Disable the button
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

    // Clear history button
    btnClearHistory.addEventListener('click', function () {
        activitySection.querySelectorAll('p').forEach((p) => p.remove());
    });
});

