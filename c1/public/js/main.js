"use strict";
console.log('this is the test');
var a = 8999;
console.log('this is the variable testing', a);
var str = 'this is a string';
// str =  5 // imposible
str = 'an other string';
var calc = function (diameter) {
    return diameter * Math.PI;
};
console.log('THIS IS THE ANS', calc(50));
// ARRAYS AND OBJECTS
//====================
var names = ['name1', 'name2', 6];
names.push('name3');
names.push(4);
// names.push(false) // cant push boolean
console.log(names);
var strArr = [];
var mixed = [];
console.log(mixed.push('ok', 89, 'ddd'));
console.log(strArr.push('pushed', 'dddd'));
console.log(mixed[0]);
//typs
var stri;
var num;
var bol;
var theArr = [];
var theArr2 = [];
var themixed = [];
stri = 'dfsdf';
num = 4;
bol = true;
themixed.push(0, 0, 'sdsd', 6865, true);
theArr2.push(3434);
theArr.push('std');
var obj;
// obj = 'dddd'
obj = {
    name: 'name',
    age: 45,
};
console.log('obj', obj);
console.log('obj', obj);
