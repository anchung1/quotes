export var HelloMessage = 'Service Hello'

class Quote {
    symbol: string;
    value: number;
    deltaPercent: number;
}
export var Quotes: Quote[] = [
    {symbol: 'SPY', value: 206.25, deltaPercent: -0.32},
    {symbol: 'FB', value: 112.55, deltaPercent: -3.02},
    {symbol: 'FIT', value: 15.51, deltaPercent: 3.95},
    {symbol: 'F', value: 12.80, deltaPercent: -2.29},
    {symbol: 'JBLU', value: 20.41, deltaPercent: -4.31},
    {symbol: 'TSLA', value: 246.99, deltaPercent: 3.96},
    {symbol: 'MSFT', value: 55.43, deltaPercent: -0.25},
    {symbol: 'GOOG', value: 745.29, deltaPercent: -0.62},
    {symbol: 'NFLX', value: 104.35, deltaPercent: -1.28},
    {symbol: 'AMZN', value: 593.19, deltaPercent: -0.89}
]