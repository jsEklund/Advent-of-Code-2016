var fs = require("fs");
var data = fs.readFileSync('src/day1/input.txt', 'utf8');
//var data = "R2, L3"; // 5
//var data = "R2, R2, R2"; // 2
//var data = "R5, L5, R5, R3"; // 12
var Directions;
(function (Directions) {
    Directions[Directions["Up"] = 1] = "Up";
    Directions[Directions["Down"] = 2] = "Down";
    Directions[Directions["Left"] = 3] = "Left";
    Directions[Directions["Right"] = 4] = "Right";
})(Directions || (Directions = {}));
var Positions = (function () {
    function Positions() {
        this.horisontal = 0;
        this.vertical = 0;
        this.direction = Directions.Up;
    }
    Positions.prototype.move = function (input) {
        var step = parseInt(input.substring(1), 10);
        switch (input[0]) {
            case "R":
                this.stepClockwise(this.direction);
                break;
            case "L":
                this.stepCounterclockwise(this.direction);
                break;
        }
        switch (this.direction) {
            case Directions.Up:
                this.vertical += step;
                break;
            case Directions.Down:
                this.vertical -= step;
                break;
            case Directions.Left:
                this.horisontal -= step;
                break;
            case Directions.Right:
                this.horisontal += step;
                break;
        }
    };
    Positions.prototype.stepClockwise = function (input) {
        switch (input) {
            case Directions.Up:
                this.direction = Directions.Right;
                break;
            case Directions.Right:
                this.direction = Directions.Down;
                break;
            case Directions.Down:
                this.direction = Directions.Left;
                break;
            case Directions.Left:
                this.direction = Directions.Up;
                break;
        }
    };
    Positions.prototype.stepCounterclockwise = function (input) {
        switch (input) {
            case Directions.Up:
                this.direction = Directions.Left;
                break;
            case Directions.Right:
                this.direction = Directions.Up;
                break;
            case Directions.Down:
                this.direction = Directions.Right;
                break;
            case Directions.Left:
                this.direction = Directions.Down;
                break;
        }
    };
    return Positions;
}());
function getInputArray(input) {
    return input.split(", ");
}
var Startup = (function () {
    function Startup() {
    }
    Startup.main = function () {
        var input = getInputArray(data);
        var position = new Positions();
        for (var i = 0; i < input.length; i++) {
            position.move(input[i]);
        }
        var blocksAway = position.horisontal + position.vertical;
        console.log(blocksAway);
    };
    return Startup;
}());
Startup.main();
//# sourceMappingURL=day1_2.js.map