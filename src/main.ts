const fitnessTasks: Fitness[] = [
    new Fitness(1, "training", "we are going to train", "at Profit", new Date(2024, 3, 17), "10:00"),
    new Fitness(3, "yoga", "we are going to do yoga", "at Yoga Studio", new Date(2024, 3, 18), "08:00"),
    new Fitness(4, "running", "we are going to run", "at Park", new Date(2024, 3, 17), "18:00"),
    new Fitness(5, "cycling", "we are going to ride", "at Bike Trail", new Date(2024, 3, 24), "09:00"),
    new Fitness(6, "swimming", "we are going to swim", "at Pool", new Date(2024, 3, 18), "07:00"),
    new Fitness(7, "weightlifting", "we are going to the gym", "at Gym", new Date(2024, 3, 17), "16:00"),
    new Fitness(8, "weightlifting", "we are going to the gym", "at Gym", new Date(2024, 3, 17), "16:00"),
];

function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function addTask() {
    const taskName = (document.getElementById('taskName') as HTMLInputElement).value;
    const Position = (document.getElementById('Position') as HTMLInputElement).value;
    const hourSelect = document.getElementById('hour') as HTMLSelectElement;
    const hour = hourSelect.options[hourSelect.selectedIndex].text;
    const taskDescription = (document.getElementById('taskDescription') as HTMLTextAreaElement).value;
    const taskDateInput = document.getElementById('taskDate') as HTMLInputElement;
    const taskDateValue = taskDateInput.value;

    const taskDate = new Date(taskDateValue);
    const newFitTask = new Fitness(fitnessTasks.length + 1, taskName, taskDescription, Position, taskDate, hour);

    fitnessTasks.push(newFitTask);

    addRowToTable(newFitTask);
    
    const newTaskFormContainer = document.getElementById('newTaskFormContainer');
    if (newTaskFormContainer) {
        newTaskFormContainer.style.display = 'none';
    }
}

function addRowToTable(task: Fitness) {
    const tableContent = document.getElementById("taskList");
    if (tableContent !== null) {
        let row = document.createElement("tr");
        row.innerHTML = `
        <td>${capitalize(task._title)}</td>
        <td>${task._text}</td>
        <td>${task.location}</td>
        <td>${task._date.toDateString()}</td>
        <td>${task.time}</td>
        `;
        tableContent.appendChild(row);

        alert("New Fitness Task added successfully!");
    }
}

window.onload = function () {
    let tableContent = document.getElementById("taskList");
    fitnessTasks.forEach(task => {
        let row = document.createElement("tr");
        row.innerHTML = `
        <td>${capitalize(task._title)}</td>
        <td>${task._text}</td>
        <td>${task.location}</td>
        <td>${task._date.toDateString()}</td>
        <td>${task.time}</td>
        `;
        if (tableContent !== null) {
            tableContent.appendChild(row);
            
        }
        row.addEventListener('click', () => {
            task.alert();
        });
    });
}

let form = document.getElementById('newTaskForm')
form?.addEventListener('submit', (e) => {
    e.preventDefault();
    addTask();
});


document.addEventListener("DOMContentLoaded", function () {
    const newTaskButton = document.getElementById('newTaskButton');
    const newTaskFormContainer = document.getElementById('newTaskFormContainer');

    if (newTaskButton && newTaskFormContainer) {
        newTaskButton.addEventListener('click', () => {
            if (newTaskFormContainer.style.display === 'block') {
                newTaskFormContainer.style.display = 'none';
            } else {
                newTaskFormContainer.style.display = 'block';
            }
        });
    } else {
        console.error("Les éléments requis n'ont pas été trouvés.");
    }
});