$(function(){
    nm_list_layout();
    shout_macro_layout();
    selected_language();
    import_text();
    input_now_time();
    delete_time();
    make_shout_macro();
    copy_textarea();
    over_two_hour();
    all_reset();
    $('select').change(function(){
        check_color();
    })
});

var nm_array = [
    ['1', '科里多仙人刺', 'A', '仙人掌', '科里多仙人刺', 'Saboten'],
    ['2', '常风领主', 'W', '章鱼', '常风领主', 'Tako'],
    ['3', '忒勒斯', 'A', '鸟人', '忒勒斯', 'Teles'],
    ['4', '常风皇帝', 'A', '蜻蜓', '常风皇帝', 'Emperor'],
    ['5', '卡利斯托', 'E', '巨熊', '卡利斯托', 'Callist'],
    ['6', '群偶', 'L', '群偶', '群偶', 'Number'],
    ['7', '哲罕南', 'A', '台风', '哲罕南', 'Jahn'],
    ['8', '阿米特', 'F', '暴龙', '阿米特', 'Amemet'],
    ['9', '盖因', 'I', '席兹', '盖因', 'Caym'],
    ['10', '庞巴德', 'E', '贪吃鬼' , '庞巴德', 'Bomber'],
    ['11', '塞尔凯特', 'E', '皮皮虾', '塞尔凯特', 'Serket'],
    ['12', '武断魔花茱莉卡', 'I', '魔界花', '武断魔花茱莉卡', 'Julika'],
    ['13', '白骑士', 'L', '无头骑士', '白骑士', 'Rider'],
    ['14', '波吕斐摩斯', 'I', '独眼', '波吕斐摩斯', 'Polyp'],
    ['15', '阔步西牟鸟', 'A', '祖', '阔步西牟鸟', 'Simurgh'],
    ['16', '极其危险物质', 'F', '爆弹怪', '极其危险物质', 'King'],
    ['17', '法夫纳', 'F', '法夫纳', '法夫纳', 'Fafnir'],
    ['18', '阿玛洛克', 'I', '阿玛洛克', '阿玛洛克', 'Rock'],
    ['19', '拉玛什图', 'A', '拉玛什图', '拉玛什图', 'Lama'],
    ['20', '帕祖祖', 'A', '帕祖祖', '帕祖祖', 'Pazuzu']
];

function nm_list_layout() {
    var insert_hour = '';
    insert_hour += '<select class="hour">';
    insert_hour += '<option value="--" selected>--';
    for (var i = 0; i < 24; i++) {
        var h = ('0' + i).slice(-2);
        insert_hour += '<option value="'+h+'">'+h;
    }
    insert_hour += '</select>';
    var insert_minite = '';
    insert_minite += '<select class="minite">';
    insert_minite += '<option value="--" selected>--';
    for (var i = 0; i < 60; i++) {
        var m = ('0' + i).slice(-2);
        insert_minite += '<option value="'+m+'">'+m;
    }
    insert_minite += '</select>';

    var insert = '';
    for (var i = 0; i < nm_array.length; i++) {
        insert += '<table class="nm_list" id="nm_'+nm_array[i][0]+'"><tr>';
        insert += '<td>EL<p class="nm_el">'+nm_array[i][0]+'</p></td>';
        if ( nm_array[i][2] == 'A' ) {
            var elemental_icon = '<img class="ele_icon" src="./img/eureka_weapon_progress/elemental_air.png">';
        } else if ( nm_array[i][2] == 'F' ) {
            var elemental_icon = '<img class="ele_icon" src="./img/eureka_weapon_progress/elemental_fire.png">';
        }if ( nm_array[i][2] == 'I' ) {
            var elemental_icon = '<img class="ele_icon" src="./img/eureka_weapon_progress/elemental_ice.png">';
        }if ( nm_array[i][2] == 'L' ) {
            var elemental_icon = '<img class="ele_icon" src="./img/eureka_weapon_progress/elemental_lightning.png">';
        }if ( nm_array[i][2] == 'E' ) {
            var elemental_icon = '<img class="ele_icon" src="./img/eureka_weapon_progress/elemental_earth.png">';
        }if ( nm_array[i][2] == 'W' ) {
            var elemental_icon = '<img class="ele_icon" src="./img/eureka_weapon_progress/elemental_water.png">';
        }
        insert += '<td>'+elemental_icon+' <p class="nm_name" name-ja="'+nm_array[i][1]+'" name-en="'+nm_array[i][4]+'">'+nm_array[i][1]+'</p></td>';
        insert += '<td><input class="nm_text" type="text" value="'+nm_array[i][3]+'" name-ja="'+nm_array[i][3]+'" name-en="'+nm_array[i][5]+'"></td>';
        insert += '<td>'+insert_hour+':'+insert_minite+'</td>';
        insert += '<td><button class="now_time" id="now_time_btn_'+nm_array[i][0]+'">当前时刻击杀</button></td>';
        insert += '<td><button class="reset" id="reset_btn_'+nm_array[i][0]+'"><img class="dust_box" src="./img/eureka_weapon_progress/icon_dust.png" data-1="./img/eureka_weapon_progress/icon_dust.png" data-2="./img/eureka_weapon_progress/icon_gorilla.png"></button></td>';
        insert += '</tr></table>';
    }
    $('#nm_time_keeper').append(insert);
}

function shout_macro_layout(){
    $('#nm_shout_macro').append('模板：<br>')
    $('#nm_shout_macro').append('<div class="template_box box1"></div>')
    $('#nm_shout_macro .template_box.box1').append('　<label for="template_1"><input type="radio" name="template_type" id="template_1" value="template_1" checked>击杀记录＋时间排序</label><br>')
    $('#nm_shout_macro .template_box.box1').append('　<label for="template_2"><input type="radio" name="template_type" id="template_2" value="template_2">全NM显示＋时间排序</label><br>')
    $('#nm_shout_macro .template_box.box1').append('　<label for="template_3"><input type="radio" name="template_type" id="template_3" value="template_3">击杀记录＋EL排序</label><br>')
    $('#nm_shout_macro .template_box.box1').append('　<label for="template_4"><input type="radio" name="template_type" id="template_4" value="template_4">全NM显示＋EL排序</label><br>')
    $('#nm_shout_macro').append('<div class="template_box box2"></div>')
    $('#nm_shout_macro .template_box.box2').append('　<label for="chat_1"><input type="radio" name="chat_type" id="chat_1" value="chat_1" checked>不指定</label><br>')
    $('#nm_shout_macro .template_box.box2').append('　<label for="chat_2"><input type="radio" name="chat_type" id="chat_2" value="chat_2">/shout</label><br>')
    $('#nm_shout_macro .template_box.box2').append('　<label for="chat_3"><input type="radio" name="chat_type" id="chat_3" value="chat_3">/party</label><br>')
    $('#nm_shout_macro').append('<a id="make_macro_btn" class="btn_M center">文本生成</a>')
    $('#nm_shout_macro').append('<a id="copy_textarea_btn" class="btn_M center">复制到剪切板</a><br>')
    $('#nm_shout_macro').append('<textarea class="shout_macro_text">点击“文本生成”后，将会以左侧的预览为基础生成文本。例如：\n\n仙人掌[00:00]、章鱼[01:01]、鸟人[03:03]、蜻蜓[05:05]、巨熊[07:07]、群偶[09:09]、台风[11:11]、暴龙[13:13]、席兹[15:15]、贪吃鬼[17:17]、皮皮虾[19:19]\n\n如果是上述的文本形式，可以点击“导入”按钮导入网页。（现在点击导入即可体验）</textarea><br>')
    $('#nm_shout_macro').append('<a id="import_text_btn" class="btn_M center">导入</a>')
    $('#nm_shout_macro').append('<a id="all_reset_btn" class="btn_M center">复位</a><br>')
    $('#nm_shout_macro').append('NM地图：<br>')
    $('#nm_shout_macro').append('<a href="./img/eureka_weapon_progress/eureka_nm_map.jpg" rel="lightbox"><img src="./img/eureka_weapon_progress/eureka_nm_map.jpg" class="map_thumb"></a>')
}

function import_text() {
    $(document).on('click', '#import_text_btn',function(){
        var import_array = [];
        var import_text  = $('.shout_macro_text').val();
        var temp_text = import_text.split('\n\n');
        // console.log(temp_text);
        if (temp_text.length > 1) {
          import_text = temp_text[1];
        } else {
          import_text = temp_text[0];
        }
        // console.log(import_text);
        import_array = import_text.split( '、' );
        // console.log(import_array);
        for (var i = import_array.length - 1; i >= 0; i--) {
            import_array[i] = import_array[i].replace(/ /g,"");
            import_array[i] = import_array[i].replace(/\[/g,"、");
            import_array[i] = import_array[i].replace(/\(/g,"、");
            import_array[i] = import_array[i].replace(/\:/g,"、");
            import_array[i] = import_array[i].replace(/\]/g,"");
            import_array[i] = import_array[i].replace(/\)/g,"");
            import_array[i] = import_array[i].replace(//g,"");
            import_array[i] = import_array[i].replace(//g,"");
            import_array[i] = import_array[i].replace(//g,"");
            import_array[i] = import_array[i].replace(//g,"");
            import_array[i] = import_array[i].replace(//g,"");
            import_array[i] = import_array[i].replace(//g,"");
            import_array[i] = import_array[i].replace(//g,"");
            import_array[i] = import_array[i].replace(//g,"");
            import_array[i] = import_array[i].replace(//g,"");
            import_array[i] = import_array[i].replace(//g,"");
            import_array[i] = import_array[i].replace(//g,"");
            import_array[i] = import_array[i].replace(//g,"");
            import_array[i] = import_array[i].replace(//g,"");
            import_array[i] = import_array[i].replace(//g,"");
            import_array[i] = import_array[i].replace(//g,"");
            import_array[i] = import_array[i].replace(//g,"");
            import_array[i] = import_array[i].replace(//g,"");
            import_array[i] = import_array[i].replace(//g,"");
            import_array[i] = import_array[i].replace(//g,"");
            import_array[i] = import_array[i].replace(//g,"");
            import_array[i] = import_array[i].replace(//g,"");
            import_array[i] = import_array[i].split( '、' );
        }
        for (var i = import_array.length - 1; i >= 0; i--) {
          for (var j = 0; j < nm_array.length; j++) {
            // console.log(import_array[i][0], nm_array[j][3])
            if (import_array[i][0].indexOf(nm_array[j][3]) >= 0 || import_array[i][0].indexOf(nm_array[j][4]) >= 0) {
              $('#nm_' + (j + 1)).find('.hour').val(import_array[i][1]);
              $('#nm_' + (j + 1)).find('.minite').val(import_array[i][2]);
            }
          }
        }
        check_color();
    })
}

function input_now_time() {
    $(document).on('click', '.now_time',function(){
        var now = new Date();
        var h = now.getHours();
        var m = now.getMinutes();
        var hh = ('0' + h).slice(-2);
        var mm = ('0' + m).slice(-2);

        var nm_id = $(this).attr('id').slice('13');

        $('#nm_'+nm_id).find('.hour').val(hh);
        $('#nm_'+nm_id).find('.minite').val(mm);

        check_color();
    })
}

function delete_time() {
    $(document).on('click', '.reset',function(){
        var nm_id = $(this).attr('id').slice('10');

        $('#nm_'+nm_id).find('.hour').val('--');
        $('#nm_'+nm_id).find('.minite').val('--');

        check_color();
    })
}

function check_color() {
    for (var i = 0; i < nm_array.length; i++) {
        var hour   = $('.nm_list').eq(i).find('.hour').val();
        var minite = $('.nm_list').eq(i).find('.minite').val();
        if ( hour >= 0 && minite >= 0) {
            $('.nm_list').eq(i).addClass('check');
        }else{
            $('.nm_list').eq(i).removeClass('check');
        }
    }
}

function over_two_hour() {
    for (var i = nm_array.length - 1; i >= 0; i--) {
        var now = new Date();
        var h = now.getHours();
        var m = now.getMinutes();
        var hh = ('0' + h).slice(-2);
        var mm = ('0' + m).slice(-2);
        var now_time = hh+mm;

        var nm_hour   = $('.nm_list').eq(i).find('.hour').val();
        var nm_minite = $('.nm_list').eq(i).find('.minite').val();
        var nm_time   = nm_hour + nm_minite;

        //00:00またぎ処理
        if ( now_time < nm_time ) {
        // if ( now_time < 400 && nm_time > 2000 ) {
            now_time = Number(now_time)+2400;
        }

        if ( now_time >= (Number(nm_time) + 200) ) {
            $('.nm_list').eq(i).addClass('over_two_hour');
        }else{
            $('.nm_list').eq(i).removeClass('over_two_hour');
        }
    }

    setTimeout('over_two_hour()', 1000);
}

function all_reset() {
    $(document).on('click', '#all_reset_btn',function(){
        for (var i = nm_array.length - 1; i >= 0; i--) {
            $('#nm_'+(i+1)).removeClass('check');
            $('#nm_'+(i+1)).find('.hour').val('--');
            $('#nm_'+(i+1)).find('.minite').val('--');
        }
    });
}

function selected_language() {
    $(document).on('click', '.selected_language a',function(){
        //reset
        $('.selected_language a').removeClass('current');
        $(this).addClass('current');

        if ( $('#la_ja').hasClass('current') ) {
            for (var i = nm_array.length - 1; i >= 0; i--) {
                var name = $('.nm_list').eq(i).find('.nm_name').attr('name-ja');
                $('.nm_list').eq(i).find('.nm_name').text(name);
                var text = $('.nm_list').eq(i).find('.nm_text').attr('name-ja');
                $('.nm_list').eq(i).find('.nm_text').val(text);
            }
        } else if ( $('#la_en').hasClass('current') ) {
            for (var i = nm_array.length - 1; i >= 0; i--) {
                var name = $('.nm_list').eq(i).find('.nm_name').attr('name-en');
                $('.nm_list').eq(i).find('.nm_name').text(name);
                var text = $('.nm_list').eq(i).find('.nm_text').attr('name-en');
                $('.nm_list').eq(i).find('.nm_text').val(text);
            }
        }
    })
}

function make_shout_macro() {
    $('#make_macro_btn').click(function(){
        var now = new Date();
        var h = now.getHours();
        var m = now.getMinutes();
        now = Number(h + '' + m);
        var time_check_array = [];
        var macro_nm_array   = [];
        var macro_nm_array2  = [];

        for (var i = 0; i < 20; i++) {
            var nm_hour   = $('#nm_'+(i+1)).find('.hour').val();
            var nm_minite = $('#nm_'+(i+1)).find('.minite').val();
            var nm_time   = nm_hour + nm_minite;
            if ( nm_time == '----' ) {
                time_check_array.push(2360);
            } else {
              time_check_array.push(Number(nm_time));
            }
        }

        var min = Math.min.apply(null, time_check_array);
        var max = Math.max.apply(null, time_check_array);

        for (var i = 0; i < 20; i++) {
            var nm_array  = [];
            var nm_el     = $('#nm_'+(i+1)).find('.nm_el').text();
            var nm_name   = $('#nm_'+(i+1)).find('.nm_name').text();
            var nm_text   = $('#nm_'+(i+1)).find('.nm_text').val();
            var nm_hour   = $('#nm_'+(i+1)).find('.hour').val();
            var nm_minite = $('#nm_'+(i+1)).find('.minite').val();
            var nm_time   = nm_hour + nm_minite;

            if ( nm_time == '----' ) {
                nm_array.push(9999);
            } else {
                if ( min <= 500 && 2000 <= max ) {
                    if ( Number(nm_time) <= 500 ) {
                        nm_array.push((Number(nm_time)+3000));
                    } else {
                        nm_array.push(Number(nm_time));
                    }
                } else {
                    nm_array.push(nm_time);
                }
            }
            nm_array.push(Number(nm_el));
            nm_array.push(nm_name);
            nm_array.push(nm_text);
            if (now - parseInt(nm_time) >= 200 || now - parseInt(nm_time) < 0) {
              nm_array.push('--');
              nm_array.push('--');
            } else {
              nm_array.push(nm_hour);
              nm_array.push(nm_minite);
            }

            macro_nm_array.push(nm_array);
        }

        var templateType = $('input[name=template_type]:checked').val();

        if ( templateType == 'template_1' ) {
            for (var i = 0; i < macro_nm_array.length; i++) {
                if ( macro_nm_array[i][0] != '9999' ) {
                    macro_nm_array2.push(macro_nm_array[i])
                }
            }
            macro_nm_array2.sort(
                function(a,b){
                    var a = a[0];
                    var b = b[0];
                        if( a > b ) return 1;
                        if( a < b ) return -1;
                    return 0;
                }
            );
        } else if ( templateType == 'template_2' ) {
            macro_nm_array2 = macro_nm_array;
            macro_nm_array2.sort(
                function(a,b){
                    var a = a[0];
                    var b = b[0];
                        if( a > b ) return 1;
                        if( a < b ) return -1;
                    return 0;
                }
            );
        } else if ( templateType == 'template_3' ) {
            for (var i = 0; i < macro_nm_array.length; i++) {
                if ( macro_nm_array[i][0] != '9999' ) {
                    macro_nm_array2.push(macro_nm_array[i])
                }
            }
            macro_nm_array2.sort(
                function(a,b){
                    var a = a[1];
                    var b = b[1];
                        if( a > b ) return 1;
                        if( a < b ) return -1;
                    return 0;
                }
            );
        } else if ( templateType == 'template_4' ) {
            macro_nm_array2 = macro_nm_array;
            macro_nm_array2.sort(
                function(a,b){
                    var a = a[1];
                    var b = b[1];
                        if( a > b ) return 1;
                        if( a < b ) return -1;
                    return 0;
                }
            );
        }

        var insert_textarea = '';

        //マクロ用
        // insert_textarea += '/sh ';
        // for (var i = 0; i < macro_nm_array2.length; i++) {
        //     insert_textarea += macro_nm_array2[i][3];
        //     insert_textarea += '['+macro_nm_array2[i][4]+':'+macro_nm_array2[i][5]+']';
        //     if ( macro_nm_array2.length != i+1 ) {
        //         if ( ((i+1) % 8) == 0 ) {
        //             insert_textarea += '\n';
        //             insert_textarea += '/wait 2 ';
        //             insert_textarea += '\n';
        //             insert_textarea += '/sh ';
        //         }else{
        //             insert_textarea += '、';
        //         }
        //     }
        // }

        //一発送信用
        var chatType = $('input[name=chat_type]:checked').val();
        if ( chatType == 'chat_1' ) {
            insert_textarea += '';
        } else if ( chatType == 'chat_2' ) {
            insert_textarea += '/sh ';
        } else if ( chatType == 'chat_3' ) {
            insert_textarea += '/p ';
        }
        if ( $('#la_en').hasClass('current') ) {
            insert_textarea += '(GMT+9) ';
        }
        for (var i = 0; i < macro_nm_array2.length; i++) {
            insert_textarea += macro_nm_array2[i][3];
            var _srt = ''
            // if ( macro_nm_array2[i][4] == 'up' || macro_nm_array2[i][5] == 'up' ) {
            //   _srt = '可触发';
            // } else if ( macro_nm_array2[i][4] == '--' || macro_nm_array2[i][5] == '--' ) {
            //   _srt = '失联或可触发';
            // } else {
            //   _srt = macro_nm_array2[i][4]+':'+macro_nm_array2[i][5];
            // }
            _srt = macro_nm_array2[i][4]+':'+macro_nm_array2[i][5];
            insert_textarea += '[' + _srt + ']';
            if ( macro_nm_array2.length != i+1 ) {
                insert_textarea += '、';
            }
        }
        $('.shout_macro_text').val(insert_textarea);

    })
}

function execCopy(string){
    var temp = document.createElement('div');

    temp.appendChild(document.createElement('pre')).textContent = string;

    var s = temp.style;
    s.position = 'fixed';
    s.left = '-100%';

    document.body.appendChild(temp);
    document.getSelection().selectAllChildren(temp);

    var result = document.execCommand('copy');

    document.body.removeChild(temp);
    // true なら実行できている falseなら失敗か対応していないか
    return result;
}

function copy_textarea() {
    $(document).on('click', '#copy_textarea_btn', function(){
        var copy_text = $('.shout_macro_text').val();
        if(execCopy(copy_text)){
            alert('复制成功');
        } else {
            alert('浏览器不支持');
        }
    });
}

$(function(){
    cheet('↑ x ↓ b l y r a', function () {
    // cheet('↑ ↑ ↑', function () {
        if ( $('.dust_box').hasClass('gorilla') ) {
            var src = $('.dust_box').attr('data-1');
            $('.dust_box').removeClass('gorilla').attr('src', src);
            $('.go_to_top').removeClass('gorilla').text('>').remove('img');
        }else{
            var src = $('.dust_box').attr('data-2');
            $('.dust_box').addClass('gorilla').attr('src', src);
            $('.go_to_top').addClass('gorilla').text('').append('<img src="./img/eureka_weapon_progress/icon_gorilla.png">');
        }
    });
});
