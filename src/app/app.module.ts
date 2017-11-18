import {MaterializeModule} from 'angular2-materialize';
import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AccountOverviewComponent} from './account/account-overview/account-overview.component';
import {DashboardGraphComponent} from './dashboard-graph/dashboard-graph.component';
import {AccountDetailComponent} from './account/account-detail/account-detail.component';


@NgModule({
    declarations: [
        AppComponent,
        AccountOverviewComponent,
        DashboardGraphComponent,
        AccountDetailComponent
    ],
    imports: [
        BrowserModule,
        MaterializeModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class AppModule {
}
