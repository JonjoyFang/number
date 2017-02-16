/**
 * Created by Administrator on 2017/2/15.
 */
$(function(){
    var jindu2=$('.jindu2');
    var baifenbi=$('.baifenbi');
    var p_font=$('.p_font');
    // function autoplay() {
    //     jindu2.animate({width: '100%'}, 3000, function () {
    //         // for (var i = 0; i <= 100; i++) {
    //         //     baifenbi.text(i + '%');
    //         // }
    //         // p_font.html('下载完成');
    //         // if(p_font.html=="下载完成"){
    //         //     setTimeout(tiaozhuan,2000);
    //         //     function tiaozhuan() {
    //         //         window.open('http://wh17010q4.10.alvye.org/number/check.html');
    //         //     }
    //         //
    //         // }
    //
    //     });
    // }
    var n=0;
    $('.dtn_down').click(function download(){
        jindu2.css('width',n+'%');
        baifenbi.html(n+'%');
        n++;
        var time=setTimeout(download,30);
        if(n>100) {
            clearTimeout(time);
            p_font.html('下载完成');
            // setTimeout(function (){location.href = "http://wh17010q4.10.alvye.org/number/check.html"},2000);
            setTimeout(function (){open("check.html")},2000);
        }
    });



    // autoplay();
    // setInterval(function(){
    //     autoplay();
    // }, 3000);

    // var tiao_left=$('.tiao_left');
    // var tiao_right=$('.tiao_right');
    // var yuan=$('.yuan');
    // var tiao=$('.tiao');
    //
    // tiao_right.click(function(){
    //     yuan.animate({right:'60px'},200);
    //     tiao.css('background','#c6c5c5');
    //     yuan.css('background','#f1f1f1');
    //
    // });
    // tiao_left.click(function(){
    //     yuan.animate({right:'30px'},200);
    //     tiao.css('background','#92d2ff');
    //     yuan.css('background','#26a5ff');
    //
    // });

    var yuan=$('.yuan');
    var tiao=$('.tiao');
    var i=0;
    yuan.click(function(){
        i++;
        if(i%2==1){
            yuan.animate({right:'60px'},200);
            tiao.css('background','#c6c5c5');
            yuan.css('background','#f1f1f1');
        }
        else{
            yuan.animate({right:'30px'},200);
            tiao.css('background','#92d2ff');
            yuan.css('background','#26a5ff');
        }

    });


    $('.gengxin').click(function(){
        location.href="http://wh17010q4.10.alvye.org/number/checking.html";
    })

    $('.back').click(function(){
        location.href="http://wh17010q4.10.alvye.org/number/download.html";
    });
    $('.back2').click(function(){
        location.href="http://wh17010q4.10.alvye.org/number/check.html";
    })

});


