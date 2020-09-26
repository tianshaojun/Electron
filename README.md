# Electron

### 1.Electron简介

![](https://github.com/tianshaojun/Electron/blob/master/md_img/01.jpg)

+ Electron是由Github开发的开源框架
+ 它允许开发者使用Web技术构建跨平台的桌面应用

> Electron = Chromium + Node.js + Native API

### 2.开发环境搭建

+ 安装electron  
   + npm install electron --save-dev
+ 检验安装是否成功  
   + npx electron -v
   + ./node_modules/.bin/electron -v
+ 启动命令
   + ./node_modules/.bin/electron

### 3.hello world

+ 全局安装electron
   + npm install -g electron
+ 初始化package.json文件  
   + npm init --yes
+ 打开窗口
   + electron .

### 4.读取文件

> Electron的运行流程

![](https://github.com/tianshaojun/Electron/blob/master/md_img/02.png)

> Electron的主进程和渲染进程

+ package.json中定义的入口文件就是主进程，一般一个程序只有一个主进程
+ 我们写的html部分可以看成渲染进程

![](https://github.com/tianshaojun/Electron/blob/master/md_img/03.png)

+ issue
  1. 读取文件路径问题(相对路径和只写文件名都可以)
  2. 刷新页面后读取文件失败

### 5.Remote模块使用

+ issue
  1. enableRemoteModule:true  允许渲染进程中使用remote

### 6.创建菜单和基本使用

+ Menu模块

### 7.右键菜单制作

+ 菜单快捷键绑定
  + accelerator:`ctrl+n`
+ 程序打开调试模式
  + mainWindow.webContents.openDevTools()

### 8.通过链接打开浏览器

+ shell模块

### 9.嵌入网页和打开子窗口

+ 嵌入网页
  + BrowserView (Browser是主进程中的类，只能在主进程中使用)
+ 打开子窗口
  + window.open('https://www.baidu.com/');

### 10.子窗口和父窗口间的通信
  
  + 子窗口向父窗口传递消息
     + window.opener.postMessage(message,targetOrigin)
        1. message: 传递的消息，是string类型的值
        2. targetOrigin: 指定发送的窗口，如果未指定来源则发送给*，即所有窗口
  + 父窗口接收信息
     + window.addEventListener

### 11.选择文件对话框
   
   + dialog.showOpenDialog()
      1. title: String(可选)，对话框的标题
      2. defaultPath: String(可选)，默认打开的路径
      3. buttonLabel: String(可选)，确认按钮的自定义标签
      4. filters: 文件选择过滤器

### 12.保存对话框
  
   + dialog.showSaveDialog()
 





  













   


