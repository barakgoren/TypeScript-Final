
"use strict";

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
var Task = /** @class */ (function (_super) {
    __extends(Task, _super);
    function Task(id, title, text, location, deadline, image) {
        var _this = _super.call(this, id, title, text, image) || this;
        _this.deadline = deadline;
        _this._location = location;
        return _this;
    }
    Task.prototype.newNote = function () {
        alert("you have new Task");
    };
    Task.prototype.alertDetails = function () {
        alert(this._location + " " + this.deadline);
    };
    return Task;
}(Note));
