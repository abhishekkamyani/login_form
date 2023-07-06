// for accessing of existing account
existingAccountForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    const formValues = getFormValues(existingAccountForm);
    if(isKeyPresent(formValues.email)){
        if(isPassMatched(formValues.email, formValues.password)){
            window.location.href = 'https://abhishekkamyani.github.io/usabilityhub-clone-bootstrap';
            e.target.reset();
        }
        else{
            dangerAlert.classList.remove('d-none');
            dangerAlert.lastElementChild.innerText = 'Incorrect password';
            successAlert.classList.add('d-none');
        }
    }
    else{
        dangerAlert.classList.remove('d-none');
        dangerAlert.lastElementChild.innerText = 'Incorrect email';
        successAlert.classList.add('d-none');
    }
}) 

// for creation of new account
newAccountForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formValues = getFormValues(newAccountForm);

    if(isKeyPresent(formValues.email)){
        alert('Sorry,this email is already registered');
    }
    else{
        localStorage.setItem(encodeURIComponent(formValues.email), JSON.stringify(formValues));
        closeModalBtn.click();
        successAlert.classList.remove('d-none'); 
        dangerAlert.classList.add('d-none');
        e.target.reset();
        existingAccountForm.reset();
    }
})


function getFormValues(form) {
    const formData = new FormData(form);
    const formValues = {};
    for (const [key, value] of formData.entries()) {
        formValues[key] = value;
    }
    return formValues;
}

const isKeyPresent = (key) =>{
    const keys = decodeURIComponent(Object.keys(localStorage)).split(',');
    return keys.includes(key);
}

const isPassMatched = (email, pswd) =>{
    
    const obj = JSON.parse(localStorage.getItem(encodeURIComponent(email)));
    return obj.password == pswd; 
} 