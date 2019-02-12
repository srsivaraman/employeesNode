const lodash= require('lodash');
module.exports  =   {
    
    getRequestInput   :   function (req) {
    	if(req.method == resources.methods.post){
    		return lodash.extend(req.body);
    	}else{
    		return lodash.extend(req.body,req.params,req.query);
    	}  
    }
   
}