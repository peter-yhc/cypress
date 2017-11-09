import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class TickerService {
    private _cachedResults: any;

    constructor(private http: Http) {
    }

    getSymbols() {
        if (this._cachedResults) {
            return Observable.of(this._cachedResults);
        } else {
            return this.http.get('http://localhost:8000/api/symbols')
                .map(res => {
                    return res.json().data;
                });
        }
    }

    set cachedResults(value: any) {
        this._cachedResults = value;
    }
}
