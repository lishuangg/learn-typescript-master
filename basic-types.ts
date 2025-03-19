let isDone: boolean = false

let age: number = 20
let binaryNumber: number = 0b1111

let firstName: string = 'viking'
let message: string = `Hello, ${firstName}, age is ${age}`

let u: undefined = undefined
let n: null = null

let num: number = undefined
// 在 TypeScript 中，将 undefined 赋值给一个显式声明为 number 类型的变量会导致类型错误，除非在 TypeScript 配置中 禁用了 strictNullChecks

let notSure: any = 4
notSure = 'maybe it is a string'
notSure = true

notSure.myName
notSure.getName()

// 联合类型
let numberOrString: number | string = 234
numberOrString = 'abc'

let arrOfNumbers: number[] = [1, 2, 3, 4]
arrOfNumbers.push(5)

function test() {
  console.log(arguments) // 类数组
}

// 元组Tuple  限定了类型的数组
let user: [string, number] = ['viking', 1]