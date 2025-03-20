interface Person {
  readonly id: number;  // 只读属性  仅初始化的时候可以赋值
  name: string;
  age?: number;
}
let viking: Person = {
  id: 1234,
  name: 'viking',
}
