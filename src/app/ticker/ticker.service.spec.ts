import {inject, TestBed} from '@angular/core/testing';

import {TickerService} from './ticker.service';
import {BaseRequestOptions, Http, HttpModule, Response, ResponseOptions} from "@angular/http";
import {MockBackend} from "@angular/http/testing";
import 'rxjs/add/operator/map'

describe('TickerService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [
                TickerService,
                {
                    provide: Http,
                    useFactory: (mockBackend, options) => {
                        return new Http(mockBackend, options);
                    },
                    deps: [MockBackend, BaseRequestOptions]
                },
                MockBackend,
                BaseRequestOptions
            ]
        });
    });

    it('ticker should be able to retrieve symbols',
        inject([TickerService, MockBackend], (service: TickerService, mockBackend) => {
            const mockResponse = {
                data: [
                    {exchange: 'NASDAQ', symbol: 'GOOG'},
                    {exchange: 'NASDAQ', symbol: 'MSFT'}
                ]
            };
            mockBackend.connections.subscribe((connection) => {
                connection.mockRespond(new Response(new ResponseOptions({
                    body: JSON.stringify(mockResponse)
                })));
            });

            service.getSymbols().subscribe(symbols => {
                console.log('Symbols: ' + JSON.stringify(symbols));
                expect(symbols.length).toBe(2);
                expect(symbols[0].exchange).toBe('NASDAQ');
                expect(symbols[0].symbol).toBe('GOOG');
                expect(symbols[1].exchange).toBe('NASDAQ');
                expect(symbols[1].symbol).toBe('MSFT');
            });
        }));
});
