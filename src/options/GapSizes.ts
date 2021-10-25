
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

const AxisOptions: Array<string> = [
  ...FloatSize,
  ...IntSize,
  ...FractionalSize
]
/* eslint no-shadow: 0 */
enum Axis {
    x = 'x',
    y = 'y',
}

const GapsOnX: Array<string> = AxisOptions.map((el) => `${Axis.x}-${el}`)

const GapsOnY: Array<string> = AxisOptions.map((el) => `${Axis.y}-${el}`)

const GapSizes: Array<string> = [
  ...SizeOptions,
  ...GapsOnX,
  ...GapsOnY
]

export default GapSizes
