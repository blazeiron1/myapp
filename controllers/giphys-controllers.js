const giphysService = require('../services/giphy-service');
exports.giphys = async function(req, res, next) {

    try {
        let giphy = await giphysService.getAll();


        res.render('giphys', {
            title: 'Giphy',
            currentPage: 'giphys',
            giphy: giphy
        });

    } catch (e) {
        console.log(e);
    }
}
exports.show = async function(req, res, next) {

    try{
        let id = req.params.id;

        id = id.replace( /[^\d].*/, '' );

        id = Number(id);

        if(typeof id != 'number'){
            // throw error
        }

        let giphy = await giphysService.getById(id);

        if(!giphy){
            res.status(404);

            res.render('giphys', {
                title: 'Giphy',
                currentPage: 'giphys',
                giphy: {
                    title: 'Giphy not found',
                    name:'name not found',
                    created_at:'',
                    length:''
                },
                valid: false
            });

        }


        res.render('giphy', {
            title: 'Giphy',
            currentPage: 'giphys',
            giphy
        });

    }
    catch (e){
        console.log(e);
    }
}
exports.new = async function(req, res, next) {
    let formData = {};

    res.render('add-giphy',{
        title: 'Add Giphy',
        currentPage: 'contact',
        formData: formData
    });



}
exports.store = async function(req, res, next) {
    let formData= validateAndCreateGiphyFormData(req.body);
    if(formData.valid){
        let input={
            title:formData.title.value,
            length:formData.length.value,
            poster_gif:formData.poster_gif.value,
            name:formData.name.value

        }

        let giphy=await giphysService.storeNew(input)

        res.redirect('/giphys')
    }

    res.render('add-giphy',{
            title: 'Add Giphy',
            currentPage: 'contact',
            formData: formData,

        });


}
function validateAndCreateGiphyFormData(body){

    let title = body.title;
    let poster_gif = body.poster_gif;
    let length=body.length;
    let name=body.name;


    let formData = {
        valid: true,
        title: {
            value: title
        },
        length: {
            value: length
        },
        poster_gif:{
            value:poster_gif
        },
        name:{
            value:name
        }
    };


    if(!title || title.length < 2){
        formData.title = {
            value: title,
            valid: false,
            errorMsg: 'Enter a valid name'
        }

        formData.valid = false;
    }

    if(!length || length.length < 6){
        formData.length = {
            value: length,
            valid: false,
            errorMsg: 'Enter a valid number'
        }


        formData.valid = false;
    }
    if(!poster_gif || poster_gif.length < 5){
        formData.poster_gif = {
            value: poster_gif,
            valid: false,
            errorMsg: 'Enter a valid gif'
        }

        formData.valid = false;
    }
    if(!name || name.length < 2){
        formData.name = {
            value: name,
            valid: false,
            errorMsg: 'Enter a valid name'
        }

        formData.valid = false;
    }

    return formData;

}
exports.update = async function(req, res, next) {
    let id=req.params.id;
    res.send(id);

}
exports.destroy = async function (req, res, next) {

    let id = req.params.id;

    giphysService.deleteById(id);
    giphysService.cleanUp(id);

    res.redirect('/');

}