namespace day2_2 {

    var fs = require("fs");
    var data = fs.readFileSync('src/day2/input.txt', 'utf8');

    //var data =`UL\r\nRRDDD\r\nLURDL\r\nUUUUD`; // 3

    enum Direction {
        Up = 1,
        Down,
        Left,
        Right
    }

    class Positions {
        position: string;
        direction: Direction;
        code: string;

        move(direction: string) {
            
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
        }

        constructor() {
            this.position = "5";
            this.code = "";
        }
    }

    function tryToMove(direction: Direction, position: string) : string {

        let newPosition = position;

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
                        code += position.position;
                    }

                }

                
            }
                console.log("code: " + code);
        }
    }
}

day2_2.Startup.main();