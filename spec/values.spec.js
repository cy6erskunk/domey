describe('Domey lib', function () {

    describe('values', function () {
        var input,
            expectedValue = 'ololo-nyan';

        beforeEach(function () {
            input = document.createElement('input');
            input.id = '#elem';
            input.className = 'trololo';
            input.value = expectedValue;
            document.body.appendChild(input);
        });

        afterEach(function () {
            document.body.removeChild(input);
        });

        it('can get value from node', function () {
            expect(domey('#elem').val()).toBe(expectedValue);
        })

        it('can set value from node', function () {
            var newExpectedValue = 'nyan-troll';
            domey('#elem').val(newExpectedValue);
            expect(domey('#elem').val()).toBe(newExpectedValue);
        })
    });

});
