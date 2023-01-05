## Luck

### 说明
- 所有组件都可以包含scope、value、onChange三个prop
- onChange用来将当前组件的变更广播到父组件；value用来接收当前组件的变更(onChange的值)；scope包含了所有同一层级的组件广播的数据；
- 为了区分组件广播到父组件的值，key必须存在且唯一
- 组件通过scope[key]来获取同层级组件的状态

### 组件
#### Form
| 名称 | 类型 | 描述 | 是否必须 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| spec | [Spec](#Spec)\|[Spec](#Spec)[] | 表单配置 | 是 | - |
| value | - | 表单值 | 是 | - |
| onChange | (value) => void | 表单值变化回调函数 | 是 | - |

> 注：spec为数组时，表单返回值为对象；spec为对象时，spec.key会被忽略，表单返回值为表单项的值

> 例1：spec = { key: 'name' }，输入“xiaoming”，表单onChange返回值为：“xiaoming”

> 例2：spec = [{ key: 'name' }]，输入“xiaoming”，表单onChange返回值为：{ name: 'xiaoming' }

#### Table
| 名称 | 类型 | 描述 | 是否必须 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |


### 类型 
#### Spec
| 名称 | 类型 | 描述 | 是否必须 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| key | String | 表单项索引 | 是（当spec不是数组时，key非必填） | - |
| type | String | 表单项类型（为components/Form/fields中文件名）| 否 | Input |
| label | String | 表单项标签 | 否 | 如果不指定，则为spec.key |
| value | - | 对应表单项的默认值，类型由type确定 | 否 | - |
| spec | [Spec](#Spec)\|[Spec](#Spec)[] | 当type=Custom/Map/List时，子表单配置 | 否 | - |
| rules | [Rule](#Rule) | 表单验证规则 | 否 | - |
| props | Object | 额外属性 | 否 | - |

#### Rule
| 名称 | 类型 | 描述 | 是否必须 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| validateLevel | enum | 表单验证结果类型，配合validator使用，success, warning, error, validating | 否 | error |
| validator | Promise | 表单验证规则，返回一个Promise，成功表示通过验证，失败返回错误提示 | 否 | - |
| hidden | (values) => boolean | 是否隐藏该表单项 | 否 | - |
| disabled | (values) => boolean | 是否禁用该表单项 | 否 | - |