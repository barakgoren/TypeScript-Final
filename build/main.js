"use strict";
var meet = new Meetings(1, "daylyMeet", "today in 10am", "in my office", "20/04/2023");
var fit = new Fitness(2, "training", "today in 10am", "at Profit", new Date(2024, 3, 17), "10:00", ["towel", "water"]);
var fitnessTasks = [
    new Fitness(1, "training", "we are going to train", "at Profit", new Date(2024, 3, 17), "10:00", ["towel", "water"]),
    new Fitness(3, "yoga", "we are going to do yoga", "at Yoga Studio", new Date(2024, 3, 18), "08:00", ["yoga mat"]),
    new Fitness(4, "running", "we are going to run", "at Park", new Date(2024, 3, 17), "18:00", ["running shoes", "water bottle"]),
    new Fitness(5, "cycling", "we are going to ride", "at Bike Trail", new Date(2024, 3, 24), "09:00", ["helmet", "bicycle"]),
    new Fitness(6, "swimming", "we are going to swim", "at Pool", new Date(2024, 3, 18), "07:00", ["swimsuit", "goggles"]),
    new Fitness(7, "weightlifting", "we are going to the gym", "at Gym", new Date(2024, 3, 17), "16:00", ["weightlifting gloves", "protein shake"]),
    new Fitness(7, "weightlifting", "we are going to the gym", "at Gym", new Date(2024, 3, 17), "16:00", ["weightlifting gloves", "protein shake"])
];
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
;
window.onload = function () {
    var tableContent = document.getElementById("taskList");
    fitnessTasks.forEach(function (task) {
        var row = document.createElement("tr");
        var cell = document.createElement("td");
        cell.appendChild(document.createTextNode(capitalize(task._title)));
        cell.style.color = "red";
        cell.style.fontWeight = "bold";
        row.appendChild(cell);
        cell = document.createElement("td");
        cell.appendChild(document.createTextNode(task._text.substring(0, 15) + "..."));
        row.appendChild(cell);
        cell = document.createElement("td");
        cell.appendChild(document.createTextNode(task.location));
        row.appendChild(cell);
        cell = document.createElement("td");
        cell.appendChild(document.createTextNode(task.trainingDateEvent.toDateString()));
        row.appendChild(cell);
        cell = document.createElement("td");
        cell.appendChild(document.createTextNode(task.time));
        row.appendChild(cell);
        cell = document.createElement("td");
        cell.appendChild(document.createTextNode(task.requiredEquipment.join(", ").substring(0, 15) + "..."));
        row.appendChild(cell);
        if (tableContent !== null) {
            tableContent.appendChild(row);
        }
        row.addEventListener('click', function () {
            task.alert();
        });
    });
};
