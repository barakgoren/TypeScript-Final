//      Final Project TypeScript Course: "Task Manager App"
//
//          Contributors: Barak Goren, Michkael Halimi
//
//          Lecturer: Raz Dashan 
//  -----------------------------------------------------------------
//          GitHub Link:  https://github.com/barakgoren/TypeScript-Final


const fitnessTasks: Note[] = [
    new Fitness(1, "training", "we are going to train", "at Profit", new Date(2024, 3, 17), "10:00", ["towel", "water"]),
    new Fitness(3, "yoga", "we are going to do yoga", "at Yoga Studio", new Date(2024, 3, 18), "08:00", ["yoga mat"]),
    new Fitness(4, "running", "we are going to run", "at Park", new Date(2024, 3, 17), "18:00", ["running shoes", "water bottle"]),
    new Fitness(5, "cycling", "we are going to ride", "at Bike Trail", new Date(2024, 3, 24), "09:00", ["helmet", "bicycle"]),
    new Fitness(6, "swimming", "we are going to swim", "at Pool", new Date(2024, 3, 18), "07:00", ["swimsuit", "goggles"]),
    new Fitness(7, "weightlifting", "we are going to the gym", "at Gym", new Date(2024, 3, 17), "16:00", ["weightlifting gloves", "protein shake"]),
    new Fitness(7, "weightlifting", "we are going to the gym", "at Gym", new Date(2024, 3, 17), "16:00", ["weightlifting gloves", "protein shake"]),
    new Meetings(8, "daylyMeet", "in my office", "today in 10am", "in my office", "20/04/2023", "optional image"),
    new Meetings(9, "Weekly", "location", "text", "position", "dateOfMeeting", "optional image"),
    new Meetings(10, "Monthly", "location", "text", "position", "dateOfMeeting", "optional image"),
    new Meetings(11, "Yearly", "location", "text", "position", "dateOfMeeting", "optional image"),
    new Task(12, "task", "today in 10am", "in my office", "20/04/2023"),
    new Task(13, "Doctor", "today in 10am", "in my office", "20/04/2023"),
    new Task(14, "Exam", "today in 10am", "in my office", "20/04/2023")
];

function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

const displayTasks = () => {
    let tableContent = document.getElementById("taskList") as HTMLElement;
    if (tableContent !== null) {
        tableContent.innerHTML = "";
    }
    fitnessTasks.forEach(task => {
        task.newNote(tableContent);
    });
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
    const newFitTask = new Fitness(fitnessTasks.length + 1, taskName, taskDescription, Position, taskDate, hour, []);

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
        row.innerHTML =`
        <td class="bg-warning-subtle text-warning">${capitalize(Fitness.name)}</td>
        <td class="bg-warning-subtle">${capitalize(task._title)}</td>
        <td class="bg-warning-subtle">${task._text}</td>
        <td class="bg-warning-subtle">${task._location}</td>
        <td class="bg-warning-subtle">${task._date.toDateString()}</td>
        `;
        tableContent.appendChild(row);

        alert("New Fitness Task added successfully!");
    }
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


displayTasks();