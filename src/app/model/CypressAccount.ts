import {StockData} from './StockData';

export class CypressAccount {

    constructor(public name = '', public marketValue = 0, public stocks: StockData[]) {

    }
}
