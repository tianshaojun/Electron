var electron = require('electron');  //引入electron模块

var app = electron.app;  //创建electron引用

var BrowserWindow = electron.BrowserWindow;  //创建窗口引用

var mainWindow = null;  //声明要打开的主窗口

app.on('ready', ()=>{
    mainWindow = new BrowserWindow({width:400,height:400});  //设置打开的窗口大小

    mainWindow.loadFile('index.html');  //加载那个页面

    //监听关闭事件，把主窗口设置为null
    mainWindow.on('closed', ()=>{
        mainWindow = null;
    })
})
