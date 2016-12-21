namespace day3_2 {

    var fs = require("fs");
    var data = fs.readFileSync('src/day3/input.txt', 'utf8');

    class Triangle {
        sideA: number;
        sideB: number;
        sideC: number;

        isTriagnle(): Boolean {
            if ((this.sideA + this.sideB) > this.sideC && (this.sideB + this.sideC) > this.sideA && (this.sideC + this.sideA) > this.sideB) {
                return true;

            } else {
                return false;
            }
        }
    }

    function getInputArray(input: string) {
        return input.split("\n")
    }

    export class Startup {

        public static main() {

            let input = getInputArray(data);
            var countTriangles = 0;

            let arr = [];

            // Loop input rows
            for (let i = 0; i < input.length; i++) {

                var inputRow = input[i];
                let pattern = /\d+/g;
                let row = inputRow.match(pattern);

                arr.push(row);

                // If matris is complete. Calculate triangles
                if (arr.length === 3) {

                    for (let j = 0; j < 3; j++) {

                        let triangle = new Triangle(); 
                        triangle.sideA = parseInt(arr[0][j]);
                        triangle.sideB = parseInt(arr[1][j]);
                        triangle.sideC = parseInt(arr[2][j]);

                        if (triangle.isTriagnle()) {
                            countTriangles++;
                        }
                    }

                    // Empty array
                    arr = [];

                }
            }

            console.log("Total triagles: " + countTriangles);
        }
    }
}

day3_2.Startup.main();