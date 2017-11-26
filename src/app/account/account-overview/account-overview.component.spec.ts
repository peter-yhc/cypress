import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AccountOverviewComponent} from './account-overview.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {CypressAccount} from '../../model/CypressAccount';
import {StockData} from '../../model/StockData';

describe('AccountOverviewComponent', () => {
    let component: AccountOverviewComponent;
    let fixture: ComponentFixture<AccountOverviewComponent>;

    const expectedInvestmentAccount = new CypressAccount(
        'Bank Account 1',
        100.00,
        [new StockData('GOOG', 0, 0, 0, 0, 0, 0, 0, 0)]
    );

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                AccountOverviewComponent
            ],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AccountOverviewComponent);
        component = fixture.componentInstance;

        component.investmentAccount = expectedInvestmentAccount;
        fixture.detectChanges();
    });


    it('should show account name', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('div').textContent).toContain('Bank Account 1');
    });

    it('should show account balance', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('div').textContent).toContain('$100.00');
    });

    it('should have symbol data', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelectorAll('tr')[1].textContent).toContain('GOOG');
    });
});
