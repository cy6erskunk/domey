describe('Domey lib', function () {
    describe('selectors', function () {
        var div;

        beforeEach(function () {
            div = document.createElement('div');
            div.id = '#elem';
            document.body.appendChild(div);
        });

        afterEach(function () {
            document.body.removeChild(div);
        });

        it('can get element by Id', function () {
            var d = domey('#elem'),
                n = document.getElementById('#elem');
            expect(d[0]).toBe(n);
            expect(d.length).toEqual(1);
        });

        it('can get NodeList', function () {
            var d = domey('div'),
                n = document.querySelectorAll('div');
            expect(d[0]).toBe(n[0]);
            expect(d.length).toEqual(n.length);
        });
    });

    describe('utils', function () {
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
            expect(o.loop.calls.length).toEqual(3);
            // we already have 3 calls, let's another one to get 4:
            domey('#elem').forEach(o.loop);
            expect(o.loop.calls.length).toEqual(4);
        });

        it('can map over each element', function () {
            var a = domey('.elem').map(function (el) {
                return el.className;
            });
            expect(a.join('')).toEqual('elemelemelem');
        });
    });

    describe('css', function () {
        beforeEach(function () {
            div = document.createElement('div');
            div.id = '#elem';
            div.className = 'trololo';
            div.style.width = '100px';
            div.style.height = '99px';
            div.innerHTML = '<ul><li class="elem">1</li><li class="elem">2</li><li class="elem">3</li></ul>'
            document.body.appendChild(div);
        });

        afterEach(function () {
            document.body.removeChild(div);
        });

        it('can get element\'s style properties', function () {
            var expectedWidth = '100px';
            expect(domey('.trololo').css('width')).toBe(expectedWidth);
            expect(domey('#elem').css('width')).toBe(expectedWidth);
            expect(domey('div.trololo').css('width')).toBe(expectedWidth);
        });

        it('can set element\'s style property passing key and value', function () {
            var expectedWidth = '200px';
            domey('#elem').css('width', expectedWidth);
            expect(domey('.trololo').css('width')).toBe(expectedWidth);
            expect(domey('#elem').css('width')).toBe(expectedWidth);
            expect(domey('div.trololo').css('width')).toBe(expectedWidth);
        });

        it('can set element\'s style property passing object', function () {
            var expectedWidth = '200px';
            domey('#elem').css({width: '200px'});
            expect(domey('.trololo').css('width')).toBe(expectedWidth);
            expect(domey('#elem').css('width')).toBe(expectedWidth);
            expect(domey('div.trololo').css('width')).toBe(expectedWidth);
        });

        it('can set multiple element\'s style properties', function () {
            var expectedWidth = '200px';
            var expectedHeight = '101px';
            domey('#elem').css({width: expectedWidth, height: expectedHeight});
            expect(domey('.trololo').css('width')).toBe(expectedWidth);
            expect(domey('#elem').css('width')).toBe(expectedWidth);
            expect(domey('div.trololo').css('width')).toBe(expectedWidth);
            expect(domey('.trololo').css('height')).toBe(expectedHeight);
            expect(domey('#elem').css('height')).toBe(expectedHeight);
            expect(domey('div.trololo').css('height')).toBe(expectedHeight);
        });
    });
});