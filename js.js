console.log("Task 1")

const a = {
    mame: "Slavik",
    age: 37,
    test: "test",
    sun: {
        name: "gleb",
        age: 6,
        famaly: ["father", "mather", "wife", "sun",],
    },
    method: function test() {
        return this.test;
    },


}




let chackObject = function (obj1) {
    if (Array.isArray(obj1)) {
        function chechArrey(obj1) {
            let copyArrey = [];
            for (let i = 0; i < obj1.length; i++) {
                copiArrey[i] = obj1[i];
            }
            return copyArrey;
        }
    }
    if (obj1 === null) {
        return obj1;
    }
    if (obj1 !== null || (typeof (obj1) !== "object")) {
        let notObject = obj1;
        return notObject;

    } else {

        let obj2 = {};
        for (let key in obj1) {
            if (typeof (obj1[key]) === "object") {
                obj2[key] = chackObject({}, obj1[key])
            }

            if (Array.isArray(obj1[key])) {
                chechArrey(obj1[key]);
            } else {
                obj2[key] = obj1[key];
            }
        }
        return obj2;
    }
}

let c = null;
let d = 1;
let arr = [1, 2, 3, 4];
b = chackObject(c);
console.log(b);
b = chackObject(d);
console.log(b);
b = chackObject(arr);
console.log(b);
b = chackObject(a);
console.log(b);


console.log("Task 2")

function sum() {
    let b = 0;
    return function (a) {
        b = b+a;
        console.log(b);
        return b
    }
}
let reslt = sum();
reslt(6);
reslt(4);
reslt(15);
reslt(25);









