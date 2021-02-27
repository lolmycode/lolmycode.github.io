$(document).ready(function() {

  // alert("You regret that thing from yesterday, don't you?");

  $("#picdrag").draggable();

  // $("#picthree").click(function(){
  //   $("#styleone").show();
  // });

  $("#microtext").hover(function(){
    $("#styleone").show();
  });

  $("#typeinbox").click(function(){
    $(this).hide();
  });

})
