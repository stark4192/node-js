const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('start', (name,id) => {
    console.log(`${name} started with id ${id}`)
})

customEmitter.on('start', () => {
    console.log('some logic here')
})

customEmitter.emit('start','john',34)