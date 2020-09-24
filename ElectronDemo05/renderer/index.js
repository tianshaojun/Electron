const btn = this.document.querySelector('#btn');
const { BrowserWindow } = require('electron').remote;

window.onload = function(){
    btn.onclick = ()=>{

        newWin = new BrowserWindow({
            width:500,
            height:500,
        })
        
        newWin.loadFile('yellow.html');
        newWin.on('close', ()=>{win=null});
    }
}


//创建右键菜单
const { remote } = require('electron');
var rightTemplate = [
    {label:'粘贴'},
    {label:'复制'}
]

var m = remote.Menu.buildFromTemplate(rightTemplate);

window.addEventListener('contextmenu', function(e){

    //阻止当前窗口默认事件
    e.preventDefault(e);
    //把菜单模板添加到右键菜单
    m.popup({window:remote.getCurrentWindow()});
})