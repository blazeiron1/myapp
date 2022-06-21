var express = require('express');
var router = express.Router();

var giphysController = require('../controllers/giphys-controllers');
var registerController = require('../controllers/register-controllers');
var contactController = require('../controllers/contact-controllers');

router.get('/',giphysController.giphys);
router.get('/:id',giphysController.show);
router.get('/giphy/new',giphysController.new);
router.post('/',giphysController.store);
router.get('/new/user',registerController.newregister);
router.post('/register',registerController.storeregister);
router.get('/new/contact',contactController.newcontact);
router.post('/contact',contactController.storecontact);
router.post('/deleteGiphy/:id', giphysController.destroy);

module.exports = router;
