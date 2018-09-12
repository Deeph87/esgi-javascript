let test1 = "Hello World";

let ucfirst = (string) => {
    let ret = string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
    return ret;
};
console.log(ucfirst(test1));

let capitalize = (string) => {
    let stringExploded = string.split(" ");
    let ret = [];
    for (let i in stringExploded) {
        ret.push(ucfirst(stringExploded[i]));
    }
    return ret.join(" ");
};
console.log(capitalize(test1));

let camelCase = (string) => {
    let capitalizedString = capitalize(string);
    return capitalizedString.replace(" ", "");
};
console.log(camelCase(test1));

let snakeCase = (string) => {
    string = string.toLowerCase();
    return string.replace(" ", "_");
};
console.log(snakeCase(test1));

let leet = (string) => {
    string = string.replace(/a+/gi, "4");
    string = string.replace(/e+/gi, "3");
    string = string.replace(/i+/gi, "1");
    string = string.replace(/o+/gi, "0");
    string = string.replace(/u+/gi, "(-)");
    string = string.replace(/y+/gi, "7");

    return string
};
console.log(leet("AnticonstitutIonNellEment"));

let prairie = {
  animal: {
      type: {
          name: "chien"
      }
  }
};

let path = "animal.type.name";

let prop_access = (object, path) => {
    let pathExploded = path.split(".");
    let currentObject,
        undefinedRet = "";


    if(path === ""){
        return object;
    }

    for (let i in pathExploded) {
        if(i === 0){
            currentObject = object[pathExploded[i]];
        }
        console.log(object, pathExploded[i], object[pathExploded[i]], currentObject);

        if (currentObject !== undefined) {
            currentObject = currentObject[pathExploded[i]];
            console.log()
            if(typeof currentObject === "string") {
                return currentObject;
            } else {
                undefinedRet = undefinedRet + "." + pathExploded[i];
            }
            //console.log(object[pathExploded[i]]);
            //ret = object[pathExploded[i]];
        } else {
            return undefinedRet + "not exist";
        }
    }
};
console.log(prop_access(prairie, path));
//console.log(prop_access(prairie, path));