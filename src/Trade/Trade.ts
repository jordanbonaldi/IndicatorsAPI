import {EntryType, TradeTypes} from "./TradeTypes";
import {Data} from "@jordanbonaldi/databasecollector";

export default interface DissociatePotentialTrade extends Data {
    entryType: EntryType,
    entry: number,
    stop: number,
    type: TradeTypes,
    asset: string,
    timeframe: string,
    exit?: number,
}