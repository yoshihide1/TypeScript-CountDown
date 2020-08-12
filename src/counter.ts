class Counter {
  constructor(public workTime: number, public intervalTime: number, public loopCount: number) {
    this.setCount()
  }
  setCount(): void {
    let count: number[] = []
    for (let i = 0; i < this.loopCount; i++) {
      count.push(this.workTime, this.intervalTime)
    }
    console.log(count)
    this.countDown(count)
  }


  countDown(countTime: number[]): void {
    let count = countTime.shift()!
    const countDown = setInterval(() => {
      console.log(count)
      count--
      if (countTime.length <= 0) {
        console.log('end')
        clearInterval(countDown)
      } else if (count < 0) {
          count = countTime.shift()!
          console.log('length',countTime.length)
      } 
    }, 1000)

  }
}
new Counter(5, 10, 2)