let validation = {
    name : {
        pattern: /^([A-Z][a-zA-Z]* ?)*([A-Z][a-zA-Z]*)$/, 
        errorMessage: "Type correct name (all first letter have to be uppercase)!"
    },
    email: {
        pattern: /^[a-zA-Z0-9][a-zA-Z0-9._]*@[a-zA-Z0-9][a-zA-Z0-9._-]*\.[a-zA-Z.]{2,6}$/,
        errorMessage: "Type correct email!"
    }
}

function send() {

    if (validateForm()) {
        alert("Message sent");
        document.getElementById("contactForm").reset(); 
        updateSubmitButton();
    }
}

function validateForm() {
    let validationMessage, name, email, isOk;
    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    isOk = true;

    isOk = validateInput(name, validation.name.pattern);
    validationMessage = isOk ? "" : validation.name.errorMessage;
    document.getElementById("validationOfName").innerHTML = validationMessage;

    isOk = validateInput(email, validation.email.pattern);
    validationMessage = isOk ? "" : validation.email.errorMessage; 
    document.getElementById("validationOfEmail").innerHTML = validationMessage;

    return isOk;
}

function validateInput(input, pattern) {

    return pattern.test(input);
}

function updateSubmitButton() {

    document.getElementById("submitButton").disabled = areAllNeededFieldsWithValue() ? false : true;
}

function areAllNeededFieldsWithValue() {
    let name, email, message;
    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    message = document.getElementById("message").value;

    return (name != "" && email != "" && message != "");
}