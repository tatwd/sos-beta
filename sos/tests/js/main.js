/*！
 * Version: sos-min-0.0.1
 * Author: _king
 * E-mail: leoking9641@gmail.com
 * Date: 2017-7-9 ~ 2017-7-26
 */

// 严格模式
'use strict';

/**
 * ----------------------------------------------------
 * onload事件，调用各模块
 * by _king
 * ----------------------------------------------------
 */
window.onload = function(){
    // 双线菜单图标转动
    icoMenuRoate();

    // 返回顶部
    back2Top();

    // 图片轮播
    caroStart();

    // $('body')[0].addEventListener('click',function(){
    //     alert('click body');
    // },false);
};


/**
 * ----------------------------------------------------
 * 图片录播 caro-img
 * caroStart
 * by _king
 * ----------------------------------------------------
 */
function caroStart() {
    var caro   = document.getElementById('sos-caro');    
    var imgs   = document.getElementsByTagName('img');
    // var page   = document.getElementsByTagName('span');
    var curent = 0;

    // 淡入 
    function fadeIn () {
        imgs[curent].className = 'active';
        // page[curent].className = 'active';
    }
    // 淡出
    function fadeOut() {
        imgs[curent].className = ' ';
        // page[curent].className = ' ';
    }

    function go() {
        fadeOut();
        curent++;
        if(curent >= imgs.length) curent = 0;
        fadeIn();
    }

    var inter = setInterval(go, 4000);

    // 鼠标移入
    caro.onmouseover = function () {
        clearInterval(inter);
    }
    // 鼠标移出
    caro.onmouseout = function () {
        inter = setInterval(go, 2000);
    }
}


/**
 * ----------------------------------------------------
 * 还回顶部 back-to-top
 * back2Top
 * by _king
 * ----------------------------------------------------
 */
function back2Top(){
    var bkTop = $('sos-back-to-top');    
    var valId;

    // 监听滑条移动
    window.onscroll = function(){
        if(scrollY > innerHeight){
            bkTop[0].style.display = 'block';
        }else{
            bkTop[0].style.display = 'none';
        }
    };
    
    bkTop[0].onclick = function(){
        var scX = scrollX;
        var scY = scrollY;
        valId = setInterval(function(){ //创建定时器返回顶部
            scY -= 150;
            scrollTo(scX,scY);
            if(scY <= 0){
                clearInterval(valId);
            }
        },30);
    };
}

/**
 * ----------------------------------------------------
 * 双线菜单 line-menu
 * icoMenuRoate,createMenuLines,setLinesStyle
 * by _king
 * ----------------------------------------------------
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

function createMenuLines(obj, n){
    var frag = document.createDocumentFragment();
    for(var i = 0;i < n;i++){
        var line = document.createElement('div');
        line.setAttribute('class','im-lines');
        frag.appendChild(line);
    }
    obj.appendChild(frag);
}

function setLinesStyle(obj, isClicked){
    var degs = 'rotate(45deg)',odegs = degs.replace('45','-45'); //(degs.split(/\(/)).join('(-');
    var pads = '9px 0';
    var bots = '-2px';
    var tras = 'all 0.3s';
    // var disp = 'block';

    if(isClicked){
        pads = pads.replace('9','6');
        bots = bots.replace('-2','4');
        degs = odegs = degs.replace('45','0');
        // disp = 'none';
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

    // var menus = $('menu-nomarl');
    // for(var i = 0;i < menus.length;i++ ){
    //     menus[i].style.display = disp;
    // }
}

// window.onresize = function() {
//     var menus = $('menu-nomarl');
//     for(var i = 0;i < menus.length;i++ ){
//         menus[i].style.display = 'blocks';
//     }
//     console.log(1);
// }

// 获取不同类型的节点
function $(idClassTag){

    return document.getElementById(idClassTag)
        || (document.getElementsByClassName(idClassTag) ) 
        || (document.getElementsByTagName(idClassTag) );
}

