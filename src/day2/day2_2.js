var day2_2;
(function (day2_2) {
    var fs = require("fs");
    var data = fs.readFileSync('src/day2/input.txt', 'utf8');
    var Direction;
    (function (Direction) {
        Direction[Direction["Up"] = 1] = "Up";
        Direction[Direction["Down"] = 2] = "Down";
        Direction[Direction["Left"] = 3] = "Left";
        Direction[Direction["Right"] = 4] = "Right";
    })(Direction || (Direction = {}));
    var Positions = (function () {
        function Positions() {
            this.position = "5";
            this.code = "";
        }
        Positions.prototype.move = function (direction) {
            switch (direction) {
                case "U":
                    this.position = tryToMove(Direction.Up, this.position);
                    break;
                case "D":
                    this.position = tryToMove(Direction.Down, this.position);
                    break;
                case "L":
                    this.position = tryToMove(Direction.Left, this.position);
                    break;
                case "R":
                    this.position = tryToMove(Direction.Right, this.position);
                    break;
            }
        };
        return Positions;
    }());
    function tryToMove(direction, position) {
        var newPosition = position;
        if (direction === Direction.Up) {
            switch (position) {
                case "3":
                    newPosition = "1";
                    break;
                case "6":
                    newPosition = "2";
                    break;
                case "7":
                    newPosition = "3";
                    break;
                case "8":
                    newPosition = "4";
                    break;
                case "A":
                    newPosition = "6";
                    break;
                case "B":
                    newPosition = "7";
                    break;
                case "C":
                    newPosition = "8";
                    break;
                case "D":
                    newPosition = "B";
                    break;
            }
        }
        if (direction === Direction.Down) {
            switch (position) {
                case "1":
                    newPosition = "3";
                    break;
                case "2":
                    newPosition = "6";
                    break;
                case "3":
                    newPosition = "7";
                    break;
                case "4":
                    newPosition = "8";
                    break;
                case "6":
                    newPosition = "A";
                    break;
                case "7":
                    newPosition = "B";
                    break;
                case "8":
                    newPosition = "C";
                    break;
                case "B":
                    newPosition = "D";
                    break;
            }
        }
        if (direction === Direction.Left) {
            switch (position) {
                case "3":
                    newPosition = "2";
                    break;
                case "4":
                    newPosition = "3";
                    break;
                case "6":
                    newPosition = "5";
                    break;
                case "7":
                    newPosition = "6";
                    break;
                case "8":
                    newPosition = "7";
                    break;
                case "9":
                    newPosition = "8";
                    break;
                case "B":
                    newPosition = "A";
                    break;
                case "C":
                    newPosition = "B";
                    break;
            }
        }
        if (direction === Direction.Right) {
            switch (position) {
                case "2":
                    newPosition = "3";
                    break;
                case "3":
                    newPosition = "4";
                    break;
                case "5":
                    newPosition = "6";
                    break;
                case "6":
                    newPosition = "7";
                    break;
                case "7":
                    newPosition = "8";
                    break;
                case "8":
                    newPosition = "9";
                    break;
                case "A":
                    newPosition = "B";
                    break;
                case "B":
                    newPosition = "C";
                    break;
            }
        }
        return newPosition;
    }
    function getInputArray(input) {
        return input.split("\n");
    }
    var Startup = (function () {
        function Startup() {
        }
        Startup.main = function () {
            var input = getInputArray(data);
            var code = "";
            var position = new Positions();
            for (var i = 0; i < input.length; i++) {
                var move = input[i];
                for (var j = 0; j <= move.length; j++) {
                    position.move(move[j]);
                    if (j == move.length) {
                        code += position.position;
                    }
                }
            }
            console.log("code: " + code);
        };
        return Startup;
    }());
    day2_2.Startup = Startup;
})(day2_2 || (day2_2 = {}));
day2_2.Startup.main();
//# sourceMappingURL=day2_2.js.map