var fs = require('fs');
window.onload = function(){
    var btn = this.document.querySelector('#btn');
    var mybaby = this.document.querySelector('#mybaby');
    btn.onclick = function(){
        fs.readFile('../ElectronDemo02/xiaojiejie.txt',(err, data)=>{
            mybaby.innerHTML = data;
        })
    }
}


