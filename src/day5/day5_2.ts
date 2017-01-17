import crypto = require('crypto');

namespace day5_2 {
    
    var fs = require("fs");
    var data = fs.readFileSync('src/day5/input.txt', 'utf8');
    
    // var data = "abc"; // 18f47a30

    function getPassword(input: string): Array<string> {

        var hashIndex = 0;
        let nrsAdded = 0;
        let password = [];

        while (password.length <= 8 && nrsAdded < 8) {

            let hex = crypto.createHash("md5").update(input+hashIndex).digest("hex");

            if (hex.substring(0, 5) === "00000") {

                let index = hex[5];
                let char = hex[6];
                

                if (parseInt(index) < 8 &&
                    password[index] === undefined) {

                    password[index] = char;
                    nrsAdded++;
                }
            }

            hashIndex++;

        }
        
        return password;

    }

    export class Startup {

        public static main() {

            let doorinput = data;
            let password = getPassword(doorinput).join("");

            console.log("Password is: " + password)

        }
    }
}

day5_2.Startup.main();