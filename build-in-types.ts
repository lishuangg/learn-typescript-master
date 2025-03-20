// global objects
const a: Array<number> = [1, 2, 3]
const date = new Date()
date.getTime()
const reg = /abc/
reg.test('abc')

// build-in types
Math.pow(2, 3)

// DOM and BOM
let div = document.createElement('div')
let allList = document.querySelectorAll('li')
allList.keys();

document.addEventListener('click', function (e) {
  e.preventDefault()
})

// utility Types
interface IPerson {
  name: string
  age: number
}
let user:IPerson = {name: 'zhangsan', age: 18}
type IPartial = Partial<IPerson>;  // Partial<T> 将T中所有属性设置为可选
let partialUser:IPartial = {name: 'lisi'}
type IOmit = Omit<IPerson, 'name'>;   // Omit<T, K> 从T中忽略K属性
let omitUser:IOmit = {age: 18}