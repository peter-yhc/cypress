import {Component, Input, OnInit} from '@angular/core';
import {InvestmentAccount} from '../../model/InvestmentAccount';

@Component({
    selector: 'app-account-detail',
    templateUrl: './account-detail.component.html',
    styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent implements OnInit {

    @Input() investmentAccount: InvestmentAccount;

    constructor() {
    }

    ngOnInit() {
    }

}
