import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import ConditionalRendering from '../ConditionalRendering/index.vue'
describe('renders a profile link', () => {

  it('renders a profile link', () => {
    const wrapper = mount(ConditionalRendering)
    // Here we are implicitly asserting that the
    // element #profile exists.
    const profileLink = wrapper.get('#profile')

    expect(profileLink.text()).toEqual('My Profile')
  })
  it('renders a profile link', () => {
    const wrapper = mount(ConditionalRendering)
    // 使用 `wrapper.get` 会抛出并使测试失败。
    expect(wrapper.find('#admin').exists()).toBe(false)
  })
  it('show admin', () => {
    const wrapper = mount(ConditionalRendering, {
      data() {
        return {
          admin: true
        }
      }
    })
    // 同样，通过使用 `get()`，我们隐含地断言
    // 元素存在。
    expect(wrapper.find('#admin').exists()).toBe(false)
  })
})
