import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {DashboardGraphComponent} from './dashboard-graph/dashboard-graph.component';
import {AccountOverviewComponent} from './account/account-overview/account-overview.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    }));

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it(`should have as title 'Cypress'`, async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('Cypress');
    }));

    it('should render title', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('.brand-logo').textContent).toContain('Cypress');
    }));
});
