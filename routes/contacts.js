

var express = require('express');
var router = express.Router();


router.get('/contacts/addcontact', function(req, res, next){
	res.render('contact', {page: 'addcontact', title: 'Add Contact'}); 
});

module.exports = router;