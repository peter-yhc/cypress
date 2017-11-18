import {TestBed} from '@angular/core/testing';
import {AccountOverviewComponent} from './account-overview.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('AppComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                AccountOverviewComponent
            ],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    });

    it('component should be loaded with ticker exchanges', () => {

    });

});
