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


//通过链接打开浏览器
var { shell } = require('electron');

var aHref = document.querySelector('#aHref');

aHref.onclick = function(e){
    e.preventDefault();
    var href = this.getAttribute('href');
    shell.openExternal(href);
}


//window.open打开子窗口
var mybtn = document.querySelector('#mybtn');

mybtn.onclick = function(e) {
    window.open('./popup_page.html');
}


//父窗口接收信息
window.addEventListener('message',(msg)=>{
    let mytext = document.querySelector('#mytext');
    mytext.innerHTML = JSON.stringify(msg.data);
})


//选择文件对话框
const { dialog } = require('electron').remote;
var openBtn = document.getElementById('openBtn');
openBtn.onclick = function(){
    dialog.showOpenDialog({
        title:'请选择你喜欢的小姐姐照片',
        defaultPath:'xiaojiejie.jpg',  //默认路径的设置
        buttonLabel:'打开图片',  //自定义确定按钮
        filters:[   //过滤器的使用
            {name:'jpg',extensions:['jpg']}
        ]
    }).then(result=>{
        let image = document.getElementById('images');
        image.setAttribute("src",result.filePaths[0]);
    })
}


//保存文件对话框
const fs = require('fs');
var saveBtn = document.getElementById('saveBtn');

saveBtn.onclick = function(){
    dialog.showSaveDialog({
        title:'保存文件',
    }).then(result=>{
        console.log(result.filePath);
        fs.writeFileSync(result.filePath,'技术胖一个前端爱好者');
    }).catch(err=>{
        console.log(err);
    })
}


//消息对话框
var messageBtn = document.getElementById('messageBtn');

messageBtn.onclick = function () {
    dialog.showMessageBox({
        type: 'warning',
        title: '去不去由你',
        message: '是不是要跟胖哥去红袖招?',
        buttons:['我要去','我不去']
    }).then(result => {
        console.log(result);
    })
}