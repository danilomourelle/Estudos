import readline from 'readline'
import chalk from 'chalk'

const readLineInstance = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

readLineInstance.question("What's is your name: ", name => {
  console.log(`Hi ${chalk.red(name)}!`)
  readLineInstance.close()
})