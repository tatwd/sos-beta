/*！
 * @version: sos-min-0.0.1
 * @author: _king
 * @e-mail: leoking9641@gmail.com
 * @create-date: 2017-7-9
 * @last-date: 2017-7-10
 */

'use strict'; // 严格模式

window.onload = function(){
    // 双线菜单图标转动
    icoMenuRoate();

    // 返回顶部
    backToTop();

    // $('body')[0].addEventListener('click',function(){
    //     alert('click body');
    // },false);
};

function backToTop(){
    var bkTop = $('sos-back-to-top');    
    var clk = false;
    var valId;

    // 监听滑条移动
    window.onscroll = function(){
        if(scrollY > innerHeight){
            bkTop[0].style.display = 'block';
        }else{
            bkTop[0].style.display = 'none';
        }
        // console.log(scrollY);
        // if(clk){clearInterval(valId);}
    };
    
    bkTop[0].onclick = function(){
        //  alert(window.screenTop);
        // valId = setInterval(function(){
        //     scrollY -= 150;
        //     scrollTo(scrollX,scrollY);
        //     if(scrollY == 0){
        //         clearInterval(valId);
        //     }
        //     console.log('valId go');
        // },30);
        scrollTo(scrollX,0);
        clk = !clk;
        // if(scrollY == 0){clearInterval(valId2);}
        // return false;
    };
}

/**
 * 双线菜单图标转动
 * icoMenuRoate,createMenuLines,setLinesStyle
 * by _king
 */
function icoMenuRoate(){
    var iconMenu = $('sos-icon-menu');
    var clicked = false;
    for(var i = 0;i < iconMenu.length;i++){
        // 创建双线图标
        createMenuLines(iconMenu[i],2);
        // 点击旋转事件
        iconMenu[i].onclick = function(){
            var lines = this.childNodes;
            setLinesStyle(lines,clicked); // 设置样式
            clicked = !clicked;
        };
    }
}
function createMenuLines(obj,n){
    for(var i = 0;i < n;i++){
        var line = document.createElement('div');
        line.setAttribute('class','im-lines');
        obj.appendChild(line);
    }
}
function setLinesStyle(obj,isClicked){
    var degs = 'rotate(45deg)',odegs = degs.replace('45','-45'); //(degs.split(/\(/)).join('(-');
    var pads = '9px 0';
    var bots = '-2px';
    var tras = 'all 0.3s';
    if(isClicked){
        pads = pads.replace('9','6');
        bots = bots.replace('-2','4');
        degs = odegs = degs.replace('45','0');
    }
    obj[0].parentNode.style.padding = pads;
    // obj[0].parentNode.style = {
    //    'padding':'9px 0'
    // };
    obj[0].style.marginBottom = bots;
    // lines[0].style = {
    //     'margin-bottom': '-2px'
    // };
    // 旋转
    obj[0].style.transform = degs;obj[0].style.WebkitTransform = degs;obj[0].style.msTransform = degs;
    obj[obj.length-1].style.transform = odegs;obj[obj.length-1].style.WebkitTransform = odegs;obj[obj.length-1].style.msTransform = odegs;
    // 过渡
    obj[0].style.transition = tras;obj[0].style.WebkitTransition = tras;
    obj[obj.length-1].style.transition = tras;obj[obj.length-1].style.WebkitTransition = tras;
}

// 获取不同类型的节点
function $(idClassTag){
    // if(document.all)
    return document.getElementById(idClassTag) || document.getElementsByClassName(idClassTag) || document.getElementsByTagName(idClassTag);
    // if(document.getElementById(idClassTag)){return document.getElementById(idClassTag);}
    // else if(document.getElementsByTagName(idClassTag)){return document.getElementsByTagName(idClassTag);}
    // else if(document.getElementsByClassName(idClassTag)){return document.getElementsByClassName(idClassTag);}
}