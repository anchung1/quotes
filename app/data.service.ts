import {Injectable} from 'angular2/core'
import {HelloMessage, Quotes} from './mock-data'

@Injectable()
export class DataService {
    sayHello1() {
        return Promise.resolve(HelloMessage)
    }
    sayHello() {
        return "sayHello"
    }
    quotes() {
        return Promise.resolve(Quotes)
    }
}