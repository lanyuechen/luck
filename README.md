## Luck

### Form
|名称|类型|描述|是否必须|默认值|
|----|----|----|----|----|
|spec|-|表单配置|是|-|
|value|-|表单值|是|-|
|onChange|(value) => void|表单值变化回调函数|是|-|

#### spec
|名称|类型|描述|是否必须|默认值|
|----|----|----|----|----|
|key|string|表单项索引，当为空时直接返回value|否|-|
|type|string|表单项类型（为components/Form/fields中文件名）|否|Input|
|label|string|表单项标签|否|-|
|value|-|对应表单项的默认值，类型由type确定|否|-|
|spec|-|当type=Custom/Map/List时，子表单配置|否|-|
|props|object|额外属性|否|-|