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
