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

export default SizeOptions;