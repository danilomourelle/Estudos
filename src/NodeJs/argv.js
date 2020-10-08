//all values returned
/* Os dois primeiros valores do array serão sempre o caminho absoluto para onde está o node e o caminho absoluto para onde está o arquivo que está sendo executado */
process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`)
})

//removing node path and file path
const args = process.argv.slice(2)

args.forEach((val, index) => {
  console.log(`${index}: ${val}`)
})

