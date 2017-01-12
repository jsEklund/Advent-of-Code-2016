var day4_2;
(function (day4_2) {
    var fs = require("fs");
    var data = fs.readFileSync('src/day4/input.txt', 'utf8');
    var Encryption = (function () {
        function Encryption(input) {
            var pattern = new RegExp(/(.*?)(\d+)\[(.*?)\]/g);
            var splitString = pattern.exec(input);
            this.EncryptedName = splitString[1];
            this.SectorId = parseInt(splitString[2]);
            this.Checksum = splitString[3];
        }
        return Encryption;
    }());
    function getNextCharactersInString(input) {
        var chars = input;
        var newString = "";
        for (var j = 0; j < chars.length; j++) {
            if (chars[j] === "-" || chars[j] === " ") {
                newString += " ";
                continue;
            }
            var charCode = chars[j].charCodeAt(0);
            if (charCode !== 122) {
                charCode++;
            }
            else {
                charCode = 97;
            }
            newString += String.fromCharCode(charCode);
        }
        return newString;
    }
    function LoopNrOfTimes(input, count) {
        var encryption = input;
        for (var i = 0; i < count; i++) {
            encryption = getNextCharactersInString(encryption);
        }
        return encryption;
    }
    function getInputArray(input) {
        return input.split("\n");
    }
    var Startup = (function () {
        function Startup() {
        }
        Startup.main = function () {
            var input = getInputArray(data);
            var northPoleObjects;
            for (var i = 0; i < input.length; i++) {
                var encryptedString = new Encryption(input[i]);
                var chars = LoopNrOfTimes(encryptedString.EncryptedName, encryptedString.SectorId);
                if (chars.indexOf("north") !== -1 && chars.indexOf("pole") !== -1) {
                    northPoleObjects = encryptedString.SectorId;
                    break;
                }
            }
            console.log("sector ID: " + northPoleObjects);
        };
        return Startup;
    }());
    day4_2.Startup = Startup;
})(day4_2 || (day4_2 = {}));
day4_2.Startup.main();
//# sourceMappingURL=day4_2.js.map