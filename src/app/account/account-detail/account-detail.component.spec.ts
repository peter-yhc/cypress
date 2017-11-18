import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AccountDetailComponent} from './account-detail.component';

describe('AccountDetailComponent', () => {
    let component: AccountDetailComponent;
    let fixture: ComponentFixture<AccountDetailComponent>;

    let expectedBankAccount: String;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
                declarations: [AccountDetailComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AccountDetailComponent);
        component = fixture.componentInstance;

        expectedBankAccount = 'Bank Account 1';
        component.accountName = expectedBankAccount;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show account name', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('p').textContent).toContain(expectedBankAccount);
    });
});
