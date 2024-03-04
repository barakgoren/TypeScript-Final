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
var Fitness = /** @class */ (function (_super) {
    __extends(Fitness, _super);
    // requiredEquipment?: string[];
    function Fitness(id, title, text, location, trainingDateEvent, time, /*requiredEquipment: string[],*/ image) {
        var _this = _super.call(this, id, title, text, image) || this;
        _this.location = location;
        _this.trainingDateEvent = trainingDateEvent;
        _this.time = time;
        return _this;
    }
    Fitness.prototype.newNote = function () {
        alert("You have new training");
    };
    Fitness.prototype.alert = function () {
        var modal = document.getElementById("myModal");
        if (modal !== null) {
            modal.style.display = "block";
        }
        var modalContent = document.getElementById("modal-text");
        if (modalContent !== null) {
            modalContent.innerHTML = "You have " + this._title + " at " + this.trainingDateEvent.toDateString() + " in " + this.location + " at " + this.time;
        }
        var span = document.getElementsByClassName("close")[0];
        if (span !== undefined) {
            span.onclick = function () {
                if (modal !== null) {
                    modal.style.display = "none";
                }
            };
        }
    };
    return Fitness;
}(Note));
