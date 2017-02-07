$('.project-card').click(function () {
    $(this).attr('click','clicked');
});

$(".project-card[click='clicked']").click(function () {
   $(this).removeAttr('click');
});