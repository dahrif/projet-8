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
          $(".studentsList").append('<tr><th>Name</th><th>Fathername</th><th>Rollno</th><th>Degree</th>Branch<th>Branch</th></tr>');
          for (var i = 0; i < studentsList.length; i++) {
            $(".studentsList").append('<tr><td>'+"Name: "+studentsList[i]["name"]+'</td><td>'+"FatherName: "+studentsList[i]["fathername"]+'</td><td>'+"Rollno: "+studentsList[i]["rollno"]+'</td><td>'+"Degree: "+studentsList[i]["degree"]+'</td><td>'+"Branch: "+studentsList[i]["branch"]+'</td></tr>');
          }
        }
      })
    }
    getall();
    
    // Add a student to database
    $(".submit-student").click(function() {
      var sName = $(".studentName").val();
      var sFname = $(".studentFname").val();
      var sRollno = $(".studentRollno").val();
      var sDegree = $(".studentDegree").val();
      var sBranch = $(".studentBranch").val();
    
      $.ajax({
        url:"api/addStudents.php",
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
     })