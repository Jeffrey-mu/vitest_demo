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
  it('creates a todo', async () => {
    const wrapper = mount(TodoApp)
    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(1)

    wrapper.get('[data-test="new-todo"]').setValue('New todo')
    wrapper.get('[data-test="form"]').trigger('submit')
    expect(wrapper.findAll('[data-test="todo"]')).toMatchInlineSnapshot(`
      [
        DOMWrapper {
          "isDisabled": [Function],
          "wrapperElement": <div
            data-test="todo"
          >
            Learn Vue.js 3
          </div>,
        },
      ]
    `)
    // test: 测试无法通过 .toHaveLength为 1
    // dom更新为异步
    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(2)

  })

})
