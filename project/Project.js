$(document).ready(function () {
    var fxscr= $('#d0').height();
    var lastScroll=0;
    var h2=$('#d0').height()+$('#d1').height()-10;

    $(window).scroll(function () {
        var newScroll=$(window).scrollTop();
        if(newScroll>lastScroll && newScroll>fxscr)
            $('nav').fadeOut();
        else
            $('nav').fadeIn();
        lastScroll=newScroll;

        if(newScroll>h2)
            $('#d2 p').fadeIn(1500).css({'top':'30%'});

        if ($('[href="#d1"]').hasClass('active'))
            $('.dd1').css({'opacity':'1','top':'0'});
        if ($('[href="#d4"]').hasClass('active'))
            $('.dd2').css({'opacity':'1','top':'0'});
        if ($('[href="#d9"]').hasClass('active'))
            $('.dd3').css({'opacity':'1','top':'0'});
    });

    $('#down').click(function () {
        $('body,html').animate({scrollTop:0},2000)});

    $('a').click(function () {
        var hash=this.hash;
        $('body,html').animate({scrollTop:$(hash).offset().top-10},2000)});

    Calendar.setup({
        inputField: 'date_input1',
        button: 'date_btn1',
        ifFormat: '%Y/%m/%d',
        dateType: 'jalali'});
    Calendar.setup({
        inputField: 'date_input2',
        button: 'date_btn2',
        ifFormat: '%Y/%m/%d',
        dateType: 'jalali'});
})