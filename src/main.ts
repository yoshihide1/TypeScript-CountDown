class NumberSet {

  countSet(): void {
    const count = document.getElementById('set__work')!
    for (let i = 10; i <= 120; i += 10) {
      const option = document.createElement('option')
      option.text = String(i)
      option.value = String(i)
      count.appendChild(option)
    }
  }
  intervalSet(): void {
    const count = document.getElementById('set__interval')!
    for (let i = 10; i <= 120; i += 10) {
      const option = document.createElement('option')
      option.text = String(i)
      option.value = String(i)
      count.appendChild(option)
    }
  }
}
const selectNumber = new NumberSet
selectNumber.intervalSet()
selectNumber.countSet()



abstract class NumberGet {

  setWork(): number {
    const num = (<HTMLInputElement>document.getElementById('set__work')).value
    return Number(num)
  }
  setInterval(): number {
    const num = (<HTMLInputElement>document.getElementById('set__interval')).value
    return Number(num)
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
        console.log('start222')
        const workSec = numberGet.setWork()
        const intervalSec = numberGet.setInterval()
        this.countDown(workSec, intervalSec)
      } else {
        this.countDown(workSecJudge, intervalSecJudge)
      }
    })
  }
  stop(): void {
    const countStop = numberGet.stopElement()
    const startButton: any = numberGet.startElement()
    countStop.addEventListener('click', () => {
      startButton.disabled = false
      clearInterval(this.work)
      clearInterval(this.interval)
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