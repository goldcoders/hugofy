import FloatSize from "./sizes/float"
import IntSize from "./sizes/int"
import FractionalSize from "./sizes/fraction"
import WordSize from "./sizes/word"

let SizeOptions: Array<string> = [
    ...FloatSize,
    ...IntSize,
    ...FractionalSize,
    ...WordSize,
];

let AxisOptions: Array<string> = [
    ...FloatSize,
    ...IntSize,
    ...FractionalSize,
];

enum Axis {
    x = "x",
    y = "y",
}

let GapsOnX: Array<string> = AxisOptions.map((e) => {
    return `${Axis.x}-${e}`
});

let GapsOnY: Array<string> = AxisOptions.map((e) => {
    return `${Axis.y}-${e}`
});

let GapSizes: Array<string> = [
    ...SizeOptions,
    ...GapsOnX,
    ...GapsOnY
];

export default GapSizes;