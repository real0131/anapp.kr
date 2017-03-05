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

function carouselTransition(direction,target){
    var index = target.index(".item");
    var lastIndex = $(".item:nth-last-child(1)").index(".item");
    var width = target.width();
    console.log(index);
    if (direction =="left"){
        //render previous item at target's left position
        //if the target's index is first render last item
        //translate +100%
        //change active status
        //change carousel-indicator
        if(index != 0){
            $(".item:nth-child("+(index-1)+")")
                .css({left: "-100%"})
                .addClass("active");
            $(".item:nth-child("+(index-1)+"), .item:nth-child("+(index)+")")
                .animate({transform: "translate(100%,0px)"},500,function () {
                    $(".item:nth-child("+(index)+")").removeClass("active");
            });

        }else{
            $(".item:nth-last-child(1)")
                .css({left: "-100%"})
                .addClass("active");
            $(".item:nth-last-child(1), .item:nth-child("+(index)+")")
                .animate({transform: "translate(100%,0px)"},500,function () {
                    $(".item:nth-child("+(index)+")").removeClass("active");
                });
        }
    }else if (direction =="right"){
        if(index != lastIndex){}
        //render next item at target's right position
        //if the target's index is last render first item
        //position left -100
        //change carousel-indicator
    }
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
    console.log(active);
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
        //if target is not main-article function return false
        if($target.attr("class") == "main-article"){
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 900, 'swing', function () {
                window.location.hash = target;
            });
        } else{
            return false;
        }
    });
});
