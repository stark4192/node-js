const { readFile, writeFile } = require('fs');

readFile('./content/first.txt', 'utf8', (err, result1) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(`${result1}`)
   const first = result1
    readFile('./content/second.txt', 'utf8', (err, result2) => {
        if (err) {
            console.log(err)
            return
        }
        console.log(`${result2}`)

        const second = result2
        writeFile('./content/result.txt',
            `here is the result : |${first}|,|${second}|`,
            (err, result) => {
                if (err) {
                    console.log(err)
                    return
                }
                console.log(result)
            })
        console.log('aaaa')
    })
    console.log('bbbbb')
    
})
console.log('reading file.........')
