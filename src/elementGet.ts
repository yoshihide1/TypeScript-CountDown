
export  class ElementGet {
  mainCount(): HTMLElement {
    const count = (<HTMLElement>document.getElementById('main__count'))
    return count
  }
  setLoop(): number {
    let loop = (<HTMLInputElement>document.getElementById('loop')).value
    return Number(loop)
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
  workSelectMinElement(): HTMLElement {
    const select = <HTMLElement>document.getElementById('set__work__min')
    return select
  }
  workSelectSecElement(): HTMLElement {
    const select = <HTMLElement>document.getElementById('set__work__sec')
    return select
  }
  intervalSelectMinElement(): HTMLElement {
    const select = <HTMLElement>document.getElementById('set__interval__min')
    return select
  }
  intervalSelectSecElement(): HTMLElement {
    const select = <HTMLElement>document.getElementById('set__interval__sec')
    return select
  }
  loopCountElement(): HTMLElement {
    const select = <HTMLElement>document.getElementById('loop')
    return select
  }

}