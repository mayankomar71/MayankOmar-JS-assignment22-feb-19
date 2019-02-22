// Created a function to check datatype of the given parameter
function check_datatype(params) {
    //Condition to check if parameter is null
    if (params === null) {
        console.log('Type : NULL')
        console.log('value: ', params)
    }
    //Condition to check if parameter is undefined
    else if (typeof params === 'undefined') {
        console.log('Type : Undefined')
        console.log('value: ', params)
    }
    //Condition to check if parameter is String
    else if (typeof params === 'string' || params instanceof String) {
        console.log('Type : String')
        console.log('value: ', params)
    }
    //Condition to check if parameter is Number
    else if (typeof params === 'number' && isFinite(params)) {
        console.log('Type : Number')
        console.log('value: ', params)
    }
    //Condition to check if parameter is Array
    else if (params && typeof params === 'object' && typeof params[0] != 'object' && params.constructor === Array) {
        console.log('Type : Array')
        params.map((x, i) => {
            console.log(x);
        })
    }
    //Condition to check if parameter is object
    else if (params && typeof params === 'object' && params.constructor === Object) {
        console.log('Type : Object')
        let key = Object.keys(params);
        let val = Object.values(params);
        key.map((x, i) => {
            console.log(x + ":" + val[i]);
        })
    }
    //Condition to check if parameter is Array of objects
    else if (params && typeof params === 'object' && typeof params[0] === 'object' && params.constructor === Array) {
        console.log('Type : Array of Object')
        params.map((x, i) => {
            console.log(x);
        })

    }
    //Condition to check if parameter is Boolean

    else if (params && typeof params === 'boolean') {
        console.log('Type : Boolean')
        console.log('value: ', params)
    }
    //Condition to check if parameter is NaN

    else if (isNaN(params) == true) {
        console.log("Type:", "NaN");
        console.log("value", "NaN");
    }

}
//Calling functions on the different values such as passing object ,Arrayof objects,null value etc. 

check_datatype({ "a": 2, "f": 5, "c": 10 })
console.log("\n");
check_datatype([{ "a": 2, "b": 5 }, { "c": 3, "d": 4 }])
console.log("\n");
check_datatype(24);
console.log("\n");
check_datatype("Hello");
console.log("\n");
check_datatype(0 / 0);
console.log("\n");
check_datatype();
console.log("\n");
check_datatype([1, 32, 34, 56]);
console.log("\n");
check_datatype(true);
