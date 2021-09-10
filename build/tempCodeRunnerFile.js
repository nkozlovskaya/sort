"use strict";
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                var leftHand = this.collection[j];
                this.collection[j] = this.collection[j + 1];
                this.collection[j + 1] = leftHand;
            }
        }
    };
    return Sorter;
}());
var sorter = new Sorter([4, -3, 11, 2]);
sorter.sort();
console.log(sorter.collection);
