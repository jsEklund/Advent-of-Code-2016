var day1_2;
(function (day1_2) {
    var fs = require("fs");
    var data = fs.readFileSync('src/day1/input.txt', 'utf8');
    var Directions;
    (function (Directions) {
        Directions[Directions["Up"] = 1] = "Up";
        Directions[Directions["Down"] = 2] = "Down";
        Directions[Directions["Left"] = 3] = "Left";
        Directions[Directions["Right"] = 4] = "Right";
    })(Directions || (Directions = {}));
    var Positions = (function () {
        function Positions() {
            this.visitedPositions = [];
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
                    CalculatePositionVisitedTwice(this, step, this.direction);
                    this.vertical += step;
                    break;
                case Directions.Down:
                    CalculatePositionVisitedTwice(this, step, this.direction);
                    this.vertical -= step;
                    break;
                case Directions.Left:
                    CalculatePositionVisitedTwice(this, step, this.direction);
                    this.horisontal -= step;
                    break;
                case Directions.Right:
                    CalculatePositionVisitedTwice(this, step, this.direction);
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
    function CalculatePositionVisitedTwice(visitedPositions, step, direction) {
        var currentPosition;
        for (var i = 0; i < step; i++) {
            switch (direction) {
                case Directions.Up:
                    currentPosition = visitedPositions.horisontal + "|" + (visitedPositions.vertical + i);
                    break;
                case Directions.Down:
                    currentPosition = visitedPositions.horisontal + "|" + (visitedPositions.vertical - i);
                    break;
                case Directions.Left:
                    currentPosition = (visitedPositions.horisontal - i) + "|" + visitedPositions.vertical;
                    break;
                case Directions.Right:
                    currentPosition = (visitedPositions.horisontal + i) + "|" + visitedPositions.vertical;
                    break;
            }
            if (IsPositionIsVisitedTwice(visitedPositions, currentPosition)) {
                visitedPositions.firstPositionVisitedTwice = currentPosition;
                break;
            }
            else {
                visitedPositions.visitedPositions.push(currentPosition);
            }
        }
    }
    function IsPositionIsVisitedTwice(visitedPositions, position) {
        for (var _i = 0, _a = visitedPositions.visitedPositions; _i < _a.length; _i++) {
            var visited = _a[_i];
            if (position == visited) {
                return true;
            }
        }
    }
    var Startup = (function () {
        function Startup() {
        }
        Startup.main = function () {
            var input = getInputArray(data);
            var position = new Positions();
            for (var i = 0; i < input.length; i++) {
                position.move(input[i]);
                if (position.firstPositionVisitedTwice !== undefined) {
                    var visitedTwice = position.firstPositionVisitedTwice.split("|");
                    console.log("First position visited twice " + (parseInt(visitedTwice[0]) + parseInt(visitedTwice[1])));
                    break;
                }
            }
        };
        return Startup;
    }());
    day1_2.Startup = Startup;
})(day1_2 || (day1_2 = {}));
day1_2.Startup.main();
//# sourceMappingURL=day1_2.js.map