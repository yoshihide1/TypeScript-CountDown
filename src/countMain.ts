export class CountMain {
  super(){}
  constructor(public workTime: number, public intervalTime: number, public timeLoop: number, public loopCount: number = 0){
    this.workStart()
  }

  workStart() {
    console.log('workStart')
    const  work = setInterval(() => {
      this.workTime--
      console.log(this.workTime)
      if (this.workTime === 0) {
        this.intervalStart()
        clearInterval(work)
      }
    }, 1000)
  }
  intervalStart() {
    console.log('intervalStart')
   const interval = setInterval(() => {
      this.intervalTime--
      console.log(this.intervalTime)
      if (this.intervalTime === 0) {
        this.loopJudge()
        clearInterval(interval)
      }
    }, 1000)
  }
  loopJudge() {
    this.loopCount++
    console.log(this.timeLoop)
    if (this.timeLoop == this.loopCount) {
      console.log('end')
    } else {
      console.log('loop')
      this.workStart()
    }

  }
  }

new CountMain(5, 5, 2)