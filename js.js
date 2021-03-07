const a = {
    mame: "Slavik",
    age: 37,
    test: "test",
    sun: {
        name: "gleb",
        age: 6,
        famaly: ["father", "mother", "wife", "sun"],
    },
    method: function test() {
        return this.test;
    }

}


let b = {};
let chackObject = function (obj2, obj1) {
    for (let key in obj1) {
        if (typeof (obj1[key]) === "object") {
            obj2[key] = chackObject({}, obj1[key])
        }
        if (Array.isArray(obj1[key])) {
            obj2[key] = [];
            for (let i = 0; i < obj1[key].length; i++) {
                obj2[key][i] = obj1[key][i];
            }
        }

        else {
            obj2[key] = obj1[key];
        }
    }
    return obj2;
}
chackObject(b, a);
console.log(b);
console.log(a.method());
console.log(b.method());


function sum() {
    let count = 0;
    let b = 0;
    return function (a) {
        count++;
        if (count === 0) {
            return b = a;

        } else {
            b = b + a
            console.log(b);
            return b;
        }
    }
}
let reslt = sum();
reslt(2);
reslt(4);
reslt(15);
reslt(25);









