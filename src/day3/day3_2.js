var day3_2;
(function (day3_2) {
    var fs = require("fs");
    var data = fs.readFileSync('src/day3/input.txt', 'utf8');
    var Triangle = (function () {
        function Triangle() {
        }
        Triangle.prototype.isTriagnle = function () {
            if ((this.sideA + this.sideB) > this.sideC && (this.sideB + this.sideC) > this.sideA && (this.sideC + this.sideA) > this.sideB) {
                return true;
            }
            else {
                return false;
            }
        };
        return Triangle;
    }());
    function getInputArray(input) {
        return input.split("\n");
    }
    var Startup = (function () {
        function Startup() {
        }
        Startup.main = function () {
            var input = getInputArray(data);
            var countTriangles = 0;
            var arr = [];
            for (var i = 0; i < input.length; i++) {
                var inputRow = input[i];
                var pattern = /\d+/g;
                var row = inputRow.match(pattern);
                arr.push(row);
                if (arr.length === 3) {
                    for (var j = 0; j < 3; j++) {
                        var triangle = new Triangle();
                        triangle.sideA = parseInt(arr[0][j]);
                        triangle.sideB = parseInt(arr[1][j]);
                        triangle.sideC = parseInt(arr[2][j]);
                        if (triangle.isTriagnle()) {
                            countTriangles++;
                        }
                    }
                    arr = [];
                }
            }
            console.log("Total triagles: " + countTriangles);
        };
        return Startup;
    }());
    day3_2.Startup = Startup;
})(day3_2 || (day3_2 = {}));
day3_2.Startup.main();
//# sourceMappingURL=day3_2.js.map