import { CountMain } from "./countMain"
import { SetCountView } from "./setCountView"
export class Controller extends CountMain {
  button: any
  countMain: any
  constructor() {
    super()
    this.button['start'].addEventListener('click', this.start.bind(this))
    this.button['stop'].addEventListener('click', this.stop.bind(this))
    this.button['reset'].addEventListener('click', this.reset.bind(this))
  }
  start(): void {
    console.log('start')
    const work = super.setWork()
    const interval = super.setInterval()
    const loop = super.setLoop()
    if (work === 0 && interval === 0) {
      alert('時間を指定して下さい')
      return
    } else {
      super.disabledButton('start')
      super.selectTime('start')
      new SetCountView()
      super.workStart(work, interval, loop)
    }
  }
  stop(): void {
    console.log('stop')
    super.disabledButton('stop')
    super.selectTime('reset')
    super.intervalStop()
  }
  reset(): void {
    console.log('reset')
    super.disabledButton('reset')
    super.selectTime('reset')
    super.getWork().innerText = "0"
    super.getInterval().innerText = "0"
    super.mainCount().innerText = "0"
  }

}
