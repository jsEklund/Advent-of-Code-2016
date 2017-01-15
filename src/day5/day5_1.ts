import crypto = require('crypto');

namespace day5_1 {
    
    var fs = require("fs");
    var data = fs.readFileSync('src/day5/input.txt', 'utf8');

    // var data = "abc"; // 18f47a30

    function getPassword(input: string): string {

        var hachIndex = 0;
        let password = "";

        while (password.length < 8) {

            let hex = crypto.createHash("md5").update(input+hachIndex).digest("hex");

            if (hex.substring(0, 5) === "00000") {

                let char = hex.substr(5, 1);

                password += char;

            }

            hachIndex++;

        }
        
        return password;

    }

    export class Startup {

        public static main() {

            let doorinput = data;
            let password = getPassword(doorinput)

            console.log("Password is: " + password)

        }
    }
}

day5_1.Startup.main();