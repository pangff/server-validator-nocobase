<!--
 * @Author: pangff
 * @Date: 2022-05-08 16:07:46
 * @LastEditTime: 2022-05-09 16:32:34
 * @LastEditors: pangff
 * @Description: readme
 * @FilePath: /server-validator-nocobase/README.md
 * stay hungry,stay foolish
-->

### 使用方式

nocobase 项目中afterStart事件中添加，如下所示
```
app.on("afterStart", () => {
  const validators = [{
    collectionName: 'posts',
    fieldValidators:[{
      type: "string",
      name: "email",
      validate: { isEmail: true },
    }]
  }];
  updateValidators(app,validators)
});

```
可参考实例：https://github.com/MarshalW/noco-next-demo/tree/validation 