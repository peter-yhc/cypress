import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AccountDetailComponent} from './account-detail.component';
import {InvestmentAccount} from '../../model/InvestmentAccount';

describe('AccountDetailComponent', () => {
    let component: AccountDetailComponent;
    let fixture: ComponentFixture<AccountDetailComponent>;

    let expectedInvestmentAccount: InvestmentAccount;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
                declarations: [AccountDetailComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AccountDetailComponent);
        component = fixture.componentInstance;

        expectedInvestmentAccount = new InvestmentAccount('Bank Account 1');
        component.investmentAccount = expectedInvestmentAccount;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show account name', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('p').textContent).toContain('Bank Account 1');
    });
});
