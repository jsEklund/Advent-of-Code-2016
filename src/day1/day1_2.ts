namespace day1_2 {

    var fs = require("fs");
    var data = fs.readFileSync('src/day1/input.txt', 'utf8');

    //var data = "R8, R4, R4, R8";

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
        visitedPositions: string[] = [];
        firstPositionVisitedTwice: String;

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

    function CalculatePositionVisitedTwice(visitedPositions: Positions, step: number, directon: Directions) {

        let currentPosition;

        for (let i = 0; i < step; i++) {

            switch (directon) {

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
            } else {
                visitedPositions.visitedPositions.push(currentPosition);
            }
        }
    }

    function IsPositionIsVisitedTwice(visitedPositions: Positions, position: string): boolean {

        for (let visited of visitedPositions.visitedPositions) {

            if (position == visited) {
                return true;
            }
        }
    }

    export class Startup {

        public static main() {

            let input = getInputArray(data);

            let position = new Positions();

            for (let i = 0; i < input.length; i++) {

                position.move(input[i]);

                if (position.firstPositionVisitedTwice !== undefined) {

                    let visitedTwice = position.firstPositionVisitedTwice.split("|");

                    console.log("First position visited twice " + (parseInt(visitedTwice[0]) + parseInt(visitedTwice[1])));
                    break;
                }
            }
        }
    }
}

day1_2.Startup.main();