import { ElementGet } from "./elementGet";

export class SetCountView {

  work: string
  interval: string
  constructor(){
    this.work = ""
    this.interval = ""
    this.countGet()
  }
  countGet() {
    this.work = String(ElementGet.setWork())
    this.interval = String(ElementGet.setInterval())
    ElementGet.getWork().innerText = this.work
    ElementGet.getInterval().innerText = this.interval
  }
}