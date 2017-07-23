/**
 * SOS (v0.0.1-apha.2)
 * @author _king
 */


window.onload = function () {
    +function ($) {
        var tt0 = $.ele('tt-0');
        
        // alert(tt0)
        console.log($.pip('tt-1'));
        alert($.pip('tt-1'))

        // if(document.getElementsByClassName){
        //     alert( navigator.userAgent + '===' + navigator.appName + '===' + navigator.appVersion);
        // }

        // $.toHtml(tt1, '_king is author');
    }(Base);
};


/**
 * -----------------
 * Basic Modale
 * -----------------
 */

var Base = (function () {


    // var ARGS_TYPE = {
    // }

    // Make IE support 'getElementsByClassName',but only support IE8+ ^-^
    function ieSupportGetClass (classNameStr) {
        return  document.getElementsByClassName ?  
                document.getElementsByClassName(classNameStr):
                document.querySelectorAll('.' + classNameStr);  // input css-selector
    };

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
                
                var _class = ieSupportGetClass(idClassTag_parentElement);
                
                var _tag   = document.getElementsByTagName(idClassTag_parentElement);

                return  _id ? _id:
                        _class.length ? _class : _tag;
            } else {
                // TODO: add new tag to html and set it class name
            }
        },

        // Set CSS
        css: function () {},

        _element: null,
        
        pip: function (eles) {
            this._element = (typeof eles === 'object')? eles: this.ele(eles);
            return this;
        },

        // Add content to HTML
        toHtml: function (element, contents, typeNumber) {
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
            
            // args[0]is elements-object,others are params of fn 
            for(var i = 0; i < args[0].length; i++) {
                fn(args[0][i], args[1], args[2], args[3])  // args.length <= 4
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