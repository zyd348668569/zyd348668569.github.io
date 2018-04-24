$(function () {
    $(".top-banner-w").children().eq(1).click(function () {
        $(".top-banner").animate({opacity:0},600).hide(100);
    });
    $(".site-nav-send").mouseenter(function () {
        $(".site-nav-city").show();
    });

    $(".site-nav-send").mouseleave(function () {
        $(".site-nav-city").hide();
    });

    $(".fore").mouseenter(function () {
        $(".fore-li").show();
    });

    $(".fore").mouseleave(function () {
        $(".fore-li").hide();
    });
    $(".fore1").mouseenter(function () {
        $(".fore-li1").show();
    });

    $(".fore1").mouseleave(function () {
        $(".fore-li1").hide();
    });
    $(".fore2").mouseenter(function () {
        $(".fore-li2").show();
    });

    $(".fore2").mouseleave(function () {
        $(".fore-li2").hide();
    });

    var all = $("#all");
    var screen = $("#screen");
    var imgWidth = screen.width();
    var ul = $("#ul");
    var ol = $("#ol");
    var div = $("#arr");
    var spanArr = div.children();
    //2.复制第一张图片所在的li,添加到ul的最后面。
    var ulNewLi = ul.children("li").eq(0).clone();
    ul.append(ulNewLi);
    var olLiArr = ol.children();
    olLiArr.eq(0).addClass("current");

    //4.鼠标放到ol的li上切换图片
//    for(var i=0;i<olLiArr.length;i++){
//        //自定义属性，把索引值绑定到元素的index属性上
//        olLiArr[i].index = i;
//        olLiArr[i].onmouseover = function () {
//            //排他思想
//            for(var j=0;j<olLiArr.length;j++){
//                olLiArr[j].className = "";
//            }
//            this.className = "current";
//            //鼠标放到小的方块上的时候索引值和key以及square同步
////                    key = this.index;
////                    square = this.index;
//            key = square = this.index;
//            //移动盒子
//            ul.animate({left:-this.index*imgWidth});
//        }
//    }
    olLiArr.mouseover(function () {

        $(this).addClass("current").siblings().removeClass("current");
        key = square = $(this).index();
        ul.animate({left:-$(this).index()*imgWidth},0);

    });
    //5.添加定时器
    var timer = setInterval(autoPlaya,3000);

    //固定向右切换图片
    //两个定时器（一个记录图片，一个记录小方块）
    var key = 0;
    var square = 0;
    function autoPlaya(){
        //通过控制key的自增来模拟图片的索引值，然后移动ul
        key++;
        if(key>olLiArr.length){
            //图片已经滑动到最后一张，接下来，跳转到第一张，然后在滑动到第二张
            ul.css("left","0");
            key = 1;
        }
        ul.animate({left:-key*imgWidth},100);
        //通过控制square的自增来模拟小方块的索引值，然后点亮盒子
        //排他思想做小方块
        square++;
        if(square>olLiArr.length-1){//索引值不能大于等于5，如果等于5，立刻变为0；
            square = 0;
        }
    //    for(var i=0;i<olLiArr.length;i++){
    //        olLiArr[i].className = "";
    //
    //
    //    }
    //    olLiArr[square].className = "current";
    //}
        olLiArr.removeClass("current");
        olLiArr.eq(square).addClass("current");
    }

    //鼠标放上去清除定时器，移开后在开启定时器
    //all.onmouseover = function () {
    //    div.style.display = "block";
    //    clearInterval(timer);
    //}
        all.mouseover(function () {
            div.show();
            clearInterval(timer);
        });
    //all.onmouseout = function () {
    //    div.style.display = "none";
    //    timer = setInterval(autoPlay,3000);
    //}
        all.mouseout(function () {
            div.hide();
            timer = setInterval(autoPlaya,3000);
        });




    //6.左右切换图片（鼠标放上去显示，移开隐藏）
    spanArr[0].onclick = function () {
        //通过控制key的自增来模拟图片的索引值，然后移动ul
        key--;
        if(key<0){
            key = olLiArr.length-1;
            //先移动到最后一张，然后key的值取之前一张的索引值，然后在向前移动
            //ul[0].style.left = -imgWidth*(olLiArr.length)+"px";
            ul.css("left",-imgWidth*olLiArr.length);

        }
        ul.animate({left:-key*imgWidth},100);
        //通过控制square的自增来模拟小方块的索引值，然后点亮盒子
        //排他思想做小方块
        square--;
        if(square<0){//索引值不能大于等于5，如果等于5，立刻变为0；
            square = olLiArr.length-1;
        }
        //for(var i=0;i<olLiArr.length;i++){
        //    olLiArr[i].className = "";
        //}
        //olLiArr[square].className = "current";


        olLiArr.removeClass("current");
        olLiArr.eq(square).addClass("current");
    }
    spanArr[1].onclick = function () {
        //右侧的和定时器一模一样
        autoPlaya();
    }

    $(".main-right-in-promotion").mouseenter(function () {
        $(".main-right-in-line").css("transform", "translateX(0px)");
        $(".main-right-in-down1").show();
        $(".main-right-in-down2").hide();
    })
    $(".main-right-in-notice").mouseover(function () {
        $(".main-right-in-line").css("transform", "translateX(58px)");
        $(".main-right-in-down2").show();
        $(".main-right-in-down1").hide();
    })

    var seckillTime = setInterval(fn1,1000);

    function fn1() {
        var nowTime = new Date();
        var futureTime = new Date("2018/04/18 14:51:00");
        var timeSun = futureTime.getTime() - nowTime.getTime();
        var hour = parseInt(timeSun/1000/60/60);
        var minutes = parseInt(timeSun/1000/60%60);
        var seconds = parseInt(timeSun/1000%60);
        hour = hour<10?"0"+hour:hour;
        minutes = minutes<10?"0"+minutes:minutes;
        seconds = seconds<10?"0"+seconds:seconds;
        $("#timeone").children("span").html(hour);
        $("#timetwo").children().eq(2).html(minutes);
        $("#timethree").children().eq(2).html(seconds);
        if(timeSun<0){
            clearInterval(seckillTime);
            $(".seckill-left-four").html("本场已经结束");
            $("#timeone").children("span").html("00");
            $("#timetwo").children().eq(2).html("00");
            $("#timethree").children().eq(2).html("00");
        }
    }

    $(".seckill-center-all").find("a").mouseenter(function () {
        $(this).children().eq(0).animate({"opacity":0.8},100);
    });
    $(".seckill-center-all").find("a").mouseleave(function () {
        $(this).children().eq(0).animate({"opacity":1},100);
    });


    var ulFoue = $(".seckill-center-all");
    var picWidth = ulFoue.children().eq(0).width();
    var key1 = 0;
    var newul = ulFoue.children("ul").eq(0).clone();
    ulFoue.append(newul);
    var ulArrs = ulFoue.children("ul");

    //console.log(ulFoue.children("ul").length);
    $(".seckill-center-button-right").click(function () {
        key1++;
        if(key1>ulArrs.length-1){
            ulFoue.css("left","0");
            key1 = 1;
        }
        ulFoue.animate({left:-key1*picWidth},500);
    });

    $(".seckill-center-button-left").click(function () {
        key1--;
        if(key1<0){
            ulFoue.css("left",-picWidth*(ulArrs.length-1));
            key1 = ulArrs.length-2;
        }
        ulFoue.animate({left:-key1*picWidth},500);
    });


    var seckill = $(".seckill-right-one");
    var seckillUl = seckill.children("ul");
    var newSeckillLi = seckillUl.children("li").eq(0).clone();
    seckillUl.append(newSeckillLi);
    var seckillOl = $(".seckill-ol").children("li");
    console.log(seckillOl.length);
    var seckillUlWidth = seckillUl.children("li").eq(0).width();
    var seckillKey = 0;
    var seckillSquare = 0;
    var seckillTimer = setInterval(fn2,3000);

    function fn2(){
        seckillKey++;
        if(seckillKey>seckillOl.length){
            seckillUl.css("left","0");
            seckillKey = 1;
        }
        seckillUl.animate({"left":-seckillKey*seckillUlWidth},500);

        seckillSquare++;
        if(seckillSquare>seckillOl.length-1){
            seckillSquare = 0;
        }
        seckillOl.removeClass("olcurrent");
        seckillOl.eq(seckillSquare).addClass("olcurrent");
    }
    seckillOl.mouseenter(function () {
        clearInterval(seckillTimer);
        $(this).addClass("olcurrent").siblings().removeClass("olcurrent");
        seckillKey = seckillSquare = $(this).index();
        seckillUl.animate({"left":-$(this).index()*seckillUlWidth},500);
    });

    seckillOl.mouseleave(function () {
        seckillTimer = setInterval(fn2,3000);
    });




    });