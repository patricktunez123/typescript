console.log('this is the test')

const a = 8999

console.log('this is the variable testing', a)

let str = 'this is a string'
// str =  5 // imposible
str = 'an other string'

const calc = (diameter: number) => {
    return diameter * Math.PI
}

console.log('THIS IS THE ANS', calc(50))

// ARRAYS AND OBJECTS
//====================

let names = ['name1', 'name2', 6]
names.push('name3')
names.push(4)
// names.push(false) // cant push boolean
console.log(names)

let strArr: string[] = []
let mixed: (string | number)[] = []
console.log(mixed.push('ok', 89, 'ddd'))
console.log(strArr.push('pushed', 'dddd'))
console.log(mixed[0])

//typs

let stri: string;
let num: number;
let bol: boolean
let theArr: string[] = [];
let theArr2: number[] = [];
let themixed: (string | number | boolean)[] = []

stri = 'dfsdf';
num = 4
bol = true

themixed.push(0, 0, 'sdsd', 6865, true)
theArr2.push(3434)
theArr.push('std')

let obj: object
// obj = 'dddd'

obj = {
    name: 'name',
    age: 45,
}

console.log('obj', obj)

console.log('obj', obj)