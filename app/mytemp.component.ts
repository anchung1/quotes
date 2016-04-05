import {Component, OnInit} from 'angular2/core'
import {DataService} from './data.service'

@Component({
    selector: 'my-template',
    template: '<div>My Template</div>'
    
})
export class MytempComponent implements OnInit{
    constructor(
        private _dataService: DataService
    ) {}
    
    ngOnInit() {
        this._dataService.sayHello1().then(msg => console.log(msg))
        console.log(this._dataService.sayHello())
        console.log(this._dataService.quotes())
    }
    
}
