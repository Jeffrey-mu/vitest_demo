import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Counter from '../Counter/index.vue'

describe('Counter', () => {
  it('renders properly', () => {
    const wrapper = mount(Counter)

    wrapper.find('button').trigger('click')
    wrapper.find('button').trigger('click')

    expect(wrapper.emitted()).toHaveProperty('increment')
  })

  it('emits an event with count when clicked', () => {
    const wrapper = mount(Counter)

    wrapper.find('button').trigger('click')
    wrapper.find('button').trigger('click')

    // `emitted()` accepts an argument. It returns an array with all the
    // occurrences of `this.$emit('increment')`.
    const incrementEvent = wrapper.emitted('increment')

    // 我们已经“点击”了两次，所以 `increment` 的数组应该
    // 有两个值.
    expect(incrementEvent).toHaveLength(2)

    // 断言第一次单击的结果.
    // 注意该值是一个数组.
    // expect(incrementEvent[0]).toEqual([1])

    // 然后是第二个的结果.
    // expect(incrementEvent[1]).toEqual([2])
  })
})
