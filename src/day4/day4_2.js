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
    var Letter = (function () {
        function Letter() {
        }
        return Letter;
    }());
    function IsMostCommonChar(input, checksum) {
        var inputArray = input.sort(function (a, b) {
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
        var IsValid;
        for (var i = 0; i < checksum.length; i++) {
            if (checksum[i] === inputArray[i].Char) {
                IsValid = true;
            }
            else {
                IsValid = false;
                return IsValid;
            }
        }
        return IsValid;
    }
    function countChar(input) {
        var arr = [];
        for (var i = 0; i < input.length; i++) {
            if (input[i] === "-") {
                continue;
            }
            var obj = {
                Char: input[i],
                Count: 1
            };
            var index = isCharInArray(arr, input[i]);
            if (index === -1) {
                arr.push(obj);
            }
            else {
                arr[index].Count++;
            }
        }
        return arr;
    }
    function isCharInArray(arr, char) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].Char === char) {
                return i;
            }
        }
        return -1;
    }
    function getInputArray(input) {
        return input.split("\n");
    }
    var Startup = (function () {
        function Startup() {
        }
        Startup.main = function () {
            var input = getInputArray(data);
            var realRoomSectorIdsSum = 0;
            for (var i = 0; i < input.length; i++) {
                var myEncryption = new Encryption(input[i]);
                var test = IsMostCommonChar(countChar(myEncryption.EncryptedName), myEncryption.Checksum);
                if (test === true) {
                    realRoomSectorIdsSum += myEncryption.SectorId;
                }
            }
            console.log("Sum of sectorIDs: " + realRoomSectorIdsSum);
        };
        return Startup;
    }());
    day4_2.Startup = Startup;
})(day4_2 || (day4_2 = {}));
day4_2.Startup.main();
//# sourceMappingURL=day4_2.js.map