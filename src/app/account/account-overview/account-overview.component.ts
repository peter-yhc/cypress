
import {Component} from '@angular/core';
import {CypressAccount} from '../../model/CypressAccount';

@Component({
    selector: 'app-account-overview',
    templateUrl: 'account-overview.component.html',
    styleUrls: ['account-overview.component.css']
})
export class AccountOverviewComponent {

    constructor() {

    }

    investmentAccount: CypressAccount;
}
