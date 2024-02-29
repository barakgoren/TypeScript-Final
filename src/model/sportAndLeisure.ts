interface SportsAndLeisure extends Note {
    location: string;
    trainingDateEvent: Date;
    time: string;
    requiredEquipment: string[];
    alert(): void;
}

class Fitness extends Note implements SportsAndLeisure {
    location: string;
    trainingDateEvent: Date;
    time: string;
    requiredEquipment: string[];
    constructor(id: number, title: string, text: string, location: string, trainingDateEvent: Date, time: string, requiredEquipment: string[], image?: string) {
        super(id, title, text, image);
        this.location = location;
        this.trainingDateEvent = trainingDateEvent;
        this.time = time;
        this.requiredEquipment = requiredEquipment;
    }

    newNote(): void {
        alert("You have new training")
    }

    alert(): void {
        alert("You have training in " + this.location + " at " + this.time + " on " + this.trainingDateEvent);
    }
}