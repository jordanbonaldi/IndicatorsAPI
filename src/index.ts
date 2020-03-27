import Trade from "./trade/Trade";

import {
    CandleData, CandleList,
    sma, SMA,
    ema, EMA,
    wma, WMA,
    wema, WEMA,
    macd, MACD,
    rsi, RSI,
    bollingerbands, BollingerBands,
    adx, ADX,
    atr, ATR,
    truerange, TrueRange,
    roc, ROC,
    kst, KST,
    psar, PSAR,
    stochastic, Stochastic,
    williamsr, WilliamsR,
    adl, ADL,
    obv, OBV,
    trix, TRIX,
    forceindex, ForceIndex,
    cci, CCI,
    awesomeoscillator, AwesomeOscillator,
    vwap, VWAP,
    volumeprofile, VolumeProfile,
    mfi, MFI,
    stochasticrsi, StochasticRSI,
    averagegain, AverageGain,
    averageloss, AverageLoss,
    sd, SD,
    highest, Highest,
    lowest, Lowest,
    sum, Sum,
    FixedSizeLinkedList,
    renko,
    HeikinAshi, heikinashi,
    bullish,
    bearish,
    abandonedbaby,
    doji,
    bearishengulfingpattern,
    bullishengulfingpattern,
    darkcloudcover,
    downsidetasukigap,
    dragonflydoji,
    gravestonedoji,
    bullishharami,
    bearishharami,
    bullishharamicross,
    bearishharamicross,
    eveningdojistar,
    eveningstar,
    morningdojistar,
    morningstar,
    bullishmarubozu,
    bearishmarubozu,
    piercingline,
    bullishspinningtop,
    bearishspinningtop,
    threeblackcrows,
    threewhitesoldiers,
    bullishhammerstick,
    bearishhammerstick,
    bullishinvertedhammerstick,
    bearishinvertedhammerstick,
    hammerpattern,
    hammerpatternunconfirmed,
    hangingman,
    hangingmanunconfirmed,
    shootingstar,
    shootingstarunconfirmed,
    tweezertop,
    tweezerbottom,
    fibonacciretracement,
    ichimokucloud, IchimokuCloud,
    keltnerchannels, KeltnerChannels, KeltnerChannelsInput, KeltnerChannelsOutput,
    chandelierexit, ChandelierExit, ChandelierExitInput, ChandelierExitOutput,
    setConfig
} from "technicalindicators";

import Zlema from "./indicators/Zlema";
import Alma from "./indicators/Alma";

export function reverseIndex<T>(array: T[], index: number = 0): T {
    return array[array.length - 1 - index];
}

export {
    Zlema,
    Alma,
    CandleData, CandleList, sma, SMA, ema, EMA, wma, WMA, wema, WEMA, macd, MACD, rsi, RSI, bollingerbands, BollingerBands, adx, ADX, atr, ATR, truerange, TrueRange, roc, ROC, kst, KST, psar, PSAR, stochastic, Stochastic, williamsr, WilliamsR, adl, ADL, obv, OBV, trix, TRIX, forceindex, ForceIndex, cci, CCI, awesomeoscillator, AwesomeOscillator, vwap, VWAP, volumeprofile, VolumeProfile, mfi, MFI, stochasticrsi, StochasticRSI, averagegain, AverageGain, averageloss, AverageLoss, sd, SD, highest, Highest, lowest, Lowest, sum, Sum, FixedSizeLinkedList, renko, HeikinAshi, heikinashi, bullish, bearish, abandonedbaby, doji, bearishengulfingpattern, bullishengulfingpattern, darkcloudcover, downsidetasukigap, dragonflydoji, gravestonedoji, bullishharami, bearishharami, bullishharamicross, bearishharamicross, eveningdojistar, eveningstar, morningdojistar, morningstar, bullishmarubozu, bearishmarubozu, piercingline, bullishspinningtop, bearishspinningtop, threeblackcrows, threewhitesoldiers, bullishhammerstick, bearishhammerstick, bullishinvertedhammerstick, bearishinvertedhammerstick, hammerpattern, hammerpatternunconfirmed, hangingman, hangingmanunconfirmed, shootingstar, shootingstarunconfirmed, tweezertop, tweezerbottom, fibonacciretracement, ichimokucloud, IchimokuCloud, keltnerchannels, KeltnerChannels, KeltnerChannelsInput, KeltnerChannelsOutput, chandelierexit, ChandelierExit, ChandelierExitInput, ChandelierExitOutput, setConfig
}