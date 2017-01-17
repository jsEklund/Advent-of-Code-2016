"use strict";
var crypto = require("crypto");
var day5_2;
(function (day5_2) {
    var fs = require("fs");
    var data = fs.readFileSync('src/day5/input.txt', 'utf8');
    function getPassword(input) {
        var hachIndex = 0;
        var nrsAdded = 0;
        var password = [];
        while (password.length <= 8 && nrsAdded < 8) {
            var hex = crypto.createHash("md5").update(input + hachIndex).digest("hex");
            if (hex.substring(0, 5) === "00000") {
                var index = hex[5];
                var char = hex[6];
                if (parseInt(index) < 8 &&
                    password[index] === undefined) {
                    password[index] = char;
                    nrsAdded++;
                }
            }
            hachIndex++;
        }
        return password;
    }
    var Startup = (function () {
        function Startup() {
        }
        Startup.main = function () {
            var doorinput = data;
            var password = getPassword(doorinput).join("");
            console.log("Password is: " + password);
        };
        return Startup;
    }());
    day5_2.Startup = Startup;
})(day5_2 || (day5_2 = {}));
day5_2.Startup.main();
//# sourceMappingURL=day5_2.js.map