
import FloatSize from './sizes/float'
import FractionalSize from './sizes/fraction'
import IntSize from './sizes/int'
import WordSize from './sizes/word'

const SizeOptions: Array<string> = [
  ...FloatSize,
  ...IntSize,
  ...FractionalSize,
  ...WordSize
]

export default SizeOptions
