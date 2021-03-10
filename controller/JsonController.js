const path = require('path');
const fs = require('fs');

class JsonController{

    // Method to read json data from json file
    async readJsonFile(req, res){
        try {
            const filePath = path.join(global.appRoot, `/data/${req.params.module}/${req.params.screen}.json`);
            fs.readFile(filePath, function(err, data) {
                if(err){
                    res.status(500).json({status: false, message: 'No data found'});
                }else{
                    res.status(200).json({status: true, data: JSON.parse(data)});
                }
            }); 
        } catch (error) {
            res.send(500).json({status: false, message: 'Error occoured'});
        }
    }

}

module.exports = new JsonController();
