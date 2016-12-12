var day2_1;
(function (day2_1) {
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
            this.position = 5;
            this.code = "";
        }
        Positions.prototype.move = function (direction) {
            switch (direction) {
                case "U":
                    if (this.position == 1 || this.position == 2 || this.position == 3) {
                        break;
                    }
                    else {
                        this.position -= 3;
                        break;
                    }
                case "D":
                    if (this.position == 7 || this.position == 8 || this.position == 9) {
                        break;
                    }
                    else {
                        this.position += 3;
                        break;
                    }
                case "L":
                    if (this.position == 1 || this.position == 4 || this.position == 7) {
                        break;
                    }
                    else {
                        this.position -= 1;
                        break;
                    }
                case "R":
                    if (this.position == 3 || this.position == 6 || this.position == 9) {
                        break;
                    }
                    else {
                        this.position += 1;
                        break;
                    }
            }
        };
        return Positions;
    }());
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
                        code += position.position.toString();
                    }
                }
            }
            console.log("code: " + code);
        };
        return Startup;
    }());
    day2_1.Startup = Startup;
})(day2_1 || (day2_1 = {}));
day2_1.Startup.main();
//# sourceMappingURL=day2_1.js.map