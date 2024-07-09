import { HashMap } from './hashmap.mjs'

const test = new HashMap()
test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')
test.set('dog', 'blue')
test.set('carrot', 'green')
test.set('kite', 'red')
test.set('frog', 'yellow')
test.set('moon', 'silver')
test.set('hat', 'grey')
test.set('jacket', 'black')
test.set('banana', 'green')

console.log(test.get('kite')) // red
console.log(test.has('banana')) // true
console.log(test.has('bird')) // false
console.log(test.remove('moon')) // true
console.log(test.remove('sky')) // false
console.log(test.length()) // 12
console.log(test.keys()) // [ 'carrot', 'grape', 'jacket', 'kite', 'elephant', 'apple', 'hat', 'lion', 'frog', 'banana', 'ice cream', 'dog' ]
console.log(test.values()) // [ 'green', 'purple', 'black', 'red', 'gray', 'red', 'grey', 'golden', 'yellow', 'green', 'white', 'blue' ]
console.log(test.entries()) // [ [ 'carrot', 'green' ], [ 'grape', 'purple' ], [ 'jacket', 'black' ], [ 'kite', 'red' ], [ 'elephant', 'gray' ], [ 'apple', 'red' ], [ 'hat', 'grey' ], [ 'lion', 'golden' ], [ 'frog', 'yellow' ], [ 'banana', 'green' ], [ 'ice cream', 'white' ], [ 'dog', 'blue' ] ]

test.clear()
console.log(test.length()) // 0
