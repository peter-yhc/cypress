
import {Component} from '@angular/core';
import {InvestmentAccount} from '../../model/InvestmentAccount';

@Component({
    selector: 'app-account-overview',
    templateUrl: 'account-overview.component.html',
    styleUrls: ['account-overview.component.css']
})
export class AccountOverviewComponent {

    investmentAccount = new InvestmentAccount('Test Account 1', 23400.01);
}
