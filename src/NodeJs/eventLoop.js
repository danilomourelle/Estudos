import chalk from 'chalk'
/*
 * O exemplos devem ser executado individualmente e comentados aqueles que não serão usados para evitar conflito de nome
 */
// Simple event loop stack
/* console.log(chalk.yellow('Simple Queue'))

const bar = () => console.log('bar')

const baz = () => console.log('baz')

const foo = () => {
  console.log('foo')
  bar()
  baz()
}

foo() */

/* // Queuing with Message Queue
console.log(chalk.yellow('Message Queue'))
const bar = () => console.log('bar')

const baz = () => console.log('baz')
const foo = () => {
  console.log('foo')
  setTimeout(bar, 0)
  baz()
}

foo() */

// Queuing with Job Queue
console.log(chalk.yellow('Job Queue'))
const bar = () => console.log('bar')

const baz = () => console.log('baz')
const foo = () => {
  console.log('foo')
  setTimeout(bar, 0)
  new Promise((resolve, reject) =>
    resolve('should be right after baz, before bar')
  ).then(resolve => console.log(resolve))
  baz()
}

foo()