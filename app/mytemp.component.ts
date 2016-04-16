import {Component, OnInit} from 'angular2/core'
import {DataService} from './data.service'
import {Quote} from './mock-data'

@Component({
    selector: 'my-template',
    template: `
        <div>My Template</div>
        <ul>
            <li *ngFor="#quote of quotes">
                <div><span>{{quote.symbol}}</span></div>
                <div><span>{{quote.value}}</span></div>
                <div [class.negative]="quote.deltaPercent < 0"
                    [class.positive]="quote.deltaPercent >= 0">
                    <span>{{quote.deltaPercent}}%</span>
                </div>
            </li>
        </ul>
    `,
    styles:[`
        ul {list-style: none;}
        li {/*background: #00AA00*/; color: black; display: flex}
        li div {margin-right: 10px; flex-basis: 60px; display: flex; justify-content: flex-end}
        li div:nth-child(1) {color: blue}
        .negative {color: red}
        .positive {color: green}
        
                
    `]
    
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
