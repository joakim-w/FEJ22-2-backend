const router = require('express').Router();
const applicationsModel = require('../models/applicationsModel');


router.post('/', applicationsModel.createNewApiUser);

module.exports = router;