import dayjs from 'dayjs'
import { describe, it } from 'vitest'

import Hello from '../src/index'

dayjs.extend(Hello)

describe('dayjs plugin', () => {
  it('hello world', () => {
    dayjs.hello({ word: 'world' }).say()
  })
})
