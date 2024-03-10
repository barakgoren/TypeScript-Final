interface ITask { 
    deadline?: string;
    alertDetails(): void;
}
class Task extends Note implements ITask {
    deadline?: string;
    _location: string;
    
    constructor(id: number, title: string, text: string, location: string, deadline: string, image?: string) {
        super(id, title, text, image);
        this.deadline = deadline;
        this._location = location;
    }
    newNote(): void {
        alert("you have new Task")
    }
    alertDetails(): void {
        alert(this._location +" "+ this.deadline);
    }
}