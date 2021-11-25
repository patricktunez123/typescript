let sum: number = 0
const add = (a: number, b: number, c?: number) => {
    return sum = a + b
}

add(5, 60, 70)

console.log(sum)


const minus = (a: number, b: number, c?: number): number => {
    return a - b
}

const res = minus(5, 60)

console.log('the res is', res)