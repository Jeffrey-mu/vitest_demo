# 条件渲染

## 寻找元素
Vue 最基本的功能之一是能够使用 v-if 动态插入和删除元素。让我们看看如何测试一个使用 v-if 的组件。
- 应该显示 /profile 链接。
- 当用户是管理员时，应显示 /admin 链接。
- 当用户不是管理员时，不应显示 /admin 链接。
```html
<template>
  <nav>
    <a id="profile" href="/profile">My Profile</a>
    <a v-if="admin" id="admin" href="/admin">Admin</a>
  </nav>
</template>
<script lang="ts" setup>
const admin = true;
</script>

```
## 使用 get()
`wrapper` 有一个 `get()` 方法来搜索现有元素。它使用 `querySelector` 语法。
我们可以使用 get() 断言配置文件链接内容：
```ts
describe('renders a profile link', () => {

  it('renders a profile link', () => {
    const wrapper = mount(ConditionalRendering)
    // Here we are implicitly asserting that the
    // element #profile exists.
    const profileLink = wrapper.get('#profile')

    expect(profileLink.text()).toEqual('My Profile')
  })

})

```
- 如果 get() 没有返回匹配选择器的元素，它将引发错误，并且您的测试将失败。

### 使用 find() 和 exists()
`get()` 假设元素确实存在并在它们不存在时抛出错误。不建议使用它来断言存在。

为此，我们使用 `find()` 和 `exists()`。下一个测试断言，如果 admin 为 false（默认为 false），则 admin 链接不存在：
```ts
 it('renders a profile link', () => {
    const wrapper = mount(ConditionalRendering)
    // 使用 `wrapper.get` 会抛出并使测试失败。
    expect(wrapper.find('#admin').exists()).toBe(false)
  })
```
请注意，我们正在调用exists()从返回的值.find()。find(), like mount(), 也返回一个wrapper. mount()有一些额外的方法，因为它包装了一个 Vue 组件，并且find()只返回一个常规的 DOM 节点，但许多方法在两者之间共享。其他一些方法包括classes()，它获取 DOM 节点具有的类，以及trigger()用于模拟用户交互。
### 使用data

最后的测试是断言管理链接是在什么时候呈现admin的true。false默认情况下，但我们可以使用 . 的第二个参数mount()覆盖它mounting options。

对于data，我们使用恰当命名的data选项：

```ts
  it('renders a profile link', () => {
    const wrapper = mount(ConditionalRendering, {
      data() {
        return {
          admin: true
        }
      }
    })
    // 同样，通过使用 `get()`，我们隐含地断言
    // 元素存在。
    expect(wrapper.get('#admin').text()).toEqual('Admin')
  })
```
### 检查元素可见性
有时您只想隐藏/显示一个元素，同时将其保留在 DOM 中。Vue 提供`v-show`了这样的场景。（您可以在此处v-if查看和之间的差异）。`v-show`
这是一个组件的`v-show`样子：
```js
const Nav = {
  template: `
    <nav>
      <a id="user" href="/profile">My Profile</a>
      <ul v-show="shouldShowDropdown" id="user-dropdown">
        <!-- dropdown content -->
      </ul>
    </nav>
  `,
  data() {
    return {
      shouldShowDropdown: false
    }
  }
}
```
在这种情况下，元素不可见，但始终呈现。`get()`or`find()`将总是返回一个`Wrapper`-总是返回`find()`-因为该元素仍在 DOM 中。`.exists()`true
### 使用isVisible()
`isVisible()`提供检查隐藏元素的能力。特别`isVisible()`将检查是否：
- 一个元素或其祖先有`display: none`, `visibility: hidden`,`opacity :0`风格
- 一个元素或其祖先位于折叠`<details>`标签内
- 元素或其祖先具有`hidden`属性
-
对于任何这些情况，`isVisible()`返回false.

使用的测试场景`v-show`如下所示：
```ts
it('does not show the user dropdown', () => {
  const wrapper = mount(Nav)

  expect(wrapper.get('#user-dropdown').isVisible()).toBe(false)
})
```
### 结论

- 使用`find()withexists()`来验证元素是否在 DOM 中。
- `get()`如果您希望元素位于 DOM 中，请使用。
- `data`安装选项可用于设置组件的默认值。
- 使用`get()withisVisible()`来验证 DOM 中元素的可见性
