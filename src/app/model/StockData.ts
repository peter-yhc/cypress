export class StockData {

    constructor(public symbol: String,
                public quantity: number,
                public latestPrice: number,
                public intraDayChange: number,
                public intraDayChangePct: number,
                public bookValue: number,
                public marketValue: number,
                public gains: number,
                public gainsPct: number
    ) {

    }

}
