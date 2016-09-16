console.log('This would be the main JS file.');
$(document).ready(function(){alert("Hello World!");$.ajax({url:"../params.json",method:"GET"}).done(function(msg){$("#main_content").empty().append(msg);});});
