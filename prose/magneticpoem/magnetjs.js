$(document).ready(function() {

  $("#wo1").draggable();
  $("#wo2").draggable();
  $("#wo3").draggable();
  $("#wo4").draggable();
  $("#wo5").draggable();
  $("#wo6").draggable();
  $("#wo7").draggable();
  $("#wo9").draggable();

  $("#r2w1").draggable();

  // $("#picthree").click(function(){
  //   $("#styleone").show();
  // });

  $("#microtext").hover(function(){
    $("#styleone").show();
  });

  $("#bluecopy").click(function(){
    $("#animatedcap").show();
  });

  $("#typeinbox").click(function(){
    $(this).hide();
  });

})
