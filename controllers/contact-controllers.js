const giphysService = require("../services/giphy-service");
exports.newcontact = async function(req, res, next) {
    let formContact ={};

    res.render('contact',{
        title: 'Contact',
        currentPage: 'contact',
        formContact: formContact
    });



}
exports.storecontact = async function(req, res, next) {
    let formContact= validateAndCreateContactFormContact(req.body);

    if(formContact.valid) {
        let input = {
            name: formContact.name.value,
            email: formContact.email.value,
            subject: formContact.subject.value,
            message: formContact.message.value,


        }
        let contact = await giphysService.storeContact(input)
    }

    res.render('contact',{
        title: 'Contact Us',
        currentPage: 'contact',
        formContact: formContact
    });

}
function validateAndCreateContactFormContact(body){

    let name = body.name;
    let email = body.email;
    let message = body.message;
    let subject=body.subject;

    let formContact = {
        valid: true,
        email: {
            value: email
        },
        name: {
            value: name
        },
        subject: {
            value: subject
        },
        message: {
            value: message
        }
    };

    let pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;

    if(!pattern.test(email)) {
        formContact.email = {
            value:email,
            valid: false,
            errorMsg: 'Enter a valid email'
        };

        formContact.valid = false;
    }

    if(!name || name.length < 2){
        formContact.name = {
            value:name,
            valid: false,
            errorMsg: 'Enter a valid name'
        }

        formContact.valid = false;
    }

    if(!message || message.length < 10){
        formContact.message = {
            value:message,
            valid: false,
            errorMsg: 'Enter a valid message'
        }


        formContact.valid = false;
    }
    if(!subject || subject.length < 4){
        formContact.subject = {
            value:subject,
            valid: false,
            errorMsg: 'Enter a valid subject'
        }


        formContact.valid = false;
    }
    console.log(formContact);
    return formContact;

}