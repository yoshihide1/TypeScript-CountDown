
export abstract class NumberGet {
  mainCount(): HTMLElement {
    const count = (<HTMLElement>document.getElementById('main__count'))
    return count
  }

  // selectWorkMin() {
  //   const element = (<HTMLInputElement>document.getElementById('set__work__min')).value
  //   return element
  // }
  // selectWorkSec(): HTMLElement {
  //   const element = <HTMLInputElement>document.getElementById('set__work__sec')!
  //   return element
  // }
  // selectIntervalMin(): HTMLElement {
  //   const element = <HTMLInputElement>document.getElementById('set__interval__min')!
  //   return element
  // }
  // selectIntervalSec(): HTMLElement {
  //   const sec = <HTMLInputElement>document.getElementById('set__interval__sec')!
  //   return sec
  // }
  setLoop() {
    let loop = (<HTMLInputElement>document.getElementById('loop')).value
    return loop
  }
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