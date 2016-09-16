console.log('This would be the main JS file.');
$(document).ready(function(){
  $.ajax({
    url:"/Home/params.json",
    method:"GET"})
  .done(function(msg){
  alert("ajax done!");
    $("#main_content").empty().append(msg);
  });
});
