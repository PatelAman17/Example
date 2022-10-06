function validation() {
    var pwd = document.getElementById("pwd");
    var user = document.getElementById("user");
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (user == '') {
        alert("Please Enter UserName:")
    }
    else if (pwd = '') {
        alert('Please Enter Password')
    }
    else if (!filter.test(user)) {
        alert('Enter valid username')
    }
    else if (pwd.length < 6 || pwd.length > 6) {
        alert("Password length must be 6 digit")
    }
    else {
        alert("Thank you for coming")
    }
}

function clearfunc() {
    document.getElementById("user").value = "";
    document.getElementById("pwd").value = "";
}

