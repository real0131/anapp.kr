var param = $('#admin-login').serialize();
$.ajax({
   type:"POST",
   url:"/login",
   data: param,
   success:function (data) {
       console.log(data);
   },
   error:function (err) {
       console.log(err);
   }
});