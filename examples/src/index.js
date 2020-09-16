// 或编译后的也可以
// import Stack from '../../lib/Stack'

// 直接引入原文件
import { Stack } from '../../src/Stack'

var stack = new Stack()
for (var i = 0; i < 5; i++) {
    stack.push(i)
}
console.log('isEmpty: ', stack.isEmpty)
// isEmpty:  false

console.log('size: ', stack.size)
// size:  5

console.log(stack.toString())
// 0 1 2 3 4

console.log(`pop: `, stack.pop())
// pop:  4

stack.traverse((ele,index)=>{
    console.log(`Traversing-Stack:${index}: ${ele}`)
})
// Traversing-Stack:0: 0
// Traversing-Stack:1: 1
// Traversing-Stack:2: 2
// Traversing-Stack:3: 3

stack.traverse((ele,index)=>{
    console.log(`Traversing-Stack:${index}: ${ele}`)
}, true)
// Traversing-Stack:3: 3
// Traversing-Stack:2: 2
// Traversing-Stack:1: 1
// Traversing-Stack:0: 0

console.log(`claer: `, stack.clear())
// claer:  undefined

console.log('isEmpty: ', stack.isEmpty)
// isEmpty:  true

console.log('size: ', stack.size)
// size:  0
