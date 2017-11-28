import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AccountOverviewComponent} from './account-overview.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {CypressAccount} from '../../model/CypressAccount';
import {StockData} from '../../model/StockData';
import {By} from "@angular/platform-browser";

describe('AccountOverviewComponent', () => {
    let component: AccountOverviewComponent;
    let fixture: ComponentFixture<AccountOverviewComponent>;
    let compiled;

    const expectedInvestmentAccount = new CypressAccount(
        'Bank Account 1',
        100.00,
        [new StockData('GOOG', 550, 723.91, 67.12, 0.0924, 235791.12, 831481.89, 561657.25, 4.3575)]
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
        compiled = fixture.debugElement.nativeElement;
    });


    it('should show account name', () => {
        expect(compiled.querySelector('div').textContent).toContain('Bank Account 1');
    });

    it('should show account balance', () => {
        expect(compiled.querySelector('div').textContent).toContain('$100.00');
    });

    it('should have symbol name', () => {
        expect(compiled.querySelectorAll('tr')[1].querySelectorAll('td')[0].textContent).toContain('GOOG');
    });

    it('should have symbol quantity', () => {
        expect(compiled.querySelectorAll('tr')[1].querySelectorAll('td')[1].textContent).toContain('550');
    });

    it('should have symbol latest price', () => {
        expect(compiled.querySelectorAll('tr')[1].querySelectorAll('td')[2].textContent).toContain('723.91');
    });

    it('should have symbol intraday change', () => {
        expect(compiled.querySelectorAll('tr')[1].querySelectorAll('td')[3].textContent).toContain('67.12 (9.24%)');
    });

    it('should have symbol book value', () => {
        expect(compiled.querySelectorAll('tr')[1].querySelectorAll('td')[4].textContent).toContain('$235,791.12');
    });

    it('should have symbol market value', () => {
        expect(compiled.querySelectorAll('tr')[1].querySelectorAll('td')[5].textContent).toContain('$831,481.89');
    });

    it('should have symbol unrealised gains', () => {
        expect(compiled.querySelectorAll('tr')[1].querySelectorAll('td')[6].textContent).toContain('$561,657.25 (435.75%)');
    });

    it('should have one row per stock', () => {
        component.investmentAccount = new CypressAccount(
            'Bank Account 1',
            100.00,
            [
                new StockData('doesntmatter', 1, 1, 1, 1, 1, 1, 1, 1),
                new StockData('doesntmatter', 1, 1, 1, 1, 1, 1, 1, 1),
                new StockData('doesntmatter', 1, 1, 1, 1, 1, 1, 1, 1)
            ]
        );
        fixture.detectChanges();
        compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelectorAll('tr').length).toBe(4);
    });

    it('positive gains should be highlighted in green', () => {
        const debugElement = fixture.debugElement;
        const debugElement2 = debugElement.query(By.css('td'));
        expect(debugElement2.nativeElement.style.color).toBe('green');
    });
});
