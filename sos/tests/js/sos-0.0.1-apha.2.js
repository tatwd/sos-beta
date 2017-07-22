/**
 * SOS (v0.0.1-apha.2)
 * @author _king
 */


window.onload = function () {
    +function ($) {
        var tt1 = $.ele('tt-1');
        // console.log(tt1.length);

        // if(document.getElementsByClassName){
        //     alert( navigator.userAgent + '===' + navigator.appName + '===' + navigator.appVersion);
        // }

        $.toHtml(tt1[0], '_king is author');
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

    // Make IE support 'getElementsByClassName',but only support IE8 standards mode ^-^
    function ieSupportGetClass (classNameStr) {
        return  document.getElementsByClassName ?  
                document.getElementsByClassName(classNameStr):
                document.querySelectorAll(classNameStr);
    };
    

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

        // Add content to HTML
        toHtml: function (element, contents, typeNumber) {
            typeNumber = typeNumber || 0; // set default value of typeNumber

            if( !this.isOdd(element) ) {
                for( var i = 0; i < element.length; i++) {
                    this.toHtml(element[i], contents, typeNumber);
                }
            }

            switch(typeNumber) {
                case 0:
                    element.innerHTML = contents; // change 
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
        },


        // Check it is a element or a group elements
        isOdd: function (element) {
            return (element && element[0])? false: true;
        },

        // set to all elements which hava same class-name or tag-name
        toAll: function (elements, fn) {
            for(var i = 0; i < elements.length; i++) {
                // fn(elements[i], )  TODO
            }
        },

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