import { ElementGet } from "./elementGet"

export class CountMain {
  startButton: HTMLButtonElement = ElementGet.startElement()
  stopButton: HTMLButtonElement = ElementGet.stopElement()
  resetButton: HTMLButtonElement = ElementGet.resetElement()
  loopCount: number = 0
  workTime: number = 0
  intervalTime: number = 0
  timeLoop: number = 0
  countView: HTMLElement = ElementGet.mainCount()
  workCount?: NodeJS.Timeout
  intervalCount?: NodeJS.Timeout


  workStart(work: number, interval: number, loop: number): void {
    console.log(work, 'start', interval)
    this.workTime = work
    this.timeLoop = loop
    this.workCount = setInterval(() => {
      console.log(this.workTime)
      this.countView.innerHTML = `<p>Work</p><p>${String((this.workTime--))}</p>`
      if (this.workTime < 0) {
        clearInterval(this.workCount!)
        setTimeout(() => {
          this.intervalStart(work, interval)
        }, 2000)
      }
    }, 1000)
  }
  intervalStart(work: number, interval: number): void {
    console.log(work, 'intervalStart', interval)
    this.intervalTime = interval
    this.intervalCount = setInterval(() => {
      console.log(this.intervalTime)
      this.countView.innerHTML = `<p>Interval</p><p>${String((this.intervalTime--))}</p>`
      if (this.intervalTime < 0) {
        clearInterval(this.intervalCount!)
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
      this.selectTime()
    } else {
      console.log('loop')
      this.workStart(work, interval, this.timeLoop)
    }
  }
  intervalStop() {
    clearInterval(this.workCount!)
    clearInterval(this.intervalCount!)
  }
  disabledButton(name: string): void {
    if (name === 'start') {
      this.startButton.disabled = true
      this.stopButton.disabled = false
      this.resetButton.disabled = true
    } else {
      this.startButton.disabled = false
      this.stopButton.disabled = true
      this.resetButton.disabled = false
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
