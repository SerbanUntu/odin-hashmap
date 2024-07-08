import { HashMap } from './hashmap.mjs'

let map = new HashMap()
map.set('something', 123)
map.set('something', 234)
map.set('one', 5)
console.log(map.get('two')) // null
console.log(map.get('something')) // 234
