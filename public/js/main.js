$('.project-card').click(function () {
    $(this).attr('click','clicked');
});

$(".project-card[click='clicked']").click(function () {
   $(this).removeAttr('click');
});

$("#side-menu-btn").click(function () {
   var width = $('.side-nav-table').width();
    console.log(width);
   $(".side-nav").css({display : '-webkit-flex',display : 'flex', zIndex : '200'});
    //TODO:add animation
});

$("#side-nav-menu-cancel-btn").click(function () {
    $(".side-nav").css({display : 'none'});
});