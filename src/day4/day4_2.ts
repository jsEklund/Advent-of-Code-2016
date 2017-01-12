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

    function getNextCharactersInString(input: string): string {

        let chars = input;
        let newString = "";

        for (let j = 0; j < chars.length; j++) {

            if (chars[j] === "-" || chars[j] === " ") {
                newString += " ";
                continue;
            }

            let charCode = chars[j].charCodeAt(0);


            if (charCode !== 122) {
            charCode++;
            } else {
                charCode = 97;
            }

            newString += String.fromCharCode(charCode);

        }

        return newString;

    }

    function LoopNrOfTimes(input: string, count: number): string {

        let encryption = input;

        for (var i = 0; i < count; i++) {

            encryption = getNextCharactersInString(encryption);

        }

        return encryption;

    }

    function getInputArray(input: string) {

        return input.split("\n")

    }

    export class Startup {

        public static main() {

            let input = getInputArray(data);
            let northPoleObjects;

            for (var i = 0; i < input.length; i++) {
                
                let encryptedString = new Encryption(input[i]);
                let chars = LoopNrOfTimes(encryptedString.EncryptedName, encryptedString.SectorId);

                if (chars.indexOf("north") !== -1 && chars.indexOf("pole") !== -1) {

                    northPoleObjects = encryptedString.SectorId;
                    break;
                    
                }
            }
            
            console.log("sector ID: " + northPoleObjects);

        }
    }
}

day4_2.Startup.main();