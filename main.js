var show = () => {
    let form = document.querySelector("#signup")
    form.classList.toggle("show")
    document.querySelector(".layer").style.display = "block"

}

var hide = () => {
    let hide = document.querySelector(".show")
    hide.classList.remove("show")
    document.querySelector(".layer").style.display = "none"
}

function validation() {
    var user = document.getElementById('userEmail').value;
    var pass = document.getElementById('password').value;

    var err1 = document.getElementById('err-1');
    var err2 = document.getElementById('err-2')

    if ((user.indexOf("@") == -1 && isNaN(user)) || (typeof (user) == Number && user.length < 10)) {
        err1.innerHTML = '**User Email or Mobile Number Not Valid**';
    } else if (typeof (pass) == Number && pass.length < 10) {
        err2.innerHTML = 'Password should be more than 8 letter and contain number and symbols';
    } else if (pass.search(/[!\@\#\$\%\^\&\*\(\)\_\-\+\=\?]/) == -1) {
        err2.innerHTML = 'Password should be more than 8 letter and contain number and symbols';
    } else if (pass.search(/[A-Z]/) == -1) {
        err2.innerHTML = 'Password should be more than 8 letter and contain number and symbols';
    } else if (pass.search(/[a-z]/) == -1) {
        err2.innerHTML = 'Password should be more than 8 letter and contain number and symbols';
    } else {
        alert('Login Successfully');
        window.open('Home.html');
    }
}