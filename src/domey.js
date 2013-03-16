(function (window, document, undefined) {
    window.domey = function (selector) {
        var isArray = function (obj) {
                return Object.prototype.toString.call(obj) === '[object Array]';
            },
            isObject = function (obj) {
                return Object.prototype.toString.call(obj) === '[object Object]';
            },
            slice = Array.prototype.slice,
            toArray = function (obj) {
                return slice.call(obj);
            };

        function Domey (elems) {
            if (! isArray(elems)) {
                elems = [elems];
            }
            for (var i = 0; i < elems.length; i++) {
                this[i] = elems[i];
            }
            this.length = elems.length;
        }

        Domey.prototype.map = function (callback) {
            var results = [],
                i = 0;

            for (; i < this.length; i++) {
                results.push(callback.call(this, this[i], i));
            }

            return results;
        };

        Domey.prototype.forEach = function (callback) {
            this.map(callback);
            return this; // for chaining;
        };

        // ###3 usecases:
        // - one argument present and it is string: the value of corresponding
        // style field of the very first element from nodeSet is returned
        // - two arguments are present, first one is string: ...
        // - one argument prepsent and it is Object: each key-value pair
        // is interpreted as style name and value to be set for each element
        // in current nodeSet
        Domey.prototype.css = function (style, value) {

            if ( typeof style === 'string' ) {
                if ( typeof value === 'undefined' ) {
                    return this[0].style[style];
                } else {
                    this.forEach(function (elem) {
                        elem.style[style] = value;
                    });
                }
            } else if ( isObject(style) ) {
                this.forEach(function (elem) {
                    for ( var i in style ) {
                        if (style.hasOwnProperty(i)) {
                            elem.style[i] = style[i];
                        }
                    }
                });
            }

            return this; // for chaining;
        };

        if (typeof selector === 'string') {
            if (/#[a-z0-9_\-]/.test(selector)) {
                return new Domey(document.getElementById(selector));
            } else {
                return new Domey(toArray(document.querySelectorAll(selector)));
            }
        }
        return new  Domey( selector.length ? selector : [selector] );
    };
})(window, window.document);