function send() {
    var result;
    result = validateForm();
    if (result == true) {
        alert("Message sent");
        document.getElementById("contactForm").reset(); 
        checkSubmitButton();
    }
}

function validateForm() {
    var validationMessage, name, email, message, isOk;
    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    message = document.getElementById("message").value;
    isOk = true;

    validationMessage = validateName(name);
    if (validationMessage != "") {
        isOk = false;
    } 
    document.getElementById("validationOfName").innerHTML = validationMessage;

    validationMessage = validateEmail(email);
    if (validationMessage != "") {
        isOk = false;
    } 
    document.getElementById("validationOfEmail").innerHTML = validationMessage;

    return isOk;
}

function validateName(name) {
    var pattern = /^([A-Z][a-zA-Z]* ?)*([A-Z][a-zA-Z]*)$/;
    var test = pattern.test(name);
    if (test == true) {
        return "";
    } else {
        return "Type correct name!"
    }
}

function validateEmail(email) {
    var pattern = /^[a-zA-Z0-9][a-zA-Z0-9._]*@[a-zA-Z0-9][a-zA-Z0-9._-]*\.[a-zA-Z.]{2,6}$/;
    var test = pattern.test(email);
    if (test == true) {
        return "";
    } else {
        return "Type correct email!"
    }
}

function checkSubmitButton() {
    var name, email, message;
    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    message = document.getElementById("message").value;

    if (name != "" && email != "" && message != "") {
        document.getElementById("submitButton").disabled = false;
    } else {
        document.getElementById("submitButton").disabled = true;
    }
}