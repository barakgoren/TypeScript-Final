interface Meetings {
    _position: string;
    _dateOfMeeting: string;
    dateOfCommande(): void;
}

class Meetings extends Note implements Meetings { 
        constructor(id: number, title: string,
        text: string, position: string, dateOfMeeting: string, image?: string) {
        super(id, title, text, image); 
        this._position = position; 
        this._dateOfMeeting = dateOfMeeting; 
    }

    newNote(): void {
        alert("you have new meeting")
    }

    dateOfCommande(): void {
        alert(this._dateOfMeeting +" "+ this._position); 
    }

}
