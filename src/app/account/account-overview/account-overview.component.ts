
import {Component} from '@angular/core';
import {CypressAccount} from '../../model/InvestmentAccount';

@Component({
    selector: 'app-account-overview',
    templateUrl: 'account-overview.component.html',
    styleUrls: ['account-overview.component.css']
})
export class AccountOverviewComponent {

    investmentAccount = new CypressAccount('Test Account 1', 23400.01);
}
