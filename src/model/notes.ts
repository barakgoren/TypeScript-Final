abstract class Note {
    _id: number;
    _date: Date;
    _title: string;
    _text: string;
    _image?: string;

    constructor(id: number, title: string, text: string, image?: string) {
        this._id = id;
        this._date = new Date();
        this._title = title;
        this._text = text;
        this._image = image;
    }

    abstract newNote(): void;
}