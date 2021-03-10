const express = require('express');
const router = express.Router();
const {JsonController} = require('../controller/index');

/* GET Meta data form json file*/

router.get('/get_meta_data/:module/:screen', JsonController.readJsonFile);

module.exports = router;
