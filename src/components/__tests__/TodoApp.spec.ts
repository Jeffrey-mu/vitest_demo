import { mount } from '@vue/test-utils'
import TodoApp from '../TodoApp/index.vue'
import { describe, it, expect } from 'vitest'
describe('renders a todo', () => {

  it('renders properly', () => {
    const wrapper = mount(TodoApp)

    const todo = wrapper.get('[data-test="todo"]')
    expect(todo).toMatchInlineSnapshot(`
      DOMWrapper {
        "isDisabled": [Function],
        "wrapperElement": <div
          data-test="todo"
        >
          Learn Vue.js 3
        </div>,
      }
    `)
    expect(todo.text()).toBe('Learn Vue.js 3')
  })

})
