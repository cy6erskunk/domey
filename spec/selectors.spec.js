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

        it('doesn\'t fail on empty selector', function() {
            result = domey();
            expect(result.length).toBe(0);
            expect(result[0]).toBeUndefined();
        });

        it('kinda ignores non-string selectors', function() {
            result = domey(null);
            expect(result.length).toBe(0);
            expect(result[0]).toBeUndefined();
            result = domey(1);
            expect(result.length).toBe(0);
            expect(result[0]).toBeUndefined();
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

});
