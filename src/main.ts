class NumberSet {
  setMinWork(): void {
    const count = document.getElementById('set__work__min')!
    for (let i = 0; i <= 10; i++) {
      const option = document.createElement('option')
      option.text = String(i)
      option.value = String(i)
      count.appendChild(option)
    }
  }
  setMinInterval(): void {
    const count = document.getElementById('set__interval__min')!
    for (let i = 0; i <= 5; i++) {
      const option = document.createElement('option')
      option.text = String(i)
      option.value = String(i)
      count.appendChild(option)
    }
  }

  setSecWork(): void {
    const count = document.getElementById('set__work__sec')!
    for (let i = 0; i <= 50; i += 10) {
      const option = document.createElement('option')
      option.text = String(i)
      option.value = String(i)
      count.appendChild(option)
    }
  }
  setSecInterval(): void {
    const count = document.getElementById('set__interval__sec')!
    for (let i = 0; i <= 50; i += 10) {
      const option = document.createElement('option')
      option.text = String(i)
      option.value = String(i)
      count.appendChild(option)
    }
  }
}
const selectNumber = new NumberSet
selectNumber.setSecInterval()
selectNumber.setMinInterval()
selectNumber.setSecWork()
selectNumber.setMinWork()


abstract class NumberGet {

  setWork(): number {
    let min: string | number = (<HTMLInputElement>document.getElementById('set__work__min')).value
    let sec: string | number = (<HTMLInputElement>document.getElementById('set__work__sec')).value
    min = Number(min) * 60
    sec = Number(sec)
    return min + sec
  }
  setInterval(): number {
    let min: string | number = (<HTMLInputElement>document.getElementById('set__interval__min')).value
    let sec: string | number = (<HTMLInputElement>document.getElementById('set__interval__sec')).value
    min = Number(min) * 60
    sec = Number(sec)
    return min + sec
  }
  getWork(): HTMLElement {
    const workTime = <HTMLElement>document.getElementById('count__down__work')
    return workTime
  }
  getInterval(): HTMLElement {
    const intervalTime = <HTMLElement>document.getElementById('count__down__interval')
    return intervalTime
  }
  startElement(): HTMLElement {
    const startButton = <HTMLElement | any>document.getElementById('count__start')
    return startButton
  }
  stopElement(): HTMLElement {
    const stopButton = <HTMLElement>document.getElementById('count__stop')
    return stopButton
  }
  resetElement(): HTMLElement {
    const resetButton = <HTMLElement>document.getElementById('count__reset')
    return resetButton
  }


}

class CountStart extends NumberGet {
  work: any
  interval: any
  constructor() {
    super()
    this.work = 0
    this.interval = 0

  }

  start(): void {
    const startButton: any = numberGet.startElement()
    startButton.addEventListener('click', () => {
      const workSecJudge = Number(numberGet.getWork().innerText)
      const intervalSecJudge = Number(numberGet.getInterval().innerText)
      startButton.disabled = true
      if (workSecJudge == 0 && intervalSecJudge == 0) {
        const workSec = numberGet.setWork()
        const intervalSec = numberGet.setInterval()
        this.countDown(workSec, intervalSec)
      } else {
        this.countDown(workSecJudge, intervalSecJudge)
      }
    })
  }
  // stop(): void {
  //   const countStop = numberGet.stopElement()
  //   const startButton: any = numberGet.startElement()
  //   countStop.addEventListener('click', () => {
  //     startButton.disabled = false
  //     clearInterval(this.work)
  //     clearInterval(this.interval)
  //   })
  // }
  reset(): void {
    const countReset = numberGet.resetElement()
    const startButton: any = numberGet.startElement()
    countReset.addEventListener('click', () => {
      console.log()
      startButton.disabled = false


    })
  }

  countDown(count: number, interval: number): void {
    const workTime = numberGet.getWork()
    const intervalTime = numberGet.getInterval()
    intervalTime.innerHTML = String(interval)
    workTime.innerHTML = String(count)
    this.work = setInterval(() => {
      if (count > 0) {
        workTime.innerHTML = String((count--) - 1)
        console.log(count)
      }
      if (count <= 0) {
        console.log('Interval')
        this.intervalCountDown(count, interval)
        clearInterval(this.work)
      }
    }, 1000)
  }
  intervalCountDown(count: number, interval: number): void {
    console.log(count)
    const intervalTime = this.getInterval()
    this.interval = setInterval(() => {
      intervalTime.innerHTML = String((interval--) - 1)
      console.log(interval)
      if (interval === 0) {
        console.log('Start')
        clearInterval(this.interval)
        const startButton: any = numberGet.startElement()
        startButton.disabled = false
      }
    }, 1000)
  }
}
const numberGet = new CountStart()
numberGet.start()
numberGet.stop()
numberGet.reset()




// function sample(num1: number, num2: number): number | string {
//   const sum1 = num1 + num2
//   const sum2 = num1 - num2
//   const sum3 = num1 * num2
//   const sum4 = Math.floor((num1 / num2) * 1000) / 1000
//   return `足算>${sum1}引算>${sum2}掛算>${sum3}割算>${sum4}`
// }

// const sumButton = document.getElementById('sum__button')!

// sumButton.addEventListener('click', () => {
//   const num1 = (<HTMLInputElement>document.getElementById('num1')!).value
//   const num2 = (<HTMLInputElement>document.getElementById('num2')!).value
//   const sum = document.getElementById('get__sum')!
//   sum.innerHTML = `結果：${sample(Number(num1), Number(num2))}`

// })