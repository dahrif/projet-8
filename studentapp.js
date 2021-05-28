$(document).ready(function(){
var studentsList;
function getall() {
  $(".studentsList").html(" ");
  $.ajax({
    url:"api/getStudents.php",
    method:"GET",
    success:function(data) {
      studentsList = JSON.parse(data);
      console.log(studentsList);
      for (var i = 0; i < studentsList.length; i++) {
        $(".studentsList").append('<li><h2>'+"Name: "+studentsList[i]["name"]+'</h2><h3>'+"FatherName: "+studentsList[i]["fathername"]+'</h3><h4>'+"Rollno: "+studentsList[i]["rollno"]+'</h4><h5>'+"Degree: "+studentsList[i]["degree"]+'</h5><h6>'+"Branch: "+studentsList[i]["branch"]);
      }
    }
  })
}
getall();

});

