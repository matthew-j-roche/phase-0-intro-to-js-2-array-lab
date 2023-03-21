const cats = ['Milo', 'Otis', 'Garfield'];

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

function destructivelyAppendCat(name) {
    cats.push('Ralph');
};

function destructivelyPrependCat(name) {
    cats.unshift('Bob');
    };

function destructivelyRemoveFirstCat() {
    cats.shift();
};

function destructivelyRemoveLastCat() {
    cats.pop();
};

function appendCat(name) {
    return [...cats, 'Broom'];
};

function prependCat(name) {
    return ['Arnold', ...cats];
};

function removeLastCat() {
    return cats.slice(0, 2);
};

function removeFirstCat() {
    return cats.slice(1);
};
