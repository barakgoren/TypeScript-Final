"use strict";
var fitnessTasks = [
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
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
;
var displayTasks = function () {
    var tableContent = document.getElementById("taskList");
    if (tableContent !== null) {
        tableContent.innerHTML = "";
    }
    fitnessTasks.forEach(function (task) {
        task.newNote(tableContent);
    });
};
function addTask() {
    var taskName = document.getElementById('taskName').value;
    var Position = document.getElementById('Position').value;
    var hourSelect = document.getElementById('hour');
    var hour = hourSelect.options[hourSelect.selectedIndex].text;
    var taskDescription = document.getElementById('taskDescription').value;
    var taskDateInput = document.getElementById('taskDate');
    var taskDateValue = taskDateInput.value;
    var taskDate = new Date(taskDateValue);
    var newFitTask = new Fitness(fitnessTasks.length + 1, taskName, taskDescription, Position, taskDate, hour, []);
    fitnessTasks.push(newFitTask);
    addRowToTable(newFitTask);
    var newTaskFormContainer = document.getElementById('newTaskFormContainer');
    if (newTaskFormContainer) {
        newTaskFormContainer.style.display = 'none';
    }
}
function addRowToTable(task) {
    var tableContent = document.getElementById("taskList");
    if (tableContent !== null) {
        var row = document.createElement("tr");
        row.innerHTML = "\n        <td class=\"bg-warning-subtle text-warning\">".concat(capitalize(Fitness.name), "</td>\n        <td class=\"bg-warning-subtle\">").concat(capitalize(task._title), "</td>\n        <td class=\"bg-warning-subtle\">").concat(task._text, "</td>\n        <td class=\"bg-warning-subtle\">").concat(task._location, "</td>\n        <td class=\"bg-warning-subtle\">").concat(task._date.toDateString(), "</td>\n        ");
        tableContent.appendChild(row);
        alert("New Fitness Task added successfully!");
    }
}
var form = document.getElementById('newTaskForm');
form === null || form === void 0 ? void 0 : form.addEventListener('submit', function (e) {
    e.preventDefault();
    addTask();
});
document.addEventListener("DOMContentLoaded", function () {
    var newTaskButton = document.getElementById('newTaskButton');
    var newTaskFormContainer = document.getElementById('newTaskFormContainer');
    if (newTaskButton && newTaskFormContainer) {
        newTaskButton.addEventListener('click', function () {
            if (newTaskFormContainer.style.display === 'block') {
                newTaskFormContainer.style.display = 'none';
            }
            else {
                newTaskFormContainer.style.display = 'block';
            }
        });
    }
    else {
        console.error("Les éléments requis n'ont pas été trouvés.");
    }
});
displayTasks();
