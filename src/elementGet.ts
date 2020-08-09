
export class ElementGet {
  static mainCount(): HTMLElement {//カウントダウン部分
    const count = (<HTMLElement>document.getElementById('main__count'))
    return count
  }
  static setLoop(): number {//ループ回数取得
    let loop = (<HTMLInputElement>document.getElementById('loop')).value
    return Number(loop)
  }
  static setWork(): number {//work時間取得
    let min: string | number = (<HTMLInputElement>document.getElementById('set__work__min')).value
    let sec: string | number = (<HTMLInputElement>document.getElementById('set__work__sec')).value
    min = Number(min) * 60
    sec = Number(sec)
    return min + sec
  }
  static setInterval(): number {//interval時間取得
    let min: string | number = (<HTMLInputElement>document.getElementById('set__interval__min')).value
    let sec: string | number = (<HTMLInputElement>document.getElementById('set__interval__sec')).value
    min = Number(min) * 60
    sec = Number(sec)
    return min + sec
  }
  static getWork(): HTMLElement {//workカウントセット部分
    const workTime = <HTMLElement>document.getElementById('count__down__work')
    return workTime
  }
  static getInterval(): HTMLElement {//intervalカウントセット部分
    const intervalTime = <HTMLElement>document.getElementById('count__down__interval')
    return intervalTime
  }
  static startElement(): HTMLButtonElement {//startボタン
    const startButton = <HTMLButtonElement>document.getElementById('count__start')
    return startButton
  }
  static stopElement(): HTMLButtonElement {//stopボタン
    const stopButton = <HTMLButtonElement>document.getElementById('count__stop')
    return stopButton
  }
  static resetElement(): HTMLButtonElement {//resetボタン
    const resetButton = <HTMLButtonElement>document.getElementById('count__reset')
    return resetButton
  }
  static selectTimeElement(): NodeListOf<HTMLInputElement> {//全てのselectタグ
    const select = <NodeListOf<HTMLInputElement>>document.querySelectorAll('select[name="select"]')
    return select
  }

}