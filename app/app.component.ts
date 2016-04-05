import {Component} from 'angular2/core';
import {MytempComponent} from './mytemp.component'
import {DataService} from './data.service'


@Component({
    selector: 'my-app',
    template: '<my-template></my-template>',
    directives: [MytempComponent],
    providers: [DataService]
})
export class AppComponent { }
