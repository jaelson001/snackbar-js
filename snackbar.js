/*
*import jquery 2+
*/

var snackBar = function(texto, nivel, reload_time){
	var bg_nivel;
	switch(nivel){
		case "ERROR":
			bg_nivel = "#f44336";
			texto = '<i class="fa fa-times-circle" aria-hidden="true"></i>  '+texto;
			break;
		case "INFO":
			bg_nivel = "#2196f3";
			texto = '<i class="fa fa-info-circle" aria-hidden="true"></i>  '+texto;
			break;
		case "WARNING":
			bg_nivel = "#ff9800";
			texto = '<i class="fa fa-exclamation-circle" aria-hidden="true"></i>  '+texto;
			break;
		case "SUCCESS":
			bg_nivel = "#4caf50";
			texto = '<i class="fa fa-check-circle" aria-hidden="true"></i>  '+texto;
			break;
		default:
			bg_nivel = "#333";
	}
	var snack = $("<div/>",{
	    "class" : "snack-bar",
	    "css" : {
	    	display:"none", transition: 'all 0.3s', background: bg_nivel,
		    padding: '13px', width: '100%', color: '#eee',
		    'border-radius': '5px', 'box-shadow': '0px 2px 30px -7px #3337',
		    'font-family': "Arial, sans-serif", 'font-size': '0.8rem',
		    'font-weight': 'bold', position: 'relative',height: "auto",
		    "margin": "5px"
		}
	});
	var wrapper = $(".snack-wrapper");
	snack.html(texto);
	snack.show("fast");
	wrapper.append(snack);
	setTimeout(function(){
		snack.hide("fast");
		setTimeout(function(){
			snack.remove();
		},1000);
		
	},3000);
	if(reload_time != undefined){
		if(reload_time > 3000){
			setTimeout(location.reload.bind(location), reload_time);
		}else{
			setTimeout(location.reload.bind(location), 3000);
		}
		
	}
};
window.onload = function(){
	var stylesheet = $("<link>", {
	    rel: "stylesheet",
	    type: "text/css",
	    href: "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
	});
	stylesheet.appendTo("head");
	var wrapper = $("<div/>",{
	    "class" : "snack-wrapper",
	    "css" : {
	    	display:"flex", transition: 'all 0.3s', background: "transparent",
		    padding: '5px', width: '30%', color: '#eee',
		    'border-radius': '5px', position: 'fixed',
		    bottom: '10px', right: '5%', height: "fit-content",
		    "flex-flow": "column-reverse wrap"
		}
	});
	$("body").append(wrapper);
}
window.snackBar = snackBar;
console.log("snackbar instalado com sucesso!");