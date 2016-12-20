var day3_1;
(function (day3_1) {
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
            for (var i = 0; i < input.length; i++) {
                var test = input[i];
                var pattern = /\d+/g;
                var sides = test.match(pattern);
                var triangle = new Triangle();
                triangle.sideA = parseInt(sides[0]);
                triangle.sideB = parseInt(sides[1]);
                triangle.sideC = parseInt(sides[2]);
                if (triangle.isTriagnle()) {
                    countTriangles++;
                }
            }
            console.log("Possible triangles: " + countTriangles);
        };
        return Startup;
    }());
    day3_1.Startup = Startup;
})(day3_1 || (day3_1 = {}));
day3_1.Startup.main();
//# sourceMappingURL=day3_1.js.map