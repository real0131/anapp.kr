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
            $(".project-card.click")[0].removeClass("click");
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
    //TODO:add animation
    stopScroll();
});

$("#side-nav-menu-cancel-btn").click(function () {
    $(".side-nav").css({display : 'none'});
    startScroll();
});