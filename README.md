
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