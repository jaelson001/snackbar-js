/*
*import jquery 2+
*inport font awesome CDN using:
*<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
*/

var snackBar = function(texto, nivel){
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
		    padding: '13px', width: '25%', color: '#eee',
		    'border-radius': '5px', 'box-shadow': '0px 2px 30px -7px #3337',
		    'font-family': "Arial, sans-serif",
		    'font-size': '0.8rem', 'font-weight': 'bold', position: 'absolute',
		     bottom: '10px', right: '10px', height: "auto"
		}
	});
	snack.html(texto);
	snack.show("fast");
	$("body").append(snack);
	setTimeout(function(){snack.hide("fast")},3000);
};
window.snackBar = snackBar;