var electron = require('electron');  //引入electron模块

var app = electron.app;  //创建electron引用

var BrowserWindow = electron.BrowserWindow;  //创建窗口引用

var mainWindow = null;  //声明要打开的主窗口

app.on('ready', ()=>{
    mainWindow = new BrowserWindow({
        width:1400,
        height:600,
        webPreferences: {
            nodeIntegration:true,   //允许渲染进程中使用node
            enableRemoteModule:true //允许渲染进程中使用remote
        } 
    });

    require('./main/menu.js');  //加载自定义菜单

    mainWindow.webContents.openDevTools();  //默认开启调试控制台

    mainWindow.loadFile('index.html');  //加载那个页面


    //在主进程中用BrowserView嵌入网页
    var BrowserView = electron.BrowserView;  //引入BrowserView
    var view = new BrowserView();  //new出对象
    mainWindow.setBrowserView(view);  //在主窗口中设置view可用
    view.setBounds({x:0,y:150,width:1200,height:800});  //定义view的具体样式和位置
    view.webContents.loadURL('http://jspang.com');  //view载入的页面

    //监听关闭事件，把主窗口设置为null
    mainWindow.on('closed', ()=>{
        mainWindow = null;
    })
})

