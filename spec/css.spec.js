describe('Domey lib', function () {

    describe('css', function () {
        var div;

        beforeEach(function () {
            div = document.createElement('div');
            div.id = '#elem';
            div.className = 'trololo';
            div.style.width = '100px';
            div.style.height = '99px';
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
