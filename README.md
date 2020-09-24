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
  1. enableRemoteModule:true  //允许渲染进程中使用remote

### 6.创建菜单和基本使用






   


