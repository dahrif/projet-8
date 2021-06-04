$(document).ready(function(){
var studentsList;
function getall() {
  $(".studentsList").html(" ");
  $.ajax({
    url:"/api/getStudents.php",
    method:"GET",
    success:function(data) {
      studentsList = JSON.parse(data);
      console.log(studentsList);
      for (var i = 0; i < studentsList.length; i++) {
        $(".studentsList").append('<tr><td>'+"Numero: "+studentsList[i]["numero"]+'</td><td>'+"capacité: "+studentsList[i]["capacite"]+'</td><td>'+"nombre de tableaux: "+studentsList[i]["nb_tableaux"]+'</td><td>'+"formateur: "+studentsList[i]["formateur"]+'</td><td><span class="update-btn">update</span><span class="delete-btn">delete</span><input type="hidden" value="" class="stdID"></td></tr>');
      }
    }
  })
}
getall();

//update-btn-on-click
$("body").on("click",".studentsList .update-btn",function() {
  $("tr").hide();
  $(".edit-form").show();
  var index = $(this).parents("tr").index();
  $(".edit-form .numero").val(studentsList[index]["numero"]);
  $(".edit-form .capacite").val(studentsList[index]["capacite"]);
  $(".edit-form .nb_tableaux").val(studentsList[index]["nb_tableaux"]);
  $(".edit-form .formateur").val(studentsList[index]["formateur"]);
  $(".edit-form .sid").val(studentsList[index]["id"]);
});

// save-student-to-database
$(".save-student").click(function() {
  var sName = $(".edit-form .numero").val();
  var sFname = $(".edit-form .capacite").val();
  var sRollno = $(".edit-form .nb_tableaux").val();
  var sDegree = $(".edit-form .formateur").val();
  var sID = $(".edit-form .sid").val();

 //send to php file via ajax
 $.ajax({
  url:"api/editStudents.php",
  method:"POST",
  data:{
    sid : sID,
    name : sName,
    fathername : sFname,
    rollno : sRollno,
    degree : sDegree,
    branch : sBranch
  },
      success:function(data) {
      getall();
    }
})
})



// Add a student to database
$(".submit-student").click(function() {
  var sName = $(".numero").val();
  var sFname = $(".capacite").val();
  var sRollno = $(".nb_tableaux").val();
  var sDegree = $(".formateur").val();

  $.ajax({
    url:"/api/addStudents.php",
    method:"POST",
    data:{
      name :sName,
      fathername :sFname,
      rollno :sRollno,
      degree :sDegree,
      branch :sBranch
    },
    success:function(data) {
    getall();
  }
  })
})
$("body").on("click",".delete-btn",function() {
  var index = $(this).parents("tr").index();
  $(".studentsList .stdID").val(studentsList[index]["id"]);
  var studentID =$(".studentsList .stdID").val();
  $.ajax({
    url:"/api/deleteStudent.php",
    method:"POST",
    data:{
      sid :studentID
    },
    success:function(data) {
      $(this).parent().remove();
      getall();
    }
  })
})
$(".downArrow").click(function() {
  $(".add-form").slideToggle("slow");
})
$(".save-student").click(function() {
$(".edit-form").hide();
})
$(".submit-student").click(function() {
$(".add-form").hide();
})
$(".close").click(function() {
$(".add-form").hide();
})
$(".close").click(function() {
$(".edit-form").hide("fast",function() {
getall();
});
})
})
