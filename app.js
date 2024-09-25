var userData = []

var registerBtn = document.getElementById("register")
registerBtn && registerBtn.addEventListener("click",function(){
    var rName = document.getElementById("registerName")
    var rEmail = document.getElementById("registerEmail")
    var rPass = document.getElementById("registerPassword")
    var rPassRpt = document.getElementById("registerPassRepeat")
console.log(registerBtn);

    var userObj = {
        name : rName.value,
        email : rEmail.value,
        password : rPass.value,
        repeatPass : rPassRpt.value
    }

    userData.push(userObj)

    rName.value = ""
    rEmail.value = ""
    rPass.value = ""
    rPassRpt.value = ""

    localStorage.setItem("user",JSON.stringify(userData))

})

var login = document.getElementById("loginPage")
login.addEventListener("click",function(){
    window.location.href = "login.html"
})


    var loginBtn = document.getElementById("login")
   loginBtn && loginBtn.addEventListener("click",function(){
        var lEmail = document.getElementById("loginEmail")
        var lPass = document.getElementById("loginPass")
    console.log(loginBtn);
    
        console.log(lEmail.value,lPass.value);
        
    })

// var userData = JSON.parse(localStorage.getItem("user")) || [];

// // Register Button Event Listener
// var registerBtn = document.getElementById("register");
// registerBtn.addEventListener("click", function() {
//     var rName = document.getElementById("registerName");
//     var rEmail = document.getElementById("registerEmail");
//     var rPass = document.getElementById("registerPassword");
//     var rPassRpt = document.getElementById("registerPassRepeat");

//     // Check if passwords match
//     if (rPass.value !== rPassRpt.value) {
//         alert("Passwords do not match!");
//         return;
//     }

//     // Create user object
//     var userObj = {
//         name: rName.value,
//         email: rEmail.value,
//         password: rPass.value
//     };

//     // Add to userData and clear fields
//     userData.push(userObj);
//     rName.value = "";
//     rEmail.value = "";
//     rPass.value = "";
//     rPassRpt.value = "";

//     // Save updated userData to localStorage
//     localStorage.setItem("user", JSON.stringify(userData));
// });

// // Redirect to login page
// var login = document.getElementById("loginPage");
// login.addEventListener("click", function() {
//     window.location.href = "login.html";
// });

// // Login Button Event Listener
// var loginBtn = document.getElementById("login");
// loginBtn.addEventListener("click", function() {
//     var lEmail = document.getElementById("loginEmail");
//     var lPass = document.getElementById("loginPass");

//     // Check user credentials
//     var user = userData.find(user => user.email === lEmail.value && user.password === lPass.value);
    
//     if (user) {
//         alert("Login successful!");
//         // Redirect or perform any actions for successful login
//     } else {
//         alert("Invalid email or password.");
//     }
// });
