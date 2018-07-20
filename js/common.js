/* fastclick */
window.addEventListener('load', function() {
    new FastClick(document.body);
}, false);

//背景中央寄せ
function backgroundMargin() {
    var ww = $(window).width();
    var iw = $('#background img').width();
    var w2 = (ww - iw)/2;
    $('#background').css('margin-left',w2);
}

//スマホの判定
function deviceCechek() {
    var windowWitdth = $(window).width();
    if ( windowWitdth < 640 ) {
        if ( !$('#view_container').hasClass('device_sp') ) {
            $('#view_container').addClass('device_sp');
        }
    }else{
        if ( $('#view_container').hasClass('device_sp') ) {
            $('#view_container').removeClass('device_sp');
        }
    }
}

//stage横幅をスマホ閲覧時に調整する
function stageWidthSP() {
    if ($('#view_container').hasClass('device_sp')) {
        var windowWitdth = $(window).width();
        $('#stage').css('width','100%');
    }else{
        $('#stage').css('width','980');
    };
}

//画面サイズを拾ってページの高さを調整
function stageHeight() {
    var h  = $(window).height();
    var mh = h - 37;
    $('#stage').css('min-height',mh+'px')
}

function toDoubleDigits(num){
    num += '';
    if ( num.length === 1 ) {
        num = "0" + num;
    }
    return num;
};

function eventCountDown(){
    var from = new Date().getTime();
    var to   = new Date("2017/6/16 18:00:00").getTime();

    var countdown = ( to - from );
    var tmp  = Math.floor(countdown/1000);
    var sec  = toDoubleDigits(tmp % 60);
    var min  = toDoubleDigits(Math.floor(tmp/60) % 60);
    var hou  = toDoubleDigits(Math.floor(tmp/60/60) % 24);
    var day  = Math.floor(tmp/60/60/24);

    if ( countdown > 1 ) {
        $('.countdown_wrapper .countdown1').show();
        $('.countdown_wrapper .countdown1_close').hide();
        $('.countdown_wrapper .countdown1 .countDays').text(day);
        $('.countdown_wrapper .countdown1 .countHours').text(hou);
        $('.countdown_wrapper .countdown1 .countMinitues').text(min);
        $('.countdown_wrapper .countdown1 .countSecounds').text(sec);
    }else{
        $('.countdown_wrapper .countdown1').hide();
        $('.countdown_wrapper .countdown1_close').show();
    };

    setTimeout('eventCountDown()',1000);
};

function eventCountDown2(){
    var from = new Date().getTime();
    var to   = new Date("2017/6/20 00:00:00").getTime();

    var countdown = ( to - from );
    var tmp  = Math.floor(countdown/1000);
    var sec  = toDoubleDigits(tmp % 60);
    var min  = toDoubleDigits(Math.floor(tmp/60) % 60);
    var hou  = toDoubleDigits(Math.floor(tmp/60/60) % 24);
    var day  = Math.floor(tmp/60/60/24);

    if ( countdown > 1 ) {
        $('.countdown_wrapper .countdown2').show();
        $('.countdown_wrapper .countdown2_close').hide();
        $('.countdown_wrapper .countdown2 .countDays').text(day);
        $('.countdown_wrapper .countdown2 .countHours').text(hou);
        $('.countdown_wrapper .countdown2 .countMinitues').text(min);
        $('.countdown_wrapper .countdown2 .countSecounds').text(sec);
    }else{
        $('.countdown_wrapper .countdown2').hide();
        $('.countdown_wrapper .countdown2_close').show();
    };

    setTimeout('eventCountDown2()',1000);
};


//--------------------------------------
//　エイプリルフール2018用リダイレクト処理
//--------------------------------------
// $(function(){
//     //日付の取得
//     var now = new Date();
//     var M = now.getMonth() + 1;
//     var D = now.getDate();
//     //4月1日のみ
//     if ( M == '4' && D == '1' ) {
//         //append to cookie.js
//         $('head').append('<script type="text/javascript" src="./js/jquery.cookie.js" charset="UTF-8"></script>');
//         // 初回アクセスのみの処理
//         if($.cookie("access") == undefined) {
//             //初回アクセスを記録
//             $.cookie("access","onece");
//             //リダイレクト
//             // window.location.href = "http://ff14moo.moo.jp";
//             window.location.href = "http://ff14moo.moo.jp/moomoo_curry_2018.html";
//         }
//     }
// });


//--------------------------------------
//　Googleアナリティクスタグ
//--------------------------------------

$(function(){
    var Analytics = '';

    Analytics += '<!-- Global site tag (gtag.js) - Google Analytics -->';
    Analytics += '<script async src="https://www.googletagmanager.com/gtag/js?id=UA-116691661-1"></script>';
    Analytics += '<script>';
    Analytics += 'window.dataLayer = window.dataLayer || [];';
    Analytics += 'function gtag(){dataLayer.push(arguments);}';
    Analytics += 'gtag(\'js\', new Date());';
    Analytics += 'gtag(\'config\', \'UA-116691661-1\');';
    Analytics += '</script>';

    $('head').append(Analytics);
});


$(function(){

    eventCountDown();
    eventCountDown2();


    var url = window.location;
    var path = url.pathname.split('/');
    var file_name = path.pop();

    //スマホチェック
    deviceCechek();
    if( file_name == 'index.html') {
    }else{
        stageHeight();
    }
    // stageWidthSP();

    //containerに#background追加
    $('#view_container').prepend('<div id="background"><img><div></div></div>')

    //windowリサイズ時に背景の位置調整
    $(window).resize(function() {
        backgroundMargin();
        deviceCechek();
        if( file_name == 'index.html') {
        }else{
            stageHeight()
        }
        // stageWidthSP();
    });

    $('.tab_menu').click(function(){
        stageHeight()
    })

    // 背景画像指定
    var url = window.location;
    var path = url.pathname.split('/');
    var file_name = path.pop().slice(0,-5);

    var imageCheckUrl = './img/bg/'+file_name;

    $('#background img').attr('src','./img/bg/'+file_name+'.png').error(function(){
        $('#background img').attr('src','./img/bg/default.png');
    })

    $("#background img").bind("load",function(){
        backgroundMargin();
    });

    // メニュー表示
    $('#header .btn_menu,#menu ul').click(function() {
        if ( !$('#menu').hasClass('menu_on') ){
            $('#menu').addClass('menu_on');
            setTimeout(function(){
                $('#menu ul').css('opacity','1');
            },1);
        }else{
            $('#menu ul').css('opacity','0');
            setTimeout(function(){
                $('#menu').removeClass('menu_on');
            },300);
        }
    });

})
