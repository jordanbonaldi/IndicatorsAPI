import Input from "../input/Input";
import { ema } from "technicalindicators";

export default function (input: Input): number[] {
    let zlemaLag: number = (input.period - 1) / 2;
    let zlemaData: number[] = [];

    for (let a: number = input.values.length - 1; a > zlemaLag; a--)
        zlemaData.push(input.values[a] + (input.values[a] - input.values[a - zlemaLag]));

    return ema({ period: input.period, values: zlemaData.reverse() });
}