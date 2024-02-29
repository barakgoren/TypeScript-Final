var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Meetings = /** @class */ (function (_super) {
    __extends(Meetings, _super);
    function Meetings(id, title, text, position, dateOfMeeting, image) {
        var _this = _super.call(this, id, title, text, image) || this;
        _this._position = position;
        _this._dateOfMeeting = dateOfMeeting;
        return _this;
    }
    Meetings.prototype.newNote = function () {
        alert("you have new meeting");
    };
    Meetings.prototype.dateOfCommande = function () {
        alert(this._dateOfMeeting + " " + this._position);
    };
    return Meetings;
}(Note));
