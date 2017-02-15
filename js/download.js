/**
 * Created by Administrator on 2017/2/15.
 */
$(function(){
    var jindu2=$('.jindu2');
    var baifenbi=$('.baifenbi');
    var p_font=$('.p_font');
    function autoplay(){
        jindu2.animate({width:'100%'},3000,function(){
            for(i=0;i<=100;i++){
                baifenbi.html('');
                baifenbi.html(i+'%');
            }
            p_font.html('下载完成');
        });

    }
    autoplay();
    setInterval(function(){
        autoplay();
    }, 3000);

    var tiao_left=$('.tiao_left');
    var tiao_right=$('.tiao_right');
    var yuan=$('.yuan');
    var tiao=$('.tiao');

    tiao_right.click(function(){
        yuan.animate({right:'60px'},200);
        tiao.css('background','#c6c5c5');
        yuan.css('background','#f1f1f1');

    });
    tiao_left.click(function(){
        yuan.animate({right:'30px'},200);
        tiao.css('background','#92d2ff');
        yuan.css('background','#26a5ff');

    });

    // var yuan=$('.yuan');
    // var tiao=$('.tiao');
    // yuan.click(function(){
    //     yuan.animate({right:'60px'},200);
    //     tiao.css('background','#c6c5c5');
    //     yuan.css('background','#f1f1f1');
    // })

});


