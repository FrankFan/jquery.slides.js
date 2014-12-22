/**
 * jQuery jslides 
 * recode by fanyong@gmail.com 
 * descrption: a jQuery plugin for slieds
 */
$(function () {
    var numpic = $('#slides li').size() - 1;
    var nownow = 0;
    var inout = 0;
    var TT = 0;
    var SPEED = 5000;

    $('#slides li').eq(0).siblings('li').css({ 'display': 'none' });

    var ctlStart = '<div class="ctls">';
    ctlContent = '';
    ctlEnd = '</div>';

    function AddI() {
        ctlContent = '<i class="ctl act"></i>';
        for (var i = 0; i <= numpic - 1; i++) {
            ctlContent += '<i class="ctl"></i>';
        }
        $("#slides").after(ctlStart + ctlContent + ctlEnd);
    }

    AddI();

    var pagination = $('.ctls i');
    pagination.on('click', DOTCHANGE);

    function DOTCHANGE() {
        var changenow = $(this).index();

        $('#slides li').eq(nownow).css('z-index', '900');
        $('#slides li').eq(changenow).css({ 'z-index': '800' }).show();
        pagination.eq(changenow).addClass('act').siblings('i').removeClass('act');
        $('#slides li').eq(nownow).fadeOut(400, function () { $('#slides li').eq(changenow).fadeIn(500); });
        nownow = changenow;
    }

    pagination.mouseenter(function () {
        inout = 1;
    });

    pagination.mouseleave(function () {
        inout = 0;
    });

    function GOGO() {
        var NN = nownow + 1;

        if (inout == 1) {
        } else {
            if (nownow < numpic) {
                $('#slides li').eq(nownow).css('z-index', '900');
                $('#slides li').eq(NN).css({ 'z-index': '800' }).show();
                pagination.eq(NN).addClass('act').siblings('i').removeClass('act');
                $('#slides li').eq(nownow).fadeOut(400, function () { $('#slides li').eq(NN).fadeIn(500); });
                nownow += 1;

            } else {
                NN = 0;
                $('#slides li').eq(nownow).css('z-index', '900');
                $('#slides li').eq(NN).stop(true, true).css({ 'z-index': '800' }).show();
                $('#slides li').eq(nownow).fadeOut(400, function () { $('#slides li').eq(0).fadeIn(500); });
                pagination.eq(NN).addClass('act').siblings('i').removeClass('act');

                nownow = 0;
            }
        }
        TT = setTimeout(GOGO, SPEED);
    }

    TT = setTimeout(GOGO, SPEED);
});