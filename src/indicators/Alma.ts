import Input from "../input/Input";
import {reverseIndex} from "..";

export interface AlmaInput extends Input {
    offset: number,
    sigma: number;
}

let almaCandle: Function = (input: AlmaInput, candleIndex: number): number => {
    let
        m: number = Math.floor(input.offset * (input.period - 1)),
        s: number = input.period / input.sigma,
        weight: number = 0,
        norm: number = 0,
        sum: number = 0
    ;

    for (let a: number = 0; a < input.period; a++) {
        weight = Math.exp(-1 * Math.pow(a - m, 2) / (2 * Math.pow(s, 2)));
        norm = norm + weight;
        sum = sum + (reverseIndex(input.values, candleIndex + input.period - 1 - a) * weight);
    }

    return (sum / norm);
};

export default function (input: AlmaInput): number[] {
    let almaValues: number[] = [];

    for (let candleIndex: number = input.values.length - input.period; candleIndex >= 0; candleIndex--)
        almaValues.push(almaCandle(input, candleIndex));

    return almaValues.reverse();
}