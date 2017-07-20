/**
 * ------------------
 * Main Entrance
 * ------------------
 */
window.onload = function() {

    !function($) {
        
        let tt0 = $.getele('tt-0'),
            tt1 = $.getele('tt-1');
        

        $.setcss(tt0, {
            color          : 'green',
            padding        : '15px',
            backgroundColor: '#eee'
        });

        $.setcss(tt1[0], {
            fontFamily: '\'Segoe UI\', Tahoma, Geneva, Verdana, sans-serif'
        });

        // $.addtxt(ele,'SOS');
    }(sos);
}

/**
 * ------------------
 * SOS Object
 * ------------------
 */
const sos = (function () {

    // get elements of html
    function getele(ele) {
        let _id    = document.getElementById(ele),
            _class = document.getElementsByClassName(ele),
            _tag   = document.getElementsByTagName(ele);
        
        return _id ? _id:
                _class.length > 0 ? _class : _tag; 
    };

    // set style of element
    function setcss(ele, stys) {
        for (var key in stys) {
            (key in ele.style) ?
                ele.style[key] = stys[key]:
                console.error(`'${key}' is not a css-attribute.`);
        }         
    };

    // add texts to html
    function addtxt(ele, new_txt) {
        ele.innerHTML = new_txt;
    };

    // element has the class name or not
    function hascla(ele, class_name) {
    };

    // add a class name to a element
    function addcla(ele, class_name) {
    };

    // object definition
    const sos = {
        
        // some functions
        getele,
        setcss,
        addtxt,
        hascla,
        addcla,

        // some events
        events:[]
    };

    return sos;
}());