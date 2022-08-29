import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Button from '../Button/index.vue'

describe('Button/index', () => {
  it('renders properly', () => {
    const wrapper = mount(Button, { props: { disabled: false } })
    expect(wrapper.text()).toMatchInlineSnapshot('"click"')
    expect(wrapper.text()).toContain('click')
  })
})
