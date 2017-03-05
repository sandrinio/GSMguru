$(document).ready(function() {
  

  

  $('#billboardBtn').on('click', function () {
    $.ajax({
      type: 'POST',
      url: '/news/uploadBanner',
      success: function(response){
        $('#responseText').text(response);
        console.log(response);
      },
      error: function(){
        $('#responseText').text("failed")
      }
    });
  });


});
