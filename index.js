const cats = ["Milo", "Otis", "Garfield"];

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

function destructivelyAppendCat(name) {
    cats.push(name);
}
destructivelyAppendCat("Frank");

function destructivelyPrependCat(name) {
    cats.unshift(name);
}
destructivelyPrependCat("Bob");

function destructivelyRemoveLastCat() {
    cats.pop();
}
destructivelyRemoveLastCat();

function destructivelyRemoveFirstCat() {
    cats.shift();
}
destructivelyRemoveFirstCat();

function appendCat(name) {
    var newArray1 = cats.slice();
    newArray1.push(name);
    return newArray1;
}

function prependCat(name){
    var newArray2 = cats.slice();
    newArray2.unshift(name)
    return newArray2
}

function removeLastCat(name) {
    var newArray3 = cats.slice();
    newArray3.pop(name);
    return newArray3;
}

function removeFirstCat(name){
    var newerArray4 = cats.slice();
    newerArray4.shift(name)
    return newerArray4
}
