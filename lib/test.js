const test = require('tap').test;
const randomFruit = require("../index");

test("test", function(t){
    const fruit = randomFruit.random();
    t.is(typeof fruit, 'string');
    t.ok(fruit.length > 0);

    const fruitList = randomFruit.list;
    t.is(typeof fruitList, 'object');

    t.end();
});