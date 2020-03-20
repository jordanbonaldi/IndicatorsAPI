import {EntryType, TradeTypes} from "./TradeTypes";

export default interface Trade {
    type: TradeTypes,
    entryType: EntryType,
    price: number,
    stoploss: number,
    asset: string,
    timeframe: string,
    takeprofit?: number | number[],
}