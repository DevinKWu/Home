console.log('This would be the main JS file.');
$(document).ready(function(){
  $.ajax({
    url:"/Home/params.json",
    method:"GET"})
  .done(function(msg){
		alert("ajax done!");
		$("#main_content").empty();
		$("#main_content").append("<p>","name:",msg.name,"</p>");
		$("#main_content").append("<p>","tagline:",msg.tagline,"</p>");
		$("#main_content").append("<p>","body:",msg.body,"</p>");
		$("#main_content").append("<p>","note:",msg.note,"</p>");
  });
});
