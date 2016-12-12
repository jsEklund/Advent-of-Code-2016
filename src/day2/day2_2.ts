namespace day2_2 {

    var fs = require("fs");
    var data = fs.readFileSync('src/day2/input.txt', 'utf8');

    enum Direction {
        Up = 1,
        Down,
        Left,
        Right
    }

    class Positions {
        position: number;
        direction: Direction;
        code: string;

        move(direction: string) {
            
            switch (direction) {

                case "U":
                    // if (this.position == 1 || this.position == 2 || this.position == 3) {
                    //     break;
                    // } else {
                    //     this.position -= 3;
                    //     break;
                    // }

                case "D":

                    // if (this.position == 7 || this.position == 8 || this.position == 9) {
                    //     break;
                    // } else {
                    //     this.position += 3;
                    //     break;
                    // }

                case "L":

                    // if (this.position == 1 || this.position == 4 || this.position == 7) {
                    //     break;
                    // } else {
                    //     this.position -= 1;
                    //     break;
                    // }

                case "R":

                    // if (this.position == 3 || this.position == 6 || this.position == 9) {
                    //     break;
                    // } else {
                    //     this.position += 1;
                    //     break;
                    // }
            }
        }

        constructor() {
            this.position = 5;
            this.code = "";
        }
    }

    function getInputArray(input: string) {
        return input.split("\n")
    }

    export class Startup {

        public static main() {

            let input = getInputArray(data);
            let code = "";
            let position = new Positions();

            for (let i = 0; i < input.length; i++) {

                let move = input[i];

                for (let j = 0; j <= move.length; j++) {

                    position.move(move[j]);

                    if (j == move.length) {
                        code += position.position.toString();
                    }

                }

                
            }
                console.log("code: " + code);
        }
    }
}

day2_1.Startup.main();