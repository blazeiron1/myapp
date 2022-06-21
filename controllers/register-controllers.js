const giphysService = require("../services/giphy-service");

 exports.newregister = async function(req, res, next) {
     let formRegister ={};

    res.render('register',{
        title: 'Add Register',
        currentPage: 'register',
        formRegister: formRegister
    });



}
exports.storeregister = async function(req, res, next) {
    let formRegister= validateAndCreateRegisterFormRegister(req.body);
    if(formRegister.valid) {
        let input = {
            username: formRegister.username.value,

            email: formRegister.email.value,
            password: formRegister.password.value,


        }
        let register = await giphysService.storeRegister(input)
    }

        res.render('register',{
        title: 'Add Register',
        currentPage: 'register',
        formRegister: formRegister
    });
}
    function validateAndCreateRegisterFormRegister(body){

        let username = body.username;
        let email = body.email;
        let password= body.password;

        let formRegister = {
            valid: true,
            username: {
                value: username
            },
            email: {
                value: email
            },
            password: {
                value: password
            }
        };

        let pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;

        if(!pattern.test(email)) {
            formRegister.email = {
                value:email,
                valid: false,
                errorMsg: 'Enter a valid email'
            };

            formRegister.valid = false;
        }

        if(!username || username.length < 2){
            formRegister.username = {
                value: username,
                valid: false,
                errorMsg: 'Enter a valid name'
            }

            formRegister.valid = false;
        }

        if(!password || password.length < 3){
            formRegister.password = {
                value:password,
                valid: false,
                errorMsg: 'Enter a valid password'
            }


            formRegister.valid = false;
        }

        return formRegister;
    }
