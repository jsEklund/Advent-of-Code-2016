namespace day1_2 {

    var fs = require("fs");
    var data = fs.readFileSync('src/day1/input.txt', 'utf8');

    //var data = "R2, L3"; // 5
    //var data = "R2, R2, R2"; // 2
    //var data = "R5, L5, R5, R3"; // 12

    enum Directions {
        Up = 1,
        Down,
        Left,
        Right
    }

    class Positions {
        horisontal: number;
        vertical: number;
        direction: Directions;

        move(input: string) {

            let step = parseInt(input.substring(1), 10);

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

        }

        stepClockwise(input: Directions) {

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
        }

        stepCounterclockwise(input: Directions) {

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
        }

        constructor() {

            this.horisontal = 0;
            this.vertical = 0;
            this.direction = Directions.Up;
        }
    }

    function getInputArray(input: string) {
        return input.split(", ")
    }


    export class Startup {

        public static main() {

            let input = getInputArray(data);

            let position = new Positions();

            for (let i = 0; i < input.length; i++) {

                position.move(input[i]);
            }

            let blocksAway = position.horisontal + position.vertical;

            console.log(blocksAway);

        }
    }
}

day1_2.Startup.main();