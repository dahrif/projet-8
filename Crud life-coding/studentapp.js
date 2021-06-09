$(document).ready(function () {
  var studentsList;
  function getall() {
    $(".studentslist").html(" ");
    $.ajax({
      url: "getstudent.php",
      method: "GET",
      success: function (data) {
        studentsList = JSON.parse(data);
        console.log(studentsList);
        for (var i = 0; i < studentsList.length; i++) {
          $(".studentslist").append('<tr><td>' + "Name: " + studentsList[i]["name"] + '</td><td>' + "FatherName: " + studentsList[i]["fathername"] + '</td><td>' + "Rollno: " + studentsList[i]["rollno"] + '</td><td>' + "Degree: " + studentsList[i]["degree"] + '</td><td>' + "Branch: " + studentsList[i]["branch"] + '</td><td><span class:"delete-btn">delete</span><input type=hidden class="stdID"</td></tr>');
        }
      }
    })
  }
  getall();

  $(".submit-student").click(function () {
    var sName = $(".studentname").val();
    var sFname = $(".studentfname").val();
    var sRollno = $(".studentrollno").val();
    var sDegree = $(".studentdegree").val();
    var sBranch = $(".studentbranch").val();

    $.ajax({
      url: "addstudent.php",
      method: "POST",
      data: {
        name: sName,
        fathername: sFname,
        rollno: sRollno,
        degree: sDegree,
        branch: sBranch
      },
      success: function (data) {
        getall();
      }
    })
  })
  $("body").on("click", ".delete-btn", function () {
    var index = $(this).parents("tr").index();
    $(".studentslist .stdID").val(studentsList[index]["id"]);
    var studentID = $(".studentslist .stdID").val();
    $.ajax({
      url: "deletestudent.php",
      method: "POST",
      data: {
        sid: studentID
      },
      success: function (data) {
        $(this).parent().remove();
        getall();
      }
    })
  })

  $(".save-student").click(function () {
    $(".edit-form").hide();
  })
  $(".submit-student").click(function () {
    $(".add-form").hide();
  })
  $(".close").click(function () {
    $(".add-form").hide();
  })
  $(".close").click(function () {
    $(".edit-form").hide("fast", function () {
      getll();
    });
  })
})