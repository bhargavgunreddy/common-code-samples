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

<div id = "new">New Div</div>

var ele = document.getElementById('new');

var eve = new CustomEvent('custom', {detail: "custom"});
var handler = function(ev){
	console.log("inside handler", ev.target);
}

ele.addEventListener('custom', handler, false);
ele.dispatchEvent(eve);

