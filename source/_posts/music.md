---
title: 基于Vue的音乐播放器
date: 2017-08-02 18:15:04
---

------

从标题中大家可以看到啦，我是很喜欢听歌的，有一天没事情做，就想着敲点代码来丰富我的[GitHub](https://github.com/DeanDai)，正好最近在用Vue，就决定了写个简单的音乐播放器。

------

## 开始


### 1. 构建项目，这里我用了[vue-cli](https://github.com/vuejs/vue-cli)脚手架来搭建项目框架

- 安装：
```
npm install -g vue-cli
```
- 初始化
```
vue init webpack music
```
- 安装依赖
```
cd music
npm install
```
- 运行
```
npm run dev
```
浏览器打开[http://localhost:8080](http://localhost:8080)可以看到下面这个页面，说明运行成功
![](../../../../images/home.png)

### 2. 安装插件
- 路由功能: [vue-router](https://github.com/vuejs/vue-router)(这个在初始化的时候就问你是否安装，没有安装可以自己安装)

- 请求功能: [vue-resource](https://github.com/pagekit/vue-resource)，推荐使用[axios](https://github.com/mzabriskie/axios)，这个已经不维护了

- UI组件库: [Muse-UI](https://github.com/museui/muse-ui), 这个纯粹是最近听说了这个组件库，想了解一下用法。当然大家也可以不用，自己写UI
```
npm install --save muse-ui vue-router vue-resource
```
基本上就是这些，其他插件在初始化的时候就已经添加好了依赖，只需要安装即可。

### 3. 音乐接口api

在网上找了很多现有的音乐播放器的API，最后选择了qq音乐的一些api来做数据源。但是大家都知道，肯定会碰到的一个问题就是跨域。

好在vue-cli可以通过配置解决，就是项目中config/index.js里面有个参数叫proxyTable。

具体可以参考[https://vuejs-templates.github.io/webpack/proxy.html](https://vuejs-templates.github.io/webpack/proxy.html)

接口参照[https://segmentfault.com/a/1190000007685830](https://segmentfault.com/a/1190000007685830)，我自己也在[QQ音乐移动端web版](https://m.y.qq.com/)上抓包获取了几个接口使用

------

大概的内容就是这些，有兴趣的同学可以去看[源码]()，写的不好，跪求轻踩。再一次感谢您花费时间阅读这篇文章。

作者 [@Dean][1]     
2017 年 08月 02日    

[1]: https://github.com/DeanDai