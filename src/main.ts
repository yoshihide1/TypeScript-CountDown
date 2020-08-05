import {Item} from './item'
const elem = document.getElementById('output')
const aBook = new Item('TypeScript', 2980)
aBook.say(elem)


import * as c3 from 'c3'

const chart = c3.generate({
  bindto: '#chart',
  data: {
    type: 'donut',
    columns: [
      ['OK', 58],
      ['NO', 42],
    ]
  },
  donut: {
    title: 'TypeScriptいいね！'
  }
})

setTimeout(() => {
  chart.load({
    columns:[
      ['OK', 30],
      ['NO', 30],
      ['最高', 30]
    ]
  })
}, 3000)
setTimeout(() => {
  chart.unload({
    ids: '最高'
  })
}, 5000)