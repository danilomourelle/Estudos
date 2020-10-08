import chalk from 'chalk'
import ProgressBar from 'progress'

//console format specifier
console.log('My %s has %d years', 'cat', 2.5)
console.log('My %s has %i years and eats %d pounds', 'cat', 2.5, 3.65)
console.log('%o', Number)
/* 
%s format a variable as a string
%d format a variable as a number
%i format a variable as its integer part only
%o format a variable as an object 
*/

//console.count
const oranges = ['orange', 'orange']
const apples = ['just one apple']
oranges.forEach(fruit => {
  console.count(fruit)
})
apples.forEach(fruit => {
  console.count(fruit)
})

//console.trace()
const function2 = () => console.trace()
const function1 = () => function2()
function1()

//console time
const doSomething = () => console.log('test')
const measureDoingSomething = () => {
  console.time('label1')
  //do something, and measure the time it takes
  doSomething()
  console.timeEnd('label1')
}
measureDoingSomething()

//color
console.log('\x1b[33m%s\x1b[0m', 'hi!')
console.log(chalk.yellow('hi'))

//progress bar
const bar = new ProgressBar(':percent', { total: 10 })
const timer = setInterval(() => {
  bar.tick()
  if (bar.complete) {
    clearInterval(timer)
  }
}, 1000)