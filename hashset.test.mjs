import { HashSet } from './hashset.mjs'

const test = new HashSet()
test.add('apple')
test.add('banana')
test.add('carrot')
test.add('dog')
test.add('elephant')
test.add('frog')
test.add('grape')
test.add('hat')
test.add('ice cream')
test.add('jacket')
test.add('kite')
test.add('lion')
test.add('moon')

console.log(test.remove('hat')) // true
console.log(test.remove('sky')) // false
console.log(test.has('grape')) // true
console.log(test.has('hat')) // false
console.log(test.length()) // 12
console.log(test.entries()) // [ 'moon', 'carrot', 'grape', 'jacket', 'kite', 'elephant', 'apple', 'lion', 'frog', 'banana', 'ice cream', 'dog' ]

test.clear()
console.log(test.length()) // 0
