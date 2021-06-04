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
        $(".studentsList").append('<tr><td>'+"Name: "+studentsList[i]["name"]+'</td><td>'+"FatherName: "+studentsList[i]["fathername"]+'</td><td>'+"Rollno: "+studentsList[i]["rollno"]+'</td><td>'+"Degree: "+studentsList[i]["degree"]+'</td><td>'+"Branch: "+studentsList[i]["branch"]+'<span class="update-btn">update</span><span class="delete-btn">delete</span><input type="hidden" value="" class="stdID"></td></tr>');
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
  $(".edit-form .studentName").val(studentsList[index]["name"]);
  $(".edit-form .studentFname").val(studentsList[index]["fathername"]);
  $(".edit-form .studentRollno").val(studentsList[index]["rollno"]);
  $(".edit-form .studentDegree").val(studentsList[index]["degree"]);
  $(".edit-form .studentBranch").val(studentsList[index]["branch"]);
  $(".edit-form .sid").val(studentsList[index]["id"]);
});

// save-student-to-database
$(".save-student").click(function() {
  var sName = $(".edit-form .studentName").val();
  var sFname = $(".edit-form .studentFname").val();
  var sRollno = $(".edit-form .studentRollno").val();
  var sDegree = $(".edit-form .studentDegree").val();
  var sBranch = $(".edit-form .studentBranch").val();
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
  var sName = $(".studentName").val();
  var sFname = $(".studentFname").val();
  var sRollno = $(".studentRollno").val();
  var sDegree = $(".studentDegree").val();
  var sBranch = $(".studentBranch").val();

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
