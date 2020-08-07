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
  countDown(count: number, interval: number): void {
    const workTime = super.getWork()
    const intervalTime = super.getInterval()
    const mainCount = super.mainCount()
    intervalTime.innerHTML = String(interval)
    workTime.innerHTML = String(count)
    this.work = setInterval(() => {
      if (count >= 0) {
        mainCount.innerHTML = `<p>Work</p><p>${String((count--))}</p>`
      } else {
        clearInterval(this.work)
        this.intervalCountDown(interval)
      }
    }, 1000)
  }
  intervalCountDown(interval: number): void {
    const loopNum = Number(super.setLoop())
    const mainCount = super.mainCount()

    this.num++
    this.interval = setInterval(() => {
      mainCount.innerHTML = `<p>Interval</p><p>${String((interval--))}</p>`
      if (interval <= -1 && this.num >= loopNum) {
        this.num = 0
        clearInterval(this.interval)
        this.button['start'].disabled = false
        this.button['stop'].disabled = true
        mainCount.innerHTML = `<p>おわり</p>`
      } else if (interval <= -1) {
        clearInterval(this.interval)
        setTimeout(() => {
          this.loop('loop')
        }, 1000)
      }
    }, 1000)
  }
  disabledButton(name: string): void {
    switch (name) {
      case 'start':
        this.button['start'].disabled = true
        this.button['stop'].disabled = false
        this.button['reset'].disabled = true
        break
      case 'stop':
        this.button['start'].disabled = false
        this.button['reset'].disabled = false
        this.button['stop'].disabled = true
        break
      case 'reset':
        this.button['start'].disabled = false
        this.button['stop'].disabled = true
        break
    }
  }
}
