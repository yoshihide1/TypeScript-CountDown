export class CountMain {
  super() { }
  constructor(private workTime: number, private intervalTime: number, private timeLoop: number, private loopCount: number = 0) {
    this.workStart(this.workTime, this.intervalTime)
  }

  workStart(work: number, interval: number): void {
    console.log('workStart')
    this.workTime = work
    const workInterval = setInterval(() => {
      console.log(this.workTime)
      this.workTime--
      if (this.workTime === 0) {
        clearInterval(workInterval)
        setTimeout(() => {
          this.intervalStart(work, interval)
        }, 2000)
      }
    }, 1000)
  }
  intervalStart(work: number, interval: number): void {
    console.log('intervalStart')
    this.intervalTime = interval
    const intervalTime = setInterval(() => {
      console.log(this.intervalTime)
      this.intervalTime--
      if (this.intervalTime === 0) {
        clearInterval(intervalTime)
        setTimeout(() => {
          this.loopJudge(work, interval)
        }, 2000)
      }
    }, 1000)
  }
  loopJudge(work: number, interval: number): void {
    this.loopCount++
    console.log(this.timeLoop)
    if (this.timeLoop == this.loopCount) {
      console.log('end')
    } else {
      console.log('loop')
      this.workStart(work, interval)
    }
  }
}

new CountMain(10, 10, 2)