describe('Domey lib', function () {

    describe('utils', function () {
        var div;

        beforeEach(function () {
            div = document.createElement('div');
            div.id = '#elem';
            div.className = 'trololo';
            div.innerHTML = '<ul><li class="elem">1</li><li class="elem">2</li><li class="elem">3</li></ul>'
            document.body.appendChild(div);
        });

        afterEach(function () {
            document.body.removeChild(div);
        });

        it('can loop over each element', function () {
            var o =  {
                loop: function () { }
            };
            spyOn(o, 'loop');

            domey('.elem').forEach(o.loop);
            expect(o.loop.calls.count()).toEqual(3);
            // we already have 3 calls, let's another one to get 4:
            domey('#elem').forEach(o.loop);
            expect(o.loop.calls.count()).toEqual(4);
        });

        it('can map over each element', function () {
            var a = domey('.elem').map(function (el) {
                return el.className;
            });
            expect(a.join('')).toEqual('elemelemelem');
        });

        it('can check whether something is array or not', function() {
            expect(domey.isArray('')).toBe(false);
            expect(domey.isArray(undefined)).toBe(false);
            expect(domey.isArray(null)).toBe(false);
            expect(domey.isArray(123)).toBe(false);
            expect(domey.isArray({a:1})).toBe(false);
            expect(domey.isArray([])).toBe(true);
            expect(domey.isArray([1, '3'])).toBe(true);
        });
    });

});
