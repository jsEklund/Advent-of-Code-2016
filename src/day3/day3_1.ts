namespace day3_1 {

    var fs = require("fs");
    var data = fs.readFileSync('src/day3/input.txt', 'utf8');

    class Triangle {
        sideA: number;
        sideB: number;
        sideC: number;

        isTriangle(): Boolean {
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
            

            for (let i = 0; i < input.length; i++) {

                let test = input[i];
                let pattern = /\d+/g;
                let sides = test.match(pattern);

                

                let triangle = new Triangle();
                triangle.sideA = parseInt(sides[0]);
                triangle.sideB = parseInt(sides[1]);
                triangle.sideC = parseInt(sides[2]);

                if (triangle.isTriangle()) {
                    countTriangles++;
                }
            }

            console.log("Possible triangles: " + countTriangles);

        }
    }
}

day3_1.Startup.main();