var electron = require('electron');

var app = electron.app;

var BrowserWindow = electron.BrowserWindow;

var mainWindow = null;

app.on('ready',()=>{
    mainWindow = new BrowserWindow({
        width:800,
        height:600,
        webPreferences: {nodeIntegration:true}
    });

    mainWindow.webContents.openDevTools();

    mainWindow.loadFile('index.html');

    //监听关闭事件，把主窗口设置为null
    mainWindow.on('closed',()=>{
        mainWindow = null;
    })
})
