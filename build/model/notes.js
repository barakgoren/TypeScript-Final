"use strict";
var Note = /** @class */ (function () {
    function Note(id, title, text, image) {
        this._id = id;
        this._date = new Date();
        this._title = title;
        this._text = text;
        this._image = image;
    }
    return Note;
}());
