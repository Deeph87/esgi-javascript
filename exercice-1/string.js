// var test1 = "Bienvenue dans ce train basse vitesse";

/**
 *
 * @param string
 * @returns {string}
 */
function ucfirst(string) {
    if (typeof string !== 'string') {
        return "";
    }
    return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
}
// console.log(ucfirst("TEST"));

/**
 *
 * @param string
 * @returns {string}
 */
function capitalize(string) {
    if (typeof string !== 'string') {
        return "";
    }

    var stringExploded = string.split(" ");
    var ret = [];
    for (var i in stringExploded) {
        ret.push(ucfirst(stringExploded[i]));
    }
    return ret.join(" ");
}
// console.log(capitalize(test1));

/**
 *
 * @param string
 * @returns {string}
 */
function camelCase(string) {
    if (typeof string !== 'string') {
        return "";
    }
    var capitalizedString = capitalize(string);
    return capitalizedString.replace(/( |_)+/g, "");
}
// console.log(camelCase("ToggleCase is_the coolest"));

/**
 *
 * @param string
 * @returns {string}
 */
function snakeCase (string) {
    if (typeof string !== 'string') {
        return "";
    }
    string = string.toLowerCase();
    return string.replace(/ +/g, "_");
}
// console.log(snakeCase("toggle case is the coolest"));

/**
 *
 * @param string
 * @returns {string}
 */
function leet(string) {
    if (typeof string !== 'string') {
        return "";
    }
    string = string.replace(/a{1}/gi, "4");
    string = string.replace(/e{1}/gi, "3");
    string = string.replace(/i{1}/gi, "1");
    string = string.replace(/o{1}/gi, "0");
    string = string.replace(/u{1}/gi, "(_)");
    string = string.replace(/y{1}/gi, "7");

    return string
}
// console.log(leet("evaluation"));

/**
 *
 * @param object
 * @param path
 * @returns {*}
 */
function prop_access(object, path) {
    if (typeof path === "string" && path.trim() !== "") {
        var paths = path.split(".");

        paths.map((p)=>{

            if (object.hasOwnProperty(p)) {
                object = object[p];
            }

        });

        if (typeof object === "string") {
            return object;
        } else {
            return path + " not exist";
        }
    }
    return object;

}

// var prairie = {
//     animal: {
//         type: {
//             name: "chien"
//         }
//     }
// };
// var path = "animal.type.name";

// console.log(prop_access(prairie, path));
// console.log(prop_access(prairie, path));

/**
 *
 * @param string
 * @returns {string}
 */
function verlan(string) {
    if (typeof string !== 'string') {
        return "";
    }

    var separator = ' ',
        stringsArray = string.split(separator);

    for (var i in stringsArray){
        stringsArray[i] = stringsArray[i].split("").reverse().join("");
    }
    return stringsArray.join(separator);
}
// console.log(verlan("yoda m Luke"));

/**
 *
 * @param string
 * @returns {string}
 */
function yoda(string) {
    if (typeof string !== 'string') {
        return "";
    }
    var words = string.split(" ");
    return words.reverse().join(" ");
}
// console.log(yoda(test1));

function vig(strToCrypt, key) {
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    console.log(alphabet.length);
    var vigArray = [],
        popped,
        tmpAlphabet;
    for (var i = 0; i <= alphabet.length; i++) {
        tmpAlphabet = alphabet;
        vigArray.push(tmpAlphabet);
        popped = alphabet.pop();
        alphabet.unshift(popped);
    }
    console.log(vigArray);
}