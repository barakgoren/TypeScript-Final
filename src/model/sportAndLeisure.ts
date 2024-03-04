interface SportsAndLeisure extends Note {
    location: string;
    trainingDateEvent: Date;
    time: string;
    // requiredEquipment?: string[];
    alert(): void;
}

class Fitness extends Note implements SportsAndLeisure {
    location: string;
    trainingDateEvent: Date;
    time: string;
    // requiredEquipment?: string[];
    constructor(id: number, title: string, text: string, location: string, trainingDateEvent: Date, time: string, /*requiredEquipment: string[],*/ image?: string) {
        super(id, title, text, image);
        this.location = location;
        this.trainingDateEvent = trainingDateEvent;
        this.time = time;
    }

    newNote(): void {
        alert("You have new training")
    }

    alert(): void {
        let modal = document.getElementById("myModal");
        if (modal !== null) {
            modal.style.display = "block";
        }
        let modalContent = document.getElementById("modal-text");
        if (modalContent !== null) {
            modalContent.innerHTML = "You have " + this._title + " at " + this.trainingDateEvent.toDateString() + " in " + this.location + " at " + this.time;
        }

        let span = document.getElementsByClassName("close")[0] as HTMLElement;
        if (span !== undefined) {
            span.onclick = function () {
                if (modal !== null) {
                    modal.style.display = "none";
                }
            }
        }
    }
}