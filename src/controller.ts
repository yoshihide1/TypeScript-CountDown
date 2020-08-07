import { CountStart } from "./countStart"
export class Controller extends CountStart {
  button: any
  constructor() {
    super()
    this.button = {
      start: super.startElement(),
      stop: super.stopElement(),
      reset: super.resetElement()
    }
  }
  start(): void {
    this.button['start'].addEventListener('click', () => {
      super.disabledButton('start')
      super.selectTime('start')
      const mainCount = Number(super.mainCount().innerText)
      const workSecJudge = Number(super.getWork().innerText)
      const intervalSecJudge = Number(super.getInterval().innerText)
      if (workSecJudge == 0 && intervalSecJudge == 0) {
        const workSec = super.setWork()
        const intervalSec = super.setInterval()
        this.countDown(workSec, intervalSec)
      } else if (mainCount > 0) {

      } else {
        this.countDown(workSecJudge, intervalSecJudge)
      }
    })
  }
  stop(): void {
    this.button['stop'].disabled = true
    this.button['stop'].addEventListener('click', () => {
      super.disabledButton('stop')
      clearInterval(this.work)
      clearInterval(this.interval)
    })
  }
  reset(): void {
    this.button['reset'].disabled = true
    this.button['reset'].addEventListener('click', () => {
      super.disabledButton('reset')
      super.selectTime('reset')
      super.getWork().innerText = "0"
      super.getInterval().innerText = "0"
      super.mainCount().innerText = "0"
    })
  }

}
