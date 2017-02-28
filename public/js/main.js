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
    console.log(width);
   $(".side-nav").css({display : '-webkit-flex',display : 'flex', zIndex : '200'});
   $(".side-nav-table").css({"transform" : "translate(-100%,0px)"}).animate({"transform":"translate(100%,0px)"},300);
    //TODO:add animation
    stopScroll();
});

$("#side-nav-menu-cancel-btn").click(function () {
    $(".side-nav").css({display : 'none'});
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