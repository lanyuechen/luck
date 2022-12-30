## Luck

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

### 类型 
#### Spec
| 名称 | 类型 | 描述 | 是否必须 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| key | String | 表单项索引 | 是（当spec不是数组时，key非必填） | - |
| type | String | 表单项类型（为components/Form/fields中文件名）| 否 | Input |
| label | String | 表单项标签 | 否 | 如果不指定，则为spec.key |
| value | - | 对应表单项的默认值，类型由type确定 | 否 | - |
| spec | [Spec](#Spec)\|[Spec](#Spec)[] | 当type=Custom/Map/List时，子表单配置 | 否 | - |
| props | Object | 额外属性 | 否 | - |
