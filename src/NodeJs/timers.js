// setTimeout() - Executa a função depois de um tempo (ms) uma única vez
let id = setTimeout(() => {
  // should run after 2 seconds
}, 2000)

// I changed my mind
clearTimeout(id)

// setInterval() - Executa a função repetidamente em um intervalo de tempo
id = setInterval(() => {
  // runs every 2 seconds
}, 2000)

clearInterval(id)

// * Limpando o setIntervalInternamente
const App = {
  somethingIWait: 'moving'
}
const interval = setInterval(() => {
  if (App.somethingIWait === 'arrived') {
    clearInterval(interval)
    return
  }
  // otherwise do things
}, 100)

// Recursive Timeout
/**
 * Como setInterval dispara com tempo fixo,
 * caso a execução da função seja variável,
 * a diferença entre o fim de uma execução 
 * e início da próxima pode variar e causar overlaps.
 * 
 * A solução abaixo fixa o tempo entre
 * o término de uma execução e o início da próxima.
 */
const myFunction = () => {
  // do something

  setTimeout(myFunction, 1000)
}

setTimeout(myFunction, 1000)

