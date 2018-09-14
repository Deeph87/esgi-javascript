// let test1 = "Bienvenue dans ce train basse vitesse";

/**
 *
 * @param string
 * @returns {string}
 */
let ucfirst = (string) => {
    if (typeof string !== 'string') {
        return "";
    }
    return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
};
// console.log(ucfirst(test1));

/**
 *
 * @param string
 * @returns {string}
 */
let capitalize = (string) => {
    if (typeof string !== 'string') {
        return "";
    }

    let stringExploded = string.split(" ");
    let ret = [];
    for (let i in stringExploded) {
        ret.push(ucfirst(stringExploded[i]));
    }
    return ret.join(" ");
};
// console.log(capitalize(test1));

/**
 *
 * @param string
 * @returns {string}
 */
let camelCase = (string) => {
    if (typeof string !== 'string') {
        return "";
    }
    let capitalizedString = capitalize(string);
    return capitalizedString.replace(/\ +/g, "");
};
// console.log(camelCase(test1));

/**
 *
 * @param string
 * @returns {string}
 */
let snakeCase = (string) => {
    if (typeof string !== 'string') {
        return "";
    }
    string = string.toLowerCase();
    return string.replace(/ +/g, "_");
};
// console.log(snakeCase(test1));

/**
 *
 * @param string
 * @returns {string}
 */
let leet = (string) => {
    if (typeof string !== 'string') {
        return "";
    }
    string = string.replace(/a+/gi, "4");
    string = string.replace(/e+/gi, "3");
    string = string.replace(/i+/gi, "1");
    string = string.replace(/o+/gi, "0");
    string = string.replace(/u+/gi, "(-)");
    string = string.replace(/y+/gi, "7");

    return string
};
// console.log(leet(test1));

/**
 *
 * @param object
 * @param path
 * @returns {*}
 */
let prop_access = (object, path) => {
    if (path === "" || path === null) {
        return object;
    }

    let pathExploded = path.split(".");
    let tmpObject = object,
        undefinedRet = [];

    for (let i in pathExploded) {
        tmpObject = tmpObject[pathExploded[i]];
        undefinedRet.push(pathExploded[i]);

        if (typeof tmpObject === "string") {
            return tmpObject;
        } else if (typeof tmpObject === "undefined") {
            return undefinedRet.join(".") + " not exist"
        }
    }
};

// let prairie = {
//     animal: {
//         type: {
//             name: "chien"
//         }
//     }
// };
// let path = "animal.type.name";

// console.log(prop_access(prairie, path));
// console.log(prop_access(prairie, path));

/**
 *
 * @param string
 * @returns {string}
 */
let verlan = (string) => {
    if (typeof string !== 'string') {
        return "";
    }
    let stringArray = [];
    for (i = 0;  i < string.length; i++){
        stringArray[i] = string.charAt(i);
    }
    return stringArray.reverse().join('');
};
//console.log(verlan(test1));

/**
 *
 * @param string
 * @returns {string}
 */
let yoda = (string) => {
    if (typeof string !== 'string') {
        return "";
    }
    let words = string.split(" ");
    return words.reverse().join(" ");
};
// console.log(yoda(test1));

let vig = (strToCrypt, key) => {
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    console.log(alphabet.length);
    let vigArray = [],
        popped, tmpAlphabet;
    for (let i = 0; i <= alphabet.length; i++) {
        tmpAlphabet = alphabet;
        vigArray.push(tmpAlphabet);
        popped = alphabet.pop();
        alphabet.unshift(popped);
    }
    console.log(vigArray);
};