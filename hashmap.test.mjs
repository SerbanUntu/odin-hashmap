import { HashMap } from './hashmap.mjs'

let map = new HashMap()
map.set('something', 123)
map.set('something', 234)
map.set('one', 5)
map.set('five', 5)

console.log(map.get('two')) // null
console.log(map.get('something')) // 234
console.log(map.remove('four')) // false
console.log(map.remove('five')) // true
console.log(map.has('one')) // true
console.log(map.has('five')) // false
console.log(map.length()) // 2
console.log(map.keys()) // [ 'one', 'something' ]
console.log(map.values()) // [ 5, 234 ]
console.log(map.entries()) // [ [ 'one', 5 ], [ 'something', 234 ] ]
