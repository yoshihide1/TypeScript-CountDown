import { NumberSet } from './numberSet'
import { Controller } from './controller'
const selectNumber = new NumberSet()
selectNumber.setSecInterval()
selectNumber.setMinInterval()
selectNumber.setSecWork()
selectNumber.setMinWork()
selectNumber.setLoop()
const controller = new Controller()
controller.start()
controller.stop()
controller.reset()
// controller.selectTime()