import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class TickerService {

    constructor(private http: Http) {
    }

    getSymbols() {
        return this.http.get('http://localhost:8000/api/symbols')
            .map(res => {
                return res.json().data
            })
    }
}
