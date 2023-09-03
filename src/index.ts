import type { PluginFunc } from 'dayjs'
import type plugin from './typings/index'

class Hello implements plugin.Hello {
  $word = ''
  constructor(params: plugin.Input) {
    this.$word = params.word
  }

  say() {
    console.log(`hello ${this.$word}`)
  }
}

const wrapper: PluginFunc = (_options, _Dayjs, dayjs) => {
  (dayjs as any).hello = (input: plugin.Input = { word: '' }) => {
    return new Hello(input)
  }
}

export default wrapper
