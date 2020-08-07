export class NumberSet {//出力
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
  setLoop(): void {
    const loop = document.getElementById('loop')!
    for (let i = 1; i <= 10; i++) {
      const option = document.createElement('option')
      option.text = String(i)
      option.value = String(i)
      loop.appendChild(option)
    }
  }
}
