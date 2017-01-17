"use strict";
var crypto = require("crypto");
var day5_1;
(function (day5_1) {
    var fs = require("fs");
    var data = fs.readFileSync('src/day5/input.txt', 'utf8');
    function getPassword(input) {
        var hashIndex = 0;
        var password = "";
        while (password.length < 8) {
            var hex = crypto.createHash("md5").update(input + hashIndex).digest("hex");
            if (hex.substring(0, 5) === "00000") {
                var char = hex.substr(5, 1);
                password += char;
            }
            hashIndex++;
        }
        return password;
    }
    var Startup = (function () {
        function Startup() {
        }
        Startup.main = function () {
            var doorinput = data;
            var password = getPassword(doorinput);
            console.log("Password is: " + password);
        };
        return Startup;
    }());
    day5_1.Startup = Startup;
})(day5_1 || (day5_1 = {}));
day5_1.Startup.main();
//# sourceMappingURL=day5_1.js.map