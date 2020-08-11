import { CountMain } from "./countMain"
import { SetCountView } from "./setCountView"
import { ElementGet } from "./elementGet"
export class Controller extends CountMain {
  constructor() {
    super()
    this.startButton.addEventListener('click', this.start.bind(this))
    this.stopButton.addEventListener('click', this.stop.bind(this))
    this.resetButton.addEventListener('click', this.reset.bind(this))
  }
  start(): void {
    const work = ElementGet.setWork()
    const interval = ElementGet.setInterval()
    const loop = ElementGet.setLoop()
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
    super.disabledButton('stop')
    super.selectTime()
    super.intervalStop()
  }
  reset(): void {
    super.disabledButton('reset')
    super.selectTime()
    ElementGet.getWork().innerText = "0"
    ElementGet.getInterval().innerText = "0"
    ElementGet.mainCount().innerText = "0"
  }
}
