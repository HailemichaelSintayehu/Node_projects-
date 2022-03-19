const EventEmitter = require("events");
const { endsWith } = require("lodash");


const customEmiter = new EventEmitter();

customEmiter.on('start',(started,end) =>{
    console.log(`data recieved ${started} to ${end}`)
})
customEmiter.emit('start',23,24)
customEmiter.on('start',(started,end) =>{
    console.log(`some other logic here ${started} to ${end}`)
})