const meet = new Meetings(1, "daylyMeet", "today in 10am", "in my office", "20/04/2023");
const fit = new Fitness(2, "training", "today in 10am", "at Profit", new Date(2024, 3, 17), "10:00", ["towel", "water"]);
const fitnessTasks = [
    new Fitness(1, "training", "we are going to train", "at Profit", new Date(2024, 3, 17), "10:00", ["towel", "water"]),
    new Fitness(3, "yoga", "we are going to do yoga", "at Yoga Studio", new Date(2024, 3, 18), "08:00", ["yoga mat"]),
    new Fitness(4, "running", "we are going to run", "at Park", new Date(2024, 3, 17), "18:00", ["running shoes", "water bottle"]),
    new Fitness(5, "cycling", "we are going to ride", "at Bike Trail", new Date(2024, 3, 24), "09:00", ["helmet", "bicycle"]),
    new Fitness(6, "swimming", "we are going to swim", "at Pool", new Date(2024, 3, 18), "07:00", ["swimsuit", "goggles"]),
    new Fitness(7, "weightlifting", "we are going to the gym", "at Gym", new Date(2024, 3, 17), "16:00", ["weightlifting gloves", "protein shake"]),
    new Fitness(7, "weightlifting", "we are going to the gym", "at Gym", new Date(2024, 3, 17), "16:00", ["weightlifting gloves", "protein shake"])
];

function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

const displayTasks = () => {
    let tableContent = document.getElementById("taskList");
    if (tableContent !== null) {
        tableContent.innerHTML = "";
    }
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
displayTasks();