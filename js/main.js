$(document).ready(function () {


    var rangeSlider = function(){
        var range = $('.range-slider__range'),
            value = $('.range-slider__value');

        value.text(range.attr('value') + ' дней');

        range.on('input', function(){

            var el = $(this);

            var width = el.width();

            var newPoint = (el.val() - el.attr("min")) / (el.attr("max") - el.attr("min"));


            if (newPoint <= 0) { newPlace = 45 + 'px'; }
            else if (newPoint >= 1) { newPlace = width - 42 + 'px'; }
            else {
                var newPlace = (width * (newPoint/1.75))+ 50 + 'px';
            }

            var val = el.val().slice(-1);
            var text = el.val() > 10 && el.val() < 20 ? ' дней' : +val == 1 ? ' день' : +val >= 2 && +val <= 4 ? ' дня' : ' дней' ;

            value
                .css({
                    left: newPlace
                })
                .text(el.val() + text);
        });
    };

    var switchBtn = function() {
        $('.section__name_switcher').on('click', function(e) {
            e.preventDefault();
            $('.section__value_text').toggleClass('hidden');
            $('.switcher-after').toggleClass('switcher-active');
        });
    };

    var tooltip = function() {
        $(this).on('click', function(e) {
            e.preventDefault();
        });
        $('.section__tariff-info').hover(function() {
            console.log('asd');
            $('.tariff-info__tooltip').css('visibility', 'visible');
        }, function() {
            $('.tariff-info__tooltip').css('visibility', 'hidden');
        });
    };


    rangeSlider();
    switchBtn();
    tooltip();



});
