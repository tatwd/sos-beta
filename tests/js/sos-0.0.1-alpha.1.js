/**
 * ------------------
 * Test Modale
 * ------------------
 */
window.onload = function() {

    !function($) {

        var tt0 = $.ele('tt-0'),
            tt1 = $.ele('tt-1'),
            tt3 = $.ele('body');
        
        // var tt;
        // console.log($.isElement(tt));

        $.css(tt0, {
            color          : 'green',
            padding        : '15px',
            backgroundColor: '#eee'
        });

        $.css(tt1, {
            fontFamily: '\'Segoe UI\', Tahoma, Geneva, Verdana, sans-serif'
        });

        $.htm(tt1,'_king');

        // $.addClass(tt1[0], 'tt-2')
        // console.log($.hasClass(tt1[0], 'tt-2'));
        

        // $.htm($.ele(tt0, 'p', 'tt-2', 2)[0], 'new tags');

        // console.log(typeof $.ele('tt-2'), typeof $.ele('tt-2')[0]);

        $.click(tt0, function(ev){
            $.noBubble(ev);
            alert('click tt0');
        });
        
        // $.click(tt1, function(ev){
        //     $.noBubble(ev);
        //     alert('click tt1');
        // });


    }(sos);

    !function($) {
        
        $.animate(sos.ele('sos-icon-menu'), $.LMR);

    }(sosDo);
};

/**
 * ------------------
 * SOS Modale
 * ------------------
 */

var sos = (function () {
    
    /**
     * ------------------
     * SOS API
     * ------------------
     */
    
    // object definition
    var SOS = {
        
        // some functions
        ele      : getAddElement,
        css      : setStyles,
        nos      : cancelStyles,
        htm      : addHtml,
        hasClass : hasClass,
        addClass : addClass,
        isElement: isElement,
        isOddEle : isOddElement,
        
        // some events 
        click     : clickEvent,
        addHandler: addHandler,
        noBubble  : stopBubble,
        getEvent  : getEvent
    
    };

    // event name definition
    var EVENT_NAME = {
        CLICK: 'click'
    };

    /**
     * ------------------
     * Basic API
     * ------------------
     */

    // get elements of html and add new elements to html
    function getAddElement(idClassTags_parentEle, new_tag, new_class, ele_total) {
        
        if(arguments.length === 1) {
            var _id_class_tag = idClassTags_parentEle;

            var _id    = document.getElementById(_id_class_tag),
                _class = document.getElementsByClassName(_id_class_tag),
                _tags  = document.getElementsByTagName(_id_class_tag);
            
            return _id ? _id:
                    _class.length ? _class : _tags;
        } else {

            // ele(parent_ele, new_tag, new_class, ele_total)
            var _parent_ele = idClassTags_parentEle;

            var frag = document.createDocumentFragment();
            for(var i = 0;i < ele_total;i++){
                var new_ele = document.createElement(new_tag);
                this.addClass(new_ele, new_class);
                frag.appendChild(new_ele);
            }
            _parent_ele.appendChild(frag);

            return this.ele(new_class);
        }
    };

    // set style of element
    function setStyles(ele, styles) {
        if( !this.isOddEle(ele) ) {
            for(var i = 0; i < ele.length; i++) {
                this.css(ele[i], styles);
            }
        } else {

            for (var key in styles) {
                (key in ele.style)?
                    ele.style[key] = styles[key]:
                    '';// console.warn(`'${key}' is not a css-attribute in this browser!`)

                // ele.style[key] = styles[key];
            }         
        }

    };

    // canc ael styles of you set
    function cancelStyles(ele) {
        for(var i = 0; i < arguments.length; i++) {
            this.css(arguments[i], {
                cssText: ''
            });
        }
    }

    // add texts to html
    function addHtml(ele, new_txt) {
        if( !this.isOddEle(ele) ) {
            for(var i = 0; i < ele.length; i++) {
                this.htm(ele[i], new_txt);
            }
        } else {
            ele.innerHTML = new_txt;
        }
    };

    // element has the class name or not
    function hasClass(ele, class_name) {
        var arr = ele.className.split(/\s+/);
        return (arr.indexOf(class_name) === -1) ? false : true;
    };

    // add a class name to a element
    function addClass(ele, class_name) {
        (!this.hasClass(ele, class_name)) ?
            ele.className += ' ' + class_name: '';
    };

    // check object is element or not
    function isElement(obj) {
        if(typeof obj === 'object'){
            return (obj[0] || obj).nodeType;
        }
        // return console.error(`${obj}!`);
    };

    // check it is a element or a group of elements
    function isOddElement(ele) {
        return (ele && ele[0]) ? false: true;
    };

    // set all element with same name
    // function setAllElements(ele, set_function) {
    //     if( !this.isOddEle(ele) ){
    //         for(var i = 0; i < ele.length; i++) {
    //             fn();
    //         }
    //     }
    // };


    /**
     * ------------------
     * Event API
     * ------------------
     */

    // click event
    function clickEvent(e, fn) {
        this.addHandler(e, EVENT_NAME.CLICK, fn);
    };

    // add  event listener
    function addHandler(ele, event_type, handler) {
            
        if(!SOS.isOddEle(ele)){
            // recurse to bind event for these elements
            for(var i = 0; i < ele.length; i++){
                this.addHandler(ele[i], event_type, handler); 
            }

        } else{
                
            if (ele.addEventListener) {   
                ele.addEventListener(event_type, handler, false);  // excludes <= IE8
            } else if (ele.attachEvent) {
                ele.attachEvent('on' + event_type, handler);       // <= IE8
            } else {
                ele['on' + event_type] = handler;
            }
        }
        
    };

    // get event
    function getEvent(event) {
        return event || window.event;
    };

    // stop bubble event
    function stopBubble(event) {
        event = this.getEvent(event);

        event.stopPropagation?
            event.stopPropagation():
            event.cancelBubble = true; 
    }

    return SOS;
})();


/**
 * ------------------
 * sosDo Modale
 * ------------------
 */

 var sosDo = (function($) {
     
    // Object.prototype = $;

    // Object Definition
    var sosDo = {
        LMR    : 'line-menu-rotate',
        
        animate: createAnimation
        
    };

    // Animation Types
    var ANIMATION_TYPES = {
        LINE_MENU_ROTATE: 'line-menu-rotate'
    };

    // create a animation
    function createAnimation(ele, animate_type) {
        switch(animate_type) {
            case this.LMR:
                lineMenuRotate(ele);
                break;
            default: break;
        }
    }

    // make line-menu rotate 
    function lineMenuRotate(ele) {
        // var ele  = $.ele('sos-icon-menu');            // get span#sos-icon-menu
        var lines = $.ele(ele[0], 'div', 'im-lines', 2); // add div.im-lines and return them

        // add event listener and rotate it
        var _clicked = false;

        $.click(ele[0], function(ev){
            $.noBubble(ev);

            if(_clicked){
                $.nos(lines, lines[0].parentNode); // cancle styles of you set
            } else {
            
                $.css(lines[0].parentNode, {
                    padding: '9px 0'
                });

                // lines-bottom rotate 45deg
                $.css(lines[0], {
                    marginBottom    : '-2px',

                    transform       : 'rotate(45deg)',
                    WebkitTransform : 'rotate(45deg)',
                    msTransform     : 'rotate(45deg)'
                });

                // lines-bottom rotate -45deg
                $.css(lines[lines.length-1], {
                    transform       : 'rotate(-45deg)',
                    WebkitTransform : 'rotate(-45deg)',
                    msTransform     : 'rotate(-45deg)'
                });
            }  
            $.css(lines, {
                tansition       : 'all 0.3s',
                WebkitTransition: 'all 0.3s'
            });
            
            _clicked = !_clicked;
        });
    }

     return sosDo;
 })(sos);