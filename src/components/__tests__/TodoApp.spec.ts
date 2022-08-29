import { mount } from '@vue/test-utils'
import TodoApp from '../TodoApp/index.vue'
import { describe, it, expect } from 'vitest'
describe('renders a todo', () => {

  it('renders properly', () => {
    const wrapper = mount(TodoApp)

    const todo = wrapper.get('[data-test="todo"]')

    expect(todo.text()).toBe('Learn Vue.js 3')
  })
  // 修改测试用例 添加async await
  it('creates a todo', async () => {
    const wrapper = mount(TodoApp)
    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(1)

    await wrapper.get('[data-test="new-todo"]').setValue('New todo')
    await wrapper.get('[data-test="form"]').trigger('submit')

    // 异步获取长度
    await expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(2)

  })
  it('completes a todo', async () => {
    const wrapper = mount(TodoApp)

    await wrapper.get('[data-test="todo-checkbox"]').setValue(true)

    expect(wrapper.get('[data-test="todo"]').classes()).toContain('completed')
  })
})
