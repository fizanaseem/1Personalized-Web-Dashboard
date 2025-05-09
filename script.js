const quotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "It does not matter how slowly you go as long as you do not stop. – Confucius",
    "You miss 100% of the shots you don't take. – Wayne Gretzky",
    "Life is what happens when you're busy making other plans. – John Lennon",
    "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
    "The best way to predict the future is to create it. – Abraham Lincoln",
    "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
    "You only live once, but if you do it right, once is enough. – Mae West"
];

document.getElementById('quote-btn').addEventListener('click', function() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quote').textContent = randomQuote;
});

const addTaskButton = document.getElementById('add-task-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

addTaskButton.addEventListener('click', function() {
    const taskText = taskInput.value.trim();
    if (taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;
        li.addEventListener('click', function() {
            li.style.textDecoration = 'line-through';
        });
        taskList.appendChild(li);
        taskInput.value = '';
    }
});

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('time').textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock();

document.getElementById('color-btn').addEventListener('click', function() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
});

document.getElementById('toggle-dark').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});
