const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let lineCount = 0
let counter = 0

rl.on('line', input => {
    if(lineCount === 0)
        lineCount = parseInt(input,10)
    else{
        let num = parseInt(input,10)
        if(num % 2 === 0)
            console.log(`${num} is even`)
        else
            console.log(`${num} is odd`)
        counter++
        if(counter === lineCount)
            rl.close()
    }
})