const progress = document.getElementById("progress"),
    circles = document.querySelectorAll(".circle"),
    check = document.getElementById("check"),
    signUpForm = document.querySelector(".signup_form"),
    wrapper1 = document.querySelector(".form_wrapper1"),
    wrapper2 = document.querySelector(".form_wrapper2"),
    wrapper3 = document.querySelector(".form_wrapper3"),
    nextBtn = document.getElementById("next"),
    nextBtn1 = document.getElementById("next1"),
    signUpBtn = document.getElementById("sign_up"),
    prevBtn = document.getElementById("prev"),
    prevBtn1 = document.getElementById("prev1"),
    prevBtn2 = document.getElementById("prev2"),
    submitBtn = document.getElementById("submit"),
    mainEmail = document.getElementById("email"),
    email = document.getElementById("email_1"),
    fullname = document.getElementById("fullname"),
    mainPasswd = document.getElementById("pswd1"),
    mainPasswd2 = document.getElementById("pswd2"),
    passwd = document.getElementById("pswd3"),
    fname = document.getElementById("fname"),
    sname = document.getElementById("sname"),
    file = document.getElementById("file"),
    statOf = document.getElementById("state"),
    houseAd = document.getElementById("address"),
    phone = document.getElementById("phone2"),
    buttons = document.querySelectorAll("button"),
    span = document.getElementById('spanned'),
    spanP = document.getElementById("spanP"),
    spanEm = document.getElementById("spanEm");


let currentStep = 1;

signUpBtn.addEventListener("click", (e) => {
    e.preventDefault();

    //set time out

    signUpBtn.innerHTML = `Processing ...`;
    currentStep++;

    setTimeout(() => {

        signUpBtn.innerHTML = "SIGN UP";

        if (check.checked && fullname.value !== "" && mainEmail.value !== "" && mainPasswd.value !== "" &&
            mainPasswd.value === mainPasswd2.value && currentStep === 2) {
            signUpForm.style.display = "none";
            wrapper1.style.display = "block";
            wrapper2.style.display = "none";
            wrapper3.style.display = "none";
            currentStep = 2;

        }
        else {

            signUpForm.style.display = "block";
            wrapper1.style.display = "none";
            wrapper2.style.display = "none";
            wrapper3.style.display = "none";
            check.style.border = '1px solid red';
            fullname.style.border = '1px solid red';
            mainEmail.style.border = "1px solid red";
            mainPasswd.style.border = "1px solid red";
            mainPasswd2.style.border = "1px solid red";
            currentStep = 1;
        }
    }, 10000);
    updates();

})

nextBtn.addEventListener("click", (e) => {
    e.preventDefault();
    currentStep++
    if (email.value !== "" && email.value === mainEmail.value && passwd.value !== "" &&
        passwd.value === mainPasswd.value && currentStep === 3) {
        wrapper1.style.display = "none";
        wrapper2.style.display = "block";
        wrapper3.style.display = "none";
        signUpForm.style.display = "none";
        currentStep = 3;
    }
    else {
        wrapper1.style.display = "block";
        wrapper2.style.display = "none";
        wrapper3.style.display = "none";
        signUpForm.style.display = "none";
        currentStep = 2;
        email.style.border = `1px solid red`;
        passwd.style.border = `1px solid red`;
        span.innerHTML = `Wrong value(s) entered!`;
        span.style.color = "red";

    }
    updates();
})
nextBtn1.addEventListener("click", (e) => {
    e.preventDefault();
    currentStep++;
    if (fname.value !== "" && sname.value !== "" && phone.value !== "" && currentStep === 4) {
        wrapper1.style.display = "none";
        wrapper2.style.display = "none";
        wrapper3.style.display = "block";
        signUpForm.style.display = "none";
        currentStep = 4;
    }
    else {
        wrapper1.style.display = "none";
        wrapper2.style.display = "block";
        wrapper3.style.display = "none";
        spanP.innerHTML = `Wrong value(s) entered!`;
        spanP.style.color = "red";
        fname.style.border = "1px solid red";
        sname.style.border = "1px solid red";
        phone.style.border = "1px solid red";
        signUpForm.style.display = "none";
        currentStep = 3;

    }
    updates();
})

prevBtn.addEventListener("click", (e) => {
    e.preventDefault();
    currentStep--;
    if (signUpForm.style.display === "none" && currentStep === 1) {
        wrapper1.style.display = "none";
        wrapper2.style.display = "none";
        wrapper3.style.display = "none";
        signUpForm.style.display = "block";
        currentStep = 1;
    }
    else {
        wrapper1.style.display = "block";
        wrapper2.style.display = "none";
        wrapper3.style.display = "none";
        signUpForm.style.display = "none";
        currentStep = 2;

    }
    updates();
})
prevBtn1.addEventListener("click", (e) => {
    e.preventDefault();
    currentStep--;
    if (wrapper1.style.display === "none" && currentStep === 2) {
        wrapper1.style.display = "block";
        wrapper2.style.display = "none";
        wrapper3.style.display = "none";
        signUpForm.style.display = "none";
        currentStep = 2;
    }
    else {
        wrapper1.style.display = "none";
        wrapper2.style.display = "block";
        wrapper3.style.display = "none";
        signUpForm.style.display = "none";
        currentStep = 3;
    }
    updates();
})

prevBtn2.addEventListener("click", (e) => {
    e.preventDefault();
    currentStep--;
    if (wrapper2.style.display === "none" && currentStep === 3) {
        wrapper1.style.display = "none";
        wrapper2.style.display = "block";
        wrapper3.style.display = "none";
        signUpForm.style.display = "none";
        currentStep = 3;
    }
    else {
        wrapper1.style.display = "none";
        wrapper2.style.display = "none";
        wrapper3.style.display = "block";
        signUpForm.style.display = "none";
        currentStep = 4;
    }
    updates();
})

let slash1 = document.querySelector('#slash1');
let eye1 = document.querySelector('#eye1');

slash1.addEventListener("click", () => {
    if (mainPasswd.type === "password") {
        mainPasswd.type = 'text';
        eye1.style.display = "block";
        slash1.style.display = "none";
    }
    else {
        mainPasswd.type = 'password';
        eye1.style.display = "none";
        slash1.style.display = "block";
    }
})
updates()

eye1.addEventListener("click", () => {
    if (mainPasswd.type === "text") {
        mainPasswd.type = 'password';
        slash1.style.display = "block";
        eye1.style.display = "none"
    }
    else {
        mainPasswd.type = 'text';
        slash1.style.display = "none";
        eye1.style.display = "block";
    }
})
updates();
let slash2 = document.querySelector("#slash2"),
    eye2 = document.querySelector("#eye2");

slash2.addEventListener("click", () => {
    if (mainPasswd2.type === "password") {
        mainPasswd2.type = 'text';
        eye2.style.display = "block";
        slash2.style.display = "none";
    }
    else {
        mainPasswd2.type = 'password';
        eye2.style.display = "none";
        slash2.style.display = "block";
    }
})
updates()

eye2.addEventListener("click", () => {
    if (mainPasswd2.type === "text") {
        mainPasswd2.type = 'password';
        slash2.style.display = "block";
        eye2.style.display = "none"
    }
    else {
        mainPasswd2.type = 'text';
        slash2.style.display = "none";
        eye2.style.display = "block";
    }
})
updates();

let slash3 = document.querySelector("#slash3"),
    eye3 = document.querySelector("#eye3");

slash3.addEventListener("click", () => {
    if (passwd.type === "password") {
        passwd.type = 'text';
        eye3.style.display = "block";
        slash3.style.display = "none";
    }
    else {
        passwd.type = 'password';
        eye3.style.display = "none";
        slash3.style.display = "block";
    }
})
updates()

eye3.addEventListener("click", () => {
    if (passwd.type === "text") {
        passwd.type = 'password';
        slash3.style.display = "block";
        eye3.style.display = "none"
    }
    else {
        passwd.type = 'text';
        slash3.style.display = "none";
        eye3.style.display = "block";
    }
})

updates();

let parent_form = document.getElementById('parentf');
let container = document.querySelector(".form_container");

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    submitBtn.innerHTML = `processing ...`;

    setTimeout(() => {
        submitBtn.innerHTML = `SUBMIT`;
        if (file.value !== "" && statOf.value !== "" || houseAd.value !== "") {
            container.innerHTML = `Form has been filled successfully`;
            container.style.backgroundColor = "green";
            container.style.color = "white";
        }
        else {
            file.style.border = "1px solid red";
            statOf.style.border = "1px solid red";
            houseAd.style.border = "1px solid red";
            spanEm.innerHTML = `Wrong value(s) entered!`;
            spanEm.style.color = "red";

        }
    }, 10000);
    updates();
})


function updates() {
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            circles.forEach((circle, idx) => {
                if (idx < currentStep) {
                    circle.classList.add('active');
                }
                else {
                    circle.classList.remove('active');
                }
            })
            let actives = document.querySelectorAll(".active");
            progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 70 + "%";
        })
    })
}
