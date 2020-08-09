import { ElementGet } from "./elementGet"

export class CountMain {
  startButton: HTMLButtonElement
  stopButton: HTMLButtonElement
  resetButton: HTMLButtonElement
  loopCount: number
  workTime: number
  intervalTime: number
  timeLoop: number
  workInterval: any
  intervalInterval: any
  countView: any
  constructor() {
    this.countView = ""
    this.workTime = 0
    this.intervalTime = 0
    this.timeLoop = 0
    this.loopCount = 0
    this.startButton = ElementGet.startElement(),
      this.stopButton = ElementGet.stopElement(),
      this.resetButton = ElementGet.resetElement()
  }


  workStart(work: number, interval: number, loop: number): void {
    console.log(work, 'start', interval)
    this.workTime = work
    this.timeLoop = loop
    this.countView = ElementGet.mainCount()
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
    this.countView = ElementGet.mainCount()
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
        this.startButton.disabled = true
        this.stopButton.disabled = false
        this.resetButton.disabled = true
        break
      case 'stop':
        this.startButton.disabled = false
        this.resetButton.disabled = false
        this.stopButton.disabled = true
        break
      case 'reset':
        this.startButton.disabled = false
        this.stopButton.disabled = true
        break
    }
  }
  selectTime(action?: string): void {
    const select = ElementGet.selectTimeElement()
    select.forEach(element => {
      if (action) {
        element.disabled = true
      } else {
        element.disabled = false
      }
    })
  }
}
