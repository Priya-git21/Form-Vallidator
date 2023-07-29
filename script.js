let user = document.getElementById("user");
let pass = document.getElementById("password");
let bool = false;

function form() {
    if (user.value == "") {
        document.getElementById("userEr").innerHTML = "User name is empty...";
        bool =false;
    }
    else if (user.value.length < 3) {
        document.getElementById("userEr").innerHTML = "User name requires min 3 letters...";
        bool= false;
    }
    else {
        document.getElementById("userEr").innerHTML = "";
        bool= true;
    }

    if (pass.value == "") {
        document.getElementById("passEr").innerHTML = "Password is empty...";
        bool =false;
    }
    else if (pass.value.length < 8) {
        document.getElementById("passEr").innerHTML = "Password requires min 8 letters...";
        bool= false;
    }
    else {
        document.getElementById("passEr").innerHTML = "";
        bool = true;
    }
    if(bool)return true;
    return false;
}