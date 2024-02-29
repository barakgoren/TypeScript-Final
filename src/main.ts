const meet = new Meetings(1,"daylyMeet","today in 10am","in my office","20/04/2023");
const fit = new Fitness(2,"training","today in 10am","at Profit", new Date(2024, 3, 17), "10:00", ["towel","water"]);

fit.alert();
fit.newNote();