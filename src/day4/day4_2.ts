namespace day4_2 {

    var fs = require("fs");
    var data = fs.readFileSync('src/day4/input.txt', 'utf8');

    class Encryption {
        EncryptedName: string;
        SectorId: number;
        Checksum: string;

        constructor(input: string) {

            let pattern = new RegExp(/(.*?)(\d+)\[(.*?)\]/g);
            let splitString = pattern.exec(input);

            this.EncryptedName = splitString[1];
            this.SectorId = parseInt(splitString[2]);
            this.Checksum = splitString[3];

        }
    }

    class Letter {
        Char: string;
        Count: number;
    }

    function IsMostCommonChar(input: Array<Letter>, checksum: string) {

        let inputArray = input.sort(function (a: { Char: string; Count: number }, b: { Char: string; Count: number }): number {

            if (a.Count > b.Count) {
                return -1;
            }
            if (a.Count < b.Count) {
                return 1;
            }

            if (a.Char < b.Char) {
                return -1;
            }

            if (a.Char > b.Char) {
                return 1;
            }
            return 0;
        });

        let IsValid;

        for (let i = 0; i < checksum.length; i++) {

            if (checksum[i] === inputArray[i].Char) {
                IsValid = true;
            } else {
                IsValid = false;
                return IsValid;
            }
        }
            return IsValid;
    }

    function countChar(input: string) : Array<Letter> {

        let arr = [];

        for (let i = 0; i < input.length; i++) {

            if (input[i] === "-") {
                continue;
            }

            let obj = {
                Char: input[i],
                Count: 1
            };

            let index = isCharInArray(arr, input[i]);

            if (index === -1) {
                arr.push(obj);
            } else {
                arr[index].Count++;
            }
        }

        return arr;
    }

    function isCharInArray(arr: Array<Letter>, char: string): number {

        for (let i = 0; i < arr.length; i++) {

            if (arr[i].Char === char) {
                return i;
            }
        }

        return -1;

    }

    function getInputArray(input: string) {

        return input.split("\n")

    }

    export class Startup {

        public static main() {

            //let input = ["aaaaa-bbb-z-y-x-123[abxyz]"] //true
            //let input = ["a-b-c-d-e-f-g-h-987[abcde]"]; // true
            //let input = ["not-a-real-room-404[oarel]"]; // true
            //let input = ["totally-real-room-200[decoy]"]; //false

            //let input = ["aaaaa-bbb-z-y-x-123[abxyz]", "a-b-c-d-e-f-g-h-987[abcde]", "not-a-real-room-404[oarel]", "totally-real-room-200[decoy]"];

            
            let input = getInputArray(data);

            let realRoomSectorIdsSum = 0;

            for (var i = 0; i < input.length; i++) {
                
                var myEncryption = new Encryption(input[i]);
                
                let test = IsMostCommonChar(countChar(myEncryption.EncryptedName), myEncryption.Checksum);

                if (test === true) {
                    realRoomSectorIdsSum += myEncryption.SectorId;
                }
            }

            console.log("Sum of sectorIDs: " + realRoomSectorIdsSum);

        }
    }
}

day4_2.Startup.main();