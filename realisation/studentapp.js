$(document).ready(function(){
var studentsList;
function getall() {
  $(".studentsList").html(" ");
  $.ajax({
    url:"/api/getclasses.php",
    method:"GET",
    success:function(data) {
      studentsList = JSON.parse(data);
      for (var i = 0; i < studentsList.length; i++) {
        $(".studentsList").append('<tr class="text-center"><td>' + studentsList[i]["numero"] + '</td><td>' + studentsList[i]["capacite"] + '</td><td>' + studentsList[i]["nb_tableaux"] + '</td><td>' + studentsList[i]["formateur"] +'</td><td><span class="btn" data-toggle="modal" data-target="#exampleModalCenter"><img src="edit.svg" width="30" height="30"></span></span><span class="btn delete-btn ml-2 mb-0 mt-0"><img src="trash.svg" width="30" height="30"></span><input type="hidden" value="" class="stdID"></td></tr>');
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
  $(".edit-form .cnumero").val(studentsList[index]["numero"]);
  $(".edit-form .ccapacite").val(studentsList[index]["capacite"]);
  $(".edit-form .cnb_tableaux").val(studentsList[index]["nb_tableaux"]);
  $(".edit-form .cformateur").val(studentsList[index]["formateur"]);
  $(".edit-form .sid").val(studentsList[index]["id"]);
});

// save-student-to-database
$(".save-student").click(function() {
  var Numero = $(".edit-form .cnumero").val();
  var Capacite = $(".edit-form .ccapacite").val();
  var Nb_tableaux = $(".edit-form .cnb_tableaux").val();
  var Formateur = $(".edit-form .cformateur").val();
  var sID = $(".edit-form .sid").val();

 //send to php file via ajax
 $.ajax({
  url:"api/editclasses.php",
  method:"POST",
  data:{
    sid : sID,
    numero : Numero,
    capacite : Capacite,
    nb_tableaux : Nb_tableaux,
    formateur : Formateur
  },
      success:function(data) {
      getall();
    }
})
})



// Add a student to database
$(".enrg-salle").click(function() {
  var Numero = $(".cnumero").val();
  var Capacite = $(".ccapacite").val();
  var Nb_tableaux = $(".cnb_tableaux").val();
  var Formateur = $(".cformateur").val();

  $.ajax({
    url:"/api/addclasses.php",
    method:"POST",
    data:{
      numero :Numero,
      capacite :Capacite,
      nb_tableaux :Nb_tableaux,
      formateur :Formateur
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
    url:"/api/deleteclasses.php",
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
  $(".add-form").show();
})
$(".save-student").click(function() {
$(".edit-form").hide();
})
$(".enrg-salle").click(function() {
$(".modal").hide();
location.reload();
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

