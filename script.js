
function Edureka() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lastname").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var cpassword = document.getElementById("cpassword").value;
    var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    console.log(fname, lname, password, email, phone, cpassword);

    if (email.match(emailRegex)) {
        
    }else{
        alert("You have entered an invalid email address!");

    }
    if (password == cpassword) {

    }
    else {
        alert("password must be same!");
        return false;

    }
    console.log(fname, lname, password, email, phone, cpassword);
    localStorage.setItem("Firstname",fname);
    localStorage.setItem("Lastname",lname);
    localStorage.setItem("Password",password);
    localStorage.setItem("Email",email);
    localStorage.setItem("Phone",phone);
    localStorage.setItem("Cpassword",cpassword);

}

