import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {DashboardGraphComponent} from './dashboard-graph/dashboard-graph.component';
import {AccountOverviewComponent} from './account/account-overview/account-overview.component';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                DashboardGraphComponent,
                AccountOverviewComponent
            ],
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
    it('should render title in a h1 tag', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('.brand-logo').textContent).toContain('Cypress');
    }));
});
