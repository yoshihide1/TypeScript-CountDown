import { ElementGet } from "./elementGet";

export class SetCountView extends ElementGet {

  work: string
  interval: string
  constructor(){
    super()
    this.work = ""
    this.interval = ""
    this.countGet()
  }
  countGet() {
    this.work = String(super.setWork())
    this.interval = String(super.setInterval())
    super.getWork().innerText = this.work
    super.getInterval().innerText = this.interval
  }
}