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
  countGet(): number {
    const num = (<HTMLInputElement>document.getElementById('set__work')).value
    return Number(num)
  }
  intervalGet(): number {
    const num = (<HTMLInputElement>document.getElementById('set__interval')).value
    return Number(num)
  }

}

class CountStart extends NumberGet {

  start(): void {
    const countStart = <HTMLElement>document.getElementById('count__start')
    countStart.addEventListener('click', () => {
      const countSec = start.countGet()
      const intervalSec = start.intervalGet()
      console.log(`${countSec}>>>${intervalSec}`)
      this.countDown(countSec, intervalSec)
    })
  }

  countDown(count: number, interval: number): void {
    const workTime = <HTMLElement>document.getElementById('count__down__work')
    const intervalTime = <HTMLElement>document.getElementById('count__down__interval')
    intervalTime.innerHTML = String(interval)
    workTime.innerHTML = String(count)
    const timer = setInterval(() => {
      workTime.innerHTML = String((count--) - 1)
      console.log(count)
      if (count === 0) {

        console.log('Interval')
        this.intervalCountDown(interval)
        clearInterval(timer)
      }
    }, 1000)
  }
  intervalCountDown(interval: number): void {
    const intervalTime = <HTMLElement>document.getElementById('count__down__interval')
    const timer = setInterval(() => {
      intervalTime.innerHTML = String((interval--) - 1)
      console.log(interval)
      if (interval === 0) {
        console.log('Start')
        clearInterval(timer)
      }
    }, 1000)
  }
}
const start = new CountStart()
start.start()




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