    $("#register").click(function() {
    var email = $("#email").val();
    var password = $("#password").val();
    var cpassword = $("#cpassword").val();
    if (name == '' || email == '' || password == '' || cpassword == '') {
    alert("Please fill all fields...!!!!!!");
    } else if ((password.length) < 8) {
    alert("Password should atleast 8 character in length...!!!!!!");
    } else if (!(password).match(cpassword)) {
    alert("Your passwords don't match. Try again?");
    } else {
    $.post("register.php", {
    name1: name,
    email1: email,
    password1: password
    }, function(data) {
    if (data == 'You have Successfully Registered.....') {
    $("form")[0].reset();
    }
    alert(data);
    });
    }
    });


//Hactoberfest funkcija
function zaObrisati() {
  for(var i=0;i<3;i++){
    console.log("obriši me nakon hacktoberfesta");
  }
};
