function validatePass()
{
  var x = document.getElementById('P1').value;
  var y = document.getElementById('V1').value;

  if(x.length >= "8"){
    if(x === y){
      alert("Password Validated");
    }
    else
    {
      alert("Password doesn't match");
    }
  }
  else
  {
    alert("The passwords are not at least 8 characters long");
  }

}
