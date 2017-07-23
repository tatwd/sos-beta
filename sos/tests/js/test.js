var Person = (function(){
    // if(!(this instanceof Person)) {
    //     return new Person();
    // }

    // class
    var Person = function(){
        

        function Person(ele){

            if(!this instanceof Person) {
                return new Person(ele);
            }

            this._element = ele;
        }

        Person.prototype.display_info = function() {
            // console.log(this._element);
        }

        Person.prototype.dosth = function() {
            // console.log('I am working....');
        }

        return Person;
    }();


    // Person('sos')

    return Person;

})();


var person = new Person('sos')

person.display_info();
person.dosth();

// console.log(person);
// console.log(Person);


var Sub = function () {
    if( !(this instanceof Sub) ){
        return new Sub(); // when you forget adding a 'new' 
        
    }
    else this._name = ''; 

}

// Sub.prototype = Object.create(Person.prototype);
// Sub.prototype.constructor = Sub;

Sub.prototype = {
    constructor: Sub,
    add: function(str) {
        this._name = str;
    },
    get: function() {
        return this._name;
    }
}


// var sub = new Sub('sos', 'sos-s');

var sub = Sub();

// console.log(sub instanceof Sub);
// console.log(sub instanceof Person);

sub.add('sub');
// sub._name = 'sub';

// alert(Sub);

var Util = (function(){

    var Modle = function(){
        //this._name = '';
        function Modle() {
            // var _name = '';
        }

        Modle.prototype = {
            constructor: Modle,
            set: function(str) {
                this._name = str;
            },
            get: function() {
                return this._name;
            }
        }

        return Modle;
    }();

    var Other = function(){

        var mdo = new Modle();

        function Other() {
            this._name = mdo.get();            
        }

        Other.prototype = {
            constructor: Other,
            set: function(str) {
                this._name = str;
            },
            get: function() {
                return this._name;
            }
        }
        return Other;
    }();    

    return { 
        Modle:Modle, 
        Other: Other 
    };
})();

// var mdl = new Util.Modle();
// mdl.set('mdl');

// var oth = new Util.Other();
// oth.set('oth');

// console.log(mdl);
// console.log(oth);
// console.log(Util);


var ttobj = {
    fn1: function fn1 (e, args, fn) {
        e--;
        //console.log(fn.name);
        // this.prototype.fn;
        console.log(this);
        // if( fn in this.prototype)
        fn(e, args[2]);
        // fn2(123, 34)
    },
    fn2: function fn2(e, s) {
        // console.log(this);
        // var that = this;
        // console.log(arguments);
        var args = arguments[1];
        if( isBig(e) ){
            // console.log(this);
            // e--;
            this.fn1(e, arguments, this.fn2);
        }else{
            console.log(e, s);  
        }
        
    },
    isBig: isBig
}

function isBig(e) {
    return e > 0 ? true:false;
}

// ttobj.fn2(1, 2);

// console.log(ttobj)

// [1,2,3].forEach? alert('ok'): alert('on');

var tt0 = document.getElementById('tt-0')
// tt0.style.fontFamily = '-apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"';
// tt0.style.fontFamily = '\"SFMono-Regular\", Consolas, \"Liberation Mono\", Menlo, Courier, monospace'
// tt0.style.backgroundColor = '#eee';
tt0.style.cssText = 'background-color:#eee;margin:0;';
alert(tt0.style.cssText);

