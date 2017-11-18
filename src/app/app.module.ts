import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AccountOverviewComponent} from './account-overview/account-overview.component';
import {DashboardGraphComponent} from './dashboard-graph/dashboard-graph.component';


@NgModule({
    declarations: [
        AppComponent,
        AccountOverviewComponent,
        DashboardGraphComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class AppModule {
}
