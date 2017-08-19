/**
 * SOS (v0.0.1-alpha.2)
 * @author _king
 */

'use strict';

window.onload = function () {

    // This '$' is not a jQuery object!!!
    +function ($) {
        var tt0 = $.ele('tt-0');
        
        // $.pip(tt0).addClass(tt0[0], 'tt-3');
        // $.addClass(tt0, 'tt-2')
        // alert($.hasClass(tt0))
        
        // alert(tt0);

        // if(document.getElementsByClassName){
        // alert( navigator.userAgent + '===' + navigator.appName + '===' + navigator.appVersion);
        // }

        // $.toHtml($.ele('tt-3'), '_king is author');


        $.pip('h1').css($._element[0], {
            'font-family': '-apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"'
        });

        $.css(tt0, {
            'background-color': '#eee',
            'font-family'     : '\"SFMono-Regular\", Consolas, \"Liberation Mono\", Menlo, Courier, monospace, \"Microsoft YaHei\"'
        });

        // alert(tt0.style.cssText+'=');

        $.css($.ele('tt-1'), {
            'color': 'green'
        });

        setTimeout(function(){
            // $.clear(tt0, 'css');
            // alert(tt0.style.cssText);
        }, 3000); // 3s

    }(Base);
};


/**
 * -----------------
 * Basic Modale
 * -----------------
 */

var Base = (function () {


    var Browser = {
        IE: 'ie', // Internet Explorer
        FF: 'ff', // Firefox
        CR: 'cr', // Google Chrome
        SF: 'sf'  // Safari
    };

    
    // Compatible Class

    var Compatible = function (){
        
        function Compatible(bv) {
            if( !(this instanceof Compatible) ) {
                return new Compatible(bv);  // run here when you forget 'new'
            }
            this.bv = bv; // browser-version
        };

        // Check compatible-function is for IE
        Compatible.prototype.forIE = function () {
            return this.bv === Browser.IE? true: false;
        };

        // Make IE support 'getElementsByClassName',but only support IE8+ ^-^        
        Compatible.prototype.getClass = function (classNameStr) {
            if(!this.forIE())
                return;

            return  document.getElementsByClassName ?  
                    document.getElementsByClassName(classNameStr):
                    document.querySelectorAll('.' + classNameStr);  // input css-selector
        };

        // Make IE support 'indexOf'
        Compatible.prototype.indexOf = function (arr, any) {
            if(!this.forIE())
                return;

            if(arr.indexOf) {
                return arr.indexOf(any);
            } else {
                for (var i = 0; i < arr.length; i++){
                    if (arr[i] === any) {
                        return i;
                    }
                }
                return -1;
            }
        };

        return Compatible;
    }();



    // Check it is a element or a group elements
    function isOddElement (element) {
        return (element && element[0])? false: true;
    }
    

    /**
     * -----------------
     * Base Api
     * -----------------
     */
    var Base = {

        // One param to get element(s),more params to create new tags
        ele: function (idClassTag_parentElement, newTagType, newClass, tagTotal) {
            if( arguments.length == 1) {
                var _id    = document.getElementById(idClassTag_parentElement);
                
                var _class = Compatible('ie').getClass(idClassTag_parentElement);
                
                var _tag   = document.getElementsByTagName(idClassTag_parentElement);

                return  _id ? _id:
                        _class.length ? _class : _tag;
            } else {
                // TODO: add new tag to html and set it class name
            }
        },

        // Set CSS
        css: function (element, cssTexts) {
            if (!isOddElement(element)) {
                this.toAll(arguments, this.css);
            }
            for (var key in cssTexts) {
                // Must add ';' to support IE becasue IE will clear ';' at last of the cssText, others not!
                element.style.cssText += ';' + (key + ':' + cssTexts[key]);
            }
        },

        // Clear CSS
        clear: function(ele, attr) {
            switch (attr) {
                case 'css':
                    ele.style.cssText = '';
                    break;
                default:
                    break;
            }
        },

        _element: null,

        // This is a test function
        pip: function (ele_fn) {
            this._element = (typeof ele_fn === 'object')? ele_fn:
                            (typeof ele_fn === 'string')? this.ele(ele_fn): null;
            return this;
        },

        // Add content to HTML
        toHtml: function (element, contents, typeNumber) {
            element    = element || this._element; 
            typeNumber = typeNumber || 0; // set default value of typeNumber

            if( !isOddElement(element) ) { // here cannot use 'this.isOdd()' to judge element

                // Recurse to all elements with same class-name or tag-name
                this.toAll(arguments, this.toHtml);

            } else {
                switch(typeNumber) {
                    case 0:
                        element.innerHTML = contents; // change original contents
                        break;
                    case 1:
                        element.innerHTML = element.innerHTML + contents; // after
                        break;
                    case -1:
                        element.innerHTML = contents + element.innerHTML; // before
                        break;
                    default:
                        console.error('Error in toHtml(): no this typeNumber!');
                        break;
                }
            }
        },

        // Check it is a element or a group elements
        isOdd: isOddElement,

        // Set to all elements which hava same class-name or tag-name
        toAll: function (args, fn) {
            
            // args[0] is elements-object,others are params of fn 
            for(var i = 0; i < args[0].length; i++) {
                fn(args[0][i], args[1], args[2], args[3])  // args.length <= 4
            }
        },

        // Check element has the class-name or not
        hasClass: function (element, classNameStr) {
            
            if (element.className.length === 0) { // check element has class attribute or not
                return false;
            } else if (classNameStr) {
                var arr = element.className.split(/\s+/); // split className to a array
                
                return Compatible('ie').indexOf(arr, classNameStr) === -1 ? false : true;
            } else {
                return true;
            }
        },

        // Add a class-name to a element
        addClass: function (element, classNameStr) {
            
            if (!isOddElement(element)) {
                this.toAll(arguments, this.addClass);
            } else {
                // use 'Base' instand of 'this'
                !Base.hasClass(element)? 
                    element.className = classNameStr:
                    !Base.hasClass(element, classNameStr)? 
                        element.className += ' ' + classNameStr: null;
            }
        }

        // ! Last one does not add ',' after '}',or IE 7 will appear a error:'IE: Error: 缺少标识符、字符串或数字'.
    };

    return Base;
})();

function tt(e, a) {

}

/**
 * -----------------
 * Icon Modale
 * -----------------
 */

var Icon = (function () {
    // 
})();


/**
 * -----------------
 * Carousel Modale
 * -----------------
 */

var Caro = (function () {
    // 
})();


/**
 * -----------------
 * Doit Modale
 * ----------------- 
 */

var Doit = (function () {
    // 

})();