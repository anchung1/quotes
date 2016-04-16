import {Component, OnInit} from 'angular2/core'
import {DataService} from './data.service'
import {Quote} from './mock-data'

@Component({
    selector: 'my-template',
    template: `
        <div>My Template</div>
        <ul>
            <li *ngFor="#quote of quotes">
                <span>{{quote.symbol}}</span>
                <span>{{quote.value}}</span>
                <span>{{quote.deltaPercent}}</span>
            </li>
        </ul>
    `
    
})
export class MytempComponent implements OnInit{
    quotes: Quote[] = [];
    constructor(
        private _dataService: DataService
    ) {}
    
    ngOnInit() {
        this._dataService.sayHello1().then(msg => console.log(msg))
        this._dataService.quotes().then( values => this.quotes = values)
    }
    
}
