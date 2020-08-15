type setTime = {
  workCount: number;
  intervalCount: number
}[]
class Counter {
  countTime: number
  constructor(public workTime: number, public intervalTime: number, public loopCount: number) {
    this.countTime = 0
    // this.setCount()
    this.myFunction()
  }
  countDown(name: string, count: number) {
    this.countTime = count
    return new Promise((resolve) => {
      const timer = setInterval(() => {
        console.log(this.countTime)
        this.countTime--
        if (this.countTime < 0) {
          clearInterval(timer)
          setTimeout(() => {
            return resolve()
          }, 3000)
        }
      }, 1000)
    })
  }

  async myFunction() {
    console.log('start')
    await this.countDown('work', 10)
    console.log('interval')
    await this.countDown('interval', 5)
    console.log('end')
  }

  setCount(): void {
    let count: setTime = []
    for (let i = 0; i < this.loopCount; i++) {
      count.push({ workCount: this.workTime, intervalCount: this.intervalTime })
    }
    this.start(count)
  }

  start(countTime: setTime) {
    return this.countDownWork(countTime).then((res) => {
      console.log(res)
      console.log(111)
    })
  }
  countDownWork(countTime: setTime): Promise<number | void> {
    console.log(countTime)
    let { workCount, intervalCount } = countTime.shift()!
    return new Promise((resolve) => {
      this.countDownTimer(workCount)
      resolve()
    })
  }

  countDownInterval(interval: number, countTime: setTime): void {
    let intervalCount = interval

  }
  countDownTimer(count: number) {
    let countTime = count
    const countDown = setInterval(() => {
      console.log(countTime)
      countTime--
      if (countTime < 0) {
        clearInterval(countDown)
        setTimeout(() => {
          console.log('return')
        }, 1500)
      }
    }, 1000)
  }

  sample(num: number): Function {
    const count = num
    return (() => {
      return count
    })
  }
  //   static test(data: number[], f: Function): void {
  //     for (let key in data) {
  //       f(data[key], key)
  //     }
  //   }
  //   static test2(init: number): Function {
  //     console.log(111)
  //     let counter = init
  //     return (() => {
  //       let countDown = setInterval(() => {
  //         console.log(counter)
  //         if (counter <= 0) {
  //           setTimeout(() => {
  //             console.log('end')
  //             clearInterval(countDown)
  //           }, 1000)
  //         }
  //         return --counter
  //       }, 1000)
  //     })
  //   }

  // }
  // let count = 5
  // let interval = 3
  // let loopCount = 3
  // let cc = Counter.test2(count)
  // let dd = Counter.test2(interval)
  // console.log(cc())
  // const countDown = setInterval(() => {
  //   if (loopCount === 0) {
  //     console.log('end')
  //     clearInterval(countDown)
  //   } else {
  //     console.log(cc())
  //     if (cc() <= 0) {
  //       console.log(dd())
  //       if (dd() <= 0) {
  //         loopCount--
  //         clearInterval(countDown)
  //       }
  //     }
  //   }
  // }, 1000)

}
new Counter(5, 2, 2)
                          // let arr = [1, 2, 4, 8, 16]

// Counter.test(arr, function (value: number, key: number): void {
//   console.log(`${key} : ${value}`)
// })

//  function start(count: number): void {
//   let countTime = count
//    const countDown =  setInterval (() => {
//     countTime--
//     if (countTime <= 0) {
//       clearInterval(countDown)
//     }
//    }, 1000)
// }
  // let t = Counter.test2(30)
  // console.log(t())
  // console.log(t())
  // console.log(t())
  // console.log(t())
  // console.log(t())