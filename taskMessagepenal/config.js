let data = [{ firstName: 'firstName', lname: 'lname', email: 'email', password: 'password' }];
//const firstName = document.getElementById('firstName');

//console.log(firstName)
function myFunction() {
    var regex = `/^[a-zA-Z]+$/`;
    const firstName = document.getElementById('firstName').value;
    console.log(firstName);
    // console.log(document.getElementById('firstName'));
    if (!(firstName === "" || fname === undefined || fname === null)) {
        console.log("input okay")
    }
    else if (regex.test(firstName)) {
        console.log("true")

    }
    else {
        // console.log("error")
        return document.getElementById("name_error").innerHTML = "name must be filed";
    }


    // var fname = document.getElementById("fname").value;
    // var lname = document.getElementById("lname").value;
    // var email = document.getElementById("email").value;
    // var password = document.getElementById("password").value;
    // var fnameErr = document.getElementById("fname_error");
    // var lnameErr = document.getElementById("lname_error");
    // var emailErr = document.getElementById("email_error");
    // var passwordErr = document.getElementById("password_error");




}


//     var regex = `/^[a-zA-Z]+$/`;
//     if (!fname && !lname && !email && !password) {
//         fnameErr.innerHTML = "Fname required";
//         lnameErr.innerHTML = "Lname required";
//         emailErr.innerHTML = "Email required";
//         passwordErr.innerHTML = "password required";

//     }

//     if (fname == "" && regex.match(fname)) {
//         console.log('true');
//     }
//     // return document.getElementById("fname_error").innerHTML = "fname";
//     else {
//         console.log('false');
//         return document.getElementById("fname_error").innerHTML = "only alphabets allow";
//     }


// }
