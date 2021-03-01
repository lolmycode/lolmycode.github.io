$(document).ready(function() {

  alert("hi.");

  $("#picdrag").draggable();

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
