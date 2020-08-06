import { NumberSet } from './numberSet'
import {CountStart} from './countStart'
const selectNumber = new NumberSet()
selectNumber.setSecInterval()
selectNumber.setMinInterval()
selectNumber.setSecWork()
selectNumber.setMinWork()
selectNumber.setLoop()
const countStart = new CountStart()
countStart.start()
countStart.stop()
countStart.reset()