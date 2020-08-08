import { ElementGet } from "./elementGet"

export class CountMain extends ElementGet {
  button: any
  select: any
  workTime: number
  intervalTime: number
  timeLoop: number
  loopCount: number
  workInterval: any
  intervalInterval: any
  countView: any
  constructor() {
    super()
    this.countView = ""
    this.workTime = 0
    this.intervalTime = 0
    this.timeLoop = 0
    this.loopCount = 0
    this.button = {
      start: super.startElement(),
      stop: super.stopElement(),
      reset: super.resetElement()
    }
    this.select = {
      workMin: super.workSelectMinElement(),
      workSec: super.workSelectSecElement(),
      intervalMin: super.intervalSelectMinElement(),
      intervalSec: super.intervalSelectSecElement(),
      loopCount: super.loopCountElement()
    }
  }


  workStart(work: number, interval: number, loop: number): void {
    console.log(work, 'start', interval)
    this.workTime = work
    this.timeLoop = loop
    this.countView = super.mainCount()
    this.workInterval = setInterval(() => {
      console.log(this.workTime)
      this.countView.innerHTML = `<p>Work</p><p>${String((this.workTime--))}</p>`
      if (this.workTime < 0) {
        clearInterval(this.workInterval)
        setTimeout(() => {
          this.intervalStart(work, interval)
        }, 2000)
      }
    }, 1000)
  }
  intervalStart(work: number, interval: number): void {
    console.log(work, 'intervalStart', interval)
    this.intervalTime = interval
    this.countView = super.mainCount()
    this.intervalInterval = setInterval(() => {
      console.log(this.intervalTime)
      this.countView.innerHTML = `<p>Interval</p><p>${String((this.intervalTime--))}</p>`
      if (this.intervalTime < 0) {
        clearInterval(this.intervalInterval)
        setTimeout(() => {
          this.loopJudge(work, interval)
        }, 2000)
      }
    }, 1000)
  }
  loopJudge(work: number, interval: number): void {
    console.log(work, 'loop', interval)
    this.loopCount++
    if (this.timeLoop === this.loopCount) {
      console.log('end')
      this.disabledButton('reset')
      this.selectTime('reset')
    } else {
      console.log('loop')
      this.workStart(work, interval, this.timeLoop)
    }
  }
  intervalStop() {
    clearInterval(this.workInterval)
    clearInterval(this.intervalInterval)
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
  selectTime(name: string): void {
    switch (name) {
      case 'start':
        this.select['workMin'].disabled = true
        this.select['workSec'].disabled = true
        this.select['intervalMin'].disabled = true
        this.select['intervalSec'].disabled = true
        this.select['loopCount'].disabled = true
        break
      case 'reset':
        this.select['workMin'].disabled = false
        this.select['workSec'].disabled = false
        this.select['intervalMin'].disabled = false
        this.select['intervalSec'].disabled = false
        this.select['loopCount'].disabled = false
        break
    }
  }
}
