/**
 * SOS (v0.0.1-apha.2)
 * @author _king
 */


window.onload = function () {
    +function ($) {
        var tt0 = $.ele('tt-1');
        alert(tt0);
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

    function ieSupportGetClass (classNameStr) {

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
                
                var _class = (parseInt(RegExp.$1 ? RegExp.$1 : 0) < 9) ?   
                    document.querySelectorAll(idClassTag_parentElement):   // only support IE8 standards mode ^-^
                    document.getElementsByClassName(idClassTag_parentElement);
                
                var _tag   = document.getElementsByTagName(idClassTag_parentElement);

                return  _id ? _id:
                        _class.length ? _class : _tag;
            } else {
                // todo
            }
        },

        // Add content to HTML
        toHtml: function (element, contents, typeNumber) {
            typeNumber = typeNumber || 0; // set default value of typeNumber

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