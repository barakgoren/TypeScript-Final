abstract class Note {
    private _id: number;
    private _date: Date;
    private _title: string;
    private _text: string;
    private _image?: string;

    constructor(id: number, title: string, text: string, image?: string) {
        this._id = id;
        this._date = new Date();
        this._title = title;
        this._text = text;
        this._image = image;
    }
    
    abstract newNote(): void;
}