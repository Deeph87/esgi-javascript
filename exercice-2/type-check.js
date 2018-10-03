function type_check_v1(value, type){
    // console.log(type === "array");
    // console.log(Array.isArray(value));
    return type === "array" && Array.isArray(value) || typeof value === type;
}

console.log(type_check_v1(4, "string"));

function type_check_v2(item, obj){
    if (typeof obj.type !== "undefined" && !type_check_v1(item, obj.type)) {
        return false;
    }

    if (typeof obj.value !== "undefined" && obj.value !== item) {
        return false;
    }

    return typeof obj.enum === "object" && obj.enum.includes(item) || typeof obj.enum !== "undefined" && obj.enum === item;
}

var obj = {
    type: "string",
    value: "maison",
    enum: ["tutu", "toto"]
};

console.log(type_check_v2("maison", obj));

var check = {
    type: "object",
    properties: {
        prop1: {
            type: "number"
        },
        prop2: {
            type: "string",
            enum: [
                "val1",
                "val2"
            ]
        },
        prop3: {
            type: "object",
            properties: {
                prop31: "number"
            }
        },
        prop4: {
            type: "array",
            properties: [
                "boolean"
            ]
        }
    }
};

var object = {
    prop1: {
        value: 4,
        type: "number",
        enum: [4, 8]
    },
    prop2: {
        value: "tamer",
        type: "string",
        enum: ["tamer", "tonper"]
    },
    prop3: {
        value: {
            prop31: {
                value: 7,
                type: "number",
                enum: [7, 0]
            }
        },
        type: "object",
        enum: [
            {
                prop31: {
                    value: 7,
                    type: "number",
                    enum: [7, 0]
                }
            },
            {
                prop31: {
                    value: 0,
                    type: "number",
                    enum: [7, 0]
                }
            }]
    },
    prop4: {
        value: [9],
        type: "array",
        enum: [[9], [4]]
    },

};

// function type_check(object) {
//     for (var i in object) {
//         type_check_v2(object[i])
//     }
// }