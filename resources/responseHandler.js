
let resources = require('./labels.json');

module.exports  =   {
	
	getDeleteError: function(errorMessage, cb) {
		cb.json(errorMessage);
	},
	getDeleteResult: function(response, cb) {
		cb.json(response);
	},
	getListResult: function(resp, cb) {
		cb.status(200).send({success:true,result: resp});
	},
	getErrorResult : function(errResp, cb) {
		cb.status(400).send({success:false,error:errResp});
	},
	getSuccessResult: function(response, cb) {
		cb.status(200).send(response);
	}
}