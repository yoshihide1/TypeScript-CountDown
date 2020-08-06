import { NumberGet } from './numberGet'
export class CountStart extends NumberGet {
  work: any
  interval: any
  num: number
  button: any
  constructor() {
    super()
    this.work = 0
    this.interval = 0
    this.num = 0
    this.button = {
      start: super.startElement(),
      stop: super.stopElement(),
      reset: super.resetElement()
    }
  }
  loop(loop?: string): void {
    if (loop) {
      console.log('loop')
      const workSec = super.setWork()
      const intervalSec = super.setInterval()
      this.countDown(workSec, intervalSec)
    }

  }
  start(): void {
    this.button['start'].addEventListener('click', () => {
      const workSecJudge = Number(super.getWork().innerText)
      const intervalSecJudge = Number(super.getInterval().innerText)
      this.button['start'].disabled = true
      this.button['stop'].disabled = false
      this.button['reset'].disabled = true
      if (workSecJudge == 0 && intervalSecJudge == 0) {
        const workSec = super.setWork()
        const intervalSec = super.setInterval()
        this.countDown(workSec, intervalSec)
      } else {
        this.countDown(workSecJudge, intervalSecJudge)
      }
    })
  }
  stop(): void {
    this.button['stop'].disabled = true
    this.button['stop'].addEventListener('click', () => {
      this.button['start'].disabled = false
      this.button['reset'].disabled = false
      this.button['stop'].disabled = true
      clearInterval(this.work)
      clearInterval(this.interval)
    })
  }
  reset(): void {
    this.button['reset'].disabled = true
    this.button['reset'].addEventListener('click', () => {
      this.button['start'].disabled = false
      super.getWork().innerText = "0"
      super.getInterval().innerText = "0"
    })
  }
  countDown(count: number, interval: number): void {
    const workTime = super.getWork()
    const intervalTime = super.getInterval()
    const mainCount = super.mainCount()
    intervalTime.innerHTML = String(interval)
    workTime.innerHTML = String(count)
    this.work = setInterval(() => {
      if (count > 0) {
        // workTime.innerHTML = String((count--) - 1)
        mainCount.innerHTML = `<p>Work</p><p>${String((count--) - 1)}</p>`
      } else {
        console.log('Interval')
        this.intervalCountDown(interval)
        clearInterval(this.work)
      }
    }, 1000)
  }
  intervalCountDown(interval: number): void {
    const loopNum = Number(super.setLoop())
    const intervalTime = this.getInterval()
    const mainCount = super.mainCount()

    this.num++
    this.interval = setInterval(() => {
      // intervalTime.innerHTML = String((interval--) - 1)
      mainCount.innerHTML = `<p>Interval</p><p>${String((interval--) - 1)}</p>`

      if (interval === 0 && this.num >= loopNum) {
        this.num = 0
        console.log('end')
        clearInterval(this.interval)
        this.button['start'].disabled = false
        this.button['stop'].disabled = true
        mainCount.innerHTML = `<p>おわり</p>`
      } else if (interval === 0) {
        clearInterval(this.interval)
        this.loop('loop')
      }
    }, 1000)
  }
}
