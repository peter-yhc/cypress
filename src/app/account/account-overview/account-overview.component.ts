
import {Component} from '@angular/core';
import {InvestmentAccount} from '../../model/InvestmentAccount';

@Component({
    selector: 'app-account-overview',
    templateUrl: 'account-overview.component.html'
})
export class AccountOverviewComponent {

    investmentAccount = new InvestmentAccount();
}
