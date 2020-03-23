## api简要文档

1. 获取文章列表（前后台通用）   

接口：`apicomm001`      
参数：
```
{
  sort: string  {'date', 'hot'}
  limit: string {'10','20', ..., all},
  to: number,
  tag: string,
  state: string
}
```
返回：
```
{
  data:[ // json数组
    {
      id: string,
      title: string,
      breif: string,
      createAt: Date,
      updateAt: Date,
      tags: Array,
      mate: Object
    }
  ]
}
```


2. 获取文章内容（前后台通用）

接口：`apicomm002`      
参数：
```
{
  id: string
}
```
返回：
```
{
  data:{
      title: string,
      content: string,
      brief: string,
      createAt: Date,
      updateAt: Date,
      comments: [objectId],
      tags:Array{string},
      mate:{
        claps: number,
        views: number
      }
  }
}
```
3. 获取标签列表（后台）

接口：`apiadm001`      
参数：
```
{
  limit: 'all'
}
```
返回：
```
{
  data:[
    {
      id: string,
      name: string
     }
  ]
}
```
4. 添加文章（后台）   

接口：`apiadm002`      
参数：
```
{
  title: string,
  content: string,
  breif: string,
  tags: Arrat{id}
}
```
返回：
```
{
  data:{
    status: number
  }
}
```

5. 更新文章（后台）(是否与添加接口合并？)   
接口：`apiadm003`      
参数：
```
{
  id: string
  title: string,
  content: string,
  breif: string,
  tags: Arrat{id}
}
```
返回：
```
{
  data:{
    status: number
  }
}
```
