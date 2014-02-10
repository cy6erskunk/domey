describe('Domey lib', function () {

    describe('innerHTML', function () {
        var div,
            expectedHTML = '<ul><li class="elem">1</li><li class="elem">2</li><li class="elem">3</li></ul>';

        beforeEach(function () {
            div = document.createElement('div');
            div.id = '#elem';
            div.className = 'trololo';
            div.innerHTML = expectedHTML;
            document.body.appendChild(div);
        });

        afterEach(function () {
            document.body.removeChild(div);
        });

        it('can get innerHTML', function () {
            expect(domey('#elem').html()).toEqual(expectedHTML);
        });

        it('can set innerHTML', function() {
            var newExpectedHTML = '<ul><li class="new_elem">1</li><li class="new_elem">222</li></ul>';
            domey('#elem').html(newExpectedHTML);
            expect(domey('#elem').html()).toEqual(newExpectedHTML);
        });
    });

});
