// https://github.com/bhargavgunreddy/common-code-samples.git .

// Promises 

var prom = new Promise(function(resolve,reject){
    	$.ajax({
        	url: 'www.google.com',
            method: 'GET'
        	
        }).done(function(res){
	        	cnsole.log("res");        	
                resolve("res");
        }).fail(function(err){
        	console.log("err");
            reject("err");
        })
    	
    };
    
    prom.then(
    function(resol){
    		console.log("resolve --> ", resol);
    },
    function(rejec){
    		console.log("reject --> ", rejec);
    }
    );
});



// Custom EVents


