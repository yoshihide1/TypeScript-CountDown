import * as c3 from 'c3'

export const chart = c3.generate({
  bindto: '#chart',
  data: {
    type: 'donut',
    columns: [
      ['OK', 58],
      ['NO', 30],
      ['??', 12]
    ]
  },
  donut: {
    title: 'TypeScriptいいね！'
  }
})