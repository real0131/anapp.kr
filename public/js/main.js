function stopScroll(){
    $('body').on('scroll touchmove mousewheel', function(e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    });
}

function startScroll(){
    $('body').off('scroll touchmove mousewheel');
}

$('.project-card').click(function () {
    //TODO:add mobile bypass
    if($(this).attr('class') != 'project-card click'){
        if(!$(".project-card.click")[0]){
            $(this).addClass("click");
        } else {
            $(".project-card.click").removeClass("click");
            $(this).addClass("click");
        }
    }else {
        $(this).removeClass("click");
    }
});

$("#side-menu-btn").click(function () {
   var width = $('.side-nav-table').width();
   $(".side-nav").css({display : '-webkit-flex',display : 'flex', zIndex : '200'});
   $(".side-nav-table")
       .css({position : "fixed", left : (-1 * width)+"%" })
       .animate({"left": "0%"},400);
    //TODO:add animation0
    stopScroll();
});

$("#side-nav-menu-cancel-btn").click(function () {
    var width = $('.side-nav-table').width();
    $(".side-nav-table").animate({"left": (-1 * width)+"%"},400,function () {
        $(".side-nav").css({display : 'none'});
    });
    startScroll();
});

$(".carousel-button.left").click(function () {
    var active = $(".item.active").index(".item");
    $(".item.active").removeClass("active");
    $(".indicator-item.active").removeClass("active");
    if(active != 0){
        $(".item:nth-child("+ (active) +")").addClass("active");
        $(".indicator-item:nth-child("+ (active) +")").addClass("active");
    }else {
        $(".item:nth-last-child(1)").addClass("active");
        $(".indicator-item:nth-last-child(1)").addClass("active");
    }
});

$(".carousel-button.right").click(function () {
    var active = $(".item.active").index(".item");
    var lastIndex = $(".item:nth-last-child(1)").index(".item");
    $(".item.active").removeClass("active");
    $(".indicator-item.active").removeClass("active");
    if(active != lastIndex){
        active +=2;
        $(".item:nth-child("+ (active) +")").addClass("active");
        $(".indicator-item:nth-child("+ (active) +")").addClass("active");
    }else {
        $(".item:nth-child(1)").addClass("active");
        $(".indicator-item:nth-child(1)").addClass("active");
    }
});

/* smooth scroll */
$(document).ready(function(){
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
});
