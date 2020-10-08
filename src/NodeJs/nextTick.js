let count = 0
const bar = () => {count++ ; console.trace('bar', count)}

const baz = () => console.trace('baz', count)
const baw = () => console.trace('baw', count)

const foo = () => {
  console.trace('foo', count)
  setTimeout(baw, 0)
  process.nextTick(bar)
  new Promise((resolve, reject) =>
    resolve('should be right after baz, before bar')
  ).then(resolve => console.trace(resolve, count))
  baz()
}

foo()

const bar2 = () => {count++ ; console.trace('bar2', count)}

const baz2 = () => console.trace('baz2', count)
const baw2 = () => console.trace('baw2', count)

const foo2 = () => {
  console.trace('foo2', count)
  setImmediate(baw2)
  process.nextTick(bar2)
  new Promise((resolve, reject) =>
    resolve('should be right after baz2, before bar2')
  ).then(resolve => console.trace(resolve, count))
  baz2()
}

foo2()

process.nextTick(() => count++)