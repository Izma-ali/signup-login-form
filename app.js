var userData = []

var registerBtn = document.getElementById("register")
registerBtn && registerBtn.addEventListener("click", function () {
    var rName = document.getElementById("registerName")
    var rEmail = document.getElementById("registerEmail")
    var rPass = document.getElementById("registerPassword")
    var rPassRpt = document.getElementById("registerPassRepeat")
    // console.log(registerBtn);

    if (rName.value == "" || rPass.value == "" || rEmail.value == "" || rPassRpt.value == "") {
        Swal.fire({
            icon: "warning",
            title: "Empty field found...",
            text: "Please fill in all fields!",
        });
    }
    else {
        var userObj = {
            name: rName.value,
            email: rEmail.value,
            password: rPass.value,
            repeatPass: rPassRpt.value
        }
        userData.push(userObj)
        Swal.fire({
            title: "Signup successfully!",
            icon: "success",
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        setTimeout(function () {
            window.location.href = "login.html"
        }, 2000

        )
        rName.value = ""
        rEmail.value = ""
        rPass.value = ""
        rPassRpt.value = ""
    }


    localStorage.setItem("users", JSON.stringify(userData))
    var dataFetch = JSON.parse(localStorage.getItem("users"))
    dataFetch.push(userObj)




})

var login = document.getElementById("loginPage")
login && login.addEventListener("click", function () {
    window.location.href = "login.html"
})


var loginBtn = document.getElementById("login")
loginBtn && loginBtn.addEventListener("click", function () {
    var lEmail = document.getElementById("loginEmail")
    var lPass = document.getElementById("loginPass")
    console.log(loginBtn);

    // console.log(lEmail.value,lPass.value);
    var users = JSON.parse(localStorage.getItem("users"))

    for (var user of users) {
        if (user.email == lEmail.value) {
            if (user.password == lPass.value) {
                Swal.fire({
                    title: "Login successfully!",
                    icon: "success",
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });
                lEmail.value = ""
                lPass.value = ""
            }
            else {
                // alert("wrong password")
                Swal.fire({
                    icon: "error",
                    title: "Wrong Password...",
                    text: "Please enter a correct password!",
                });
            }
        }
        else {
            // alert("wrong email")
            Swal.fire({
                icon: "error",
                title: "Wrong Email...",
                text: "Please enter a correct Email!",
            });
        }
    }

})


var signup = document.getElementById("signup")
signup && signup.addEventListener("click", function () {
    window.location.href = "index.html"
})
