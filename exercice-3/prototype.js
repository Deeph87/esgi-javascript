String.protoype.ucfirst = (string) => {
    if (typeof string !== 'string') {
        return "";
    }
    return string.charAt(0).toUpperCase() + string.substring(1);
};

String.protoype.capitalize = (string) => {
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

String.protoype.camelCase = (string) => {
    if (typeof string !== 'string') {
        return "";
    }
    let capitalizedString = capitalize(string);
    return capitalizedString.replace(/\ +/g, "");
};

String.protoype.snakeCase = (string) => {
    if (typeof string !== 'string') {
        return "";
    }
    string = string.toLowerCase();
    return string.replace(/ +/g, "_");
};

String.protoype.leet = (string) => {
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

Object.protoype.prop_access = (object, path) => {
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

String.protoype.verlan = (string) => {
    if (typeof string !== 'string') {
        return "";
    }
    let stringArray = [];
    for (i = 0;  i < string.length; i++){
        stringArray[i] = string.charAt(i);
    }
    return stringArray.reverse().join('');
};

String.protoype.yoda = (string) => {
    if (typeof string !== 'string') {
        return "";
    }
    let words = string.split(" ");
    return words.reverse().join(" ");
};