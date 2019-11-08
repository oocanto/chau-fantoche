//var TIME_URL = 'http://worldclockapi.com/api/json/utc/now';
var TIME_URL = 'https://yaerobi.com/GetTime';
var DATE_END_OF_FANTOCHE = '2019-12-10T00:00:00';


function makeContdown() {
	
	// Set the date we're counting down to
	var countDownDate = new Date(DATE_END_OF_FANTOCHE).getTime();
	//var currentDate = new Date(results.currentDateTime);

	// Update the count down every 1 second
	var x = setInterval(function() {

		// Get today's date and time
		var now = new Date().getTime();
		//var results = getObjectListByGet('', TIME_URL, true, get_time);
		//var currentDate = new Date(results.currentDateTime)
		
		var htmlText = null;

		// Find the distance between now and the count down date
		var distance = countDownDate - now;

		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		var htmlText = 'Faltan ' + (days + ' d&iacute;as, ' + hours + ' horas, ' + minutes + ' minutos, ' + seconds + ' segundos ') + 'para que te vayas, Fantoche!!!';

		// Display the result in the element with id="demo"
		$('#txtTime').html(htmlText);

		// If the count down is finished, write some text
		if (distance < 0) {
			clearInterval(x);
			htmlText = 'Tu tiempo ha expirado, fantoche.';
		}

		// Display the result in the element with id="demo"
		$('#txtTime').html(htmlText);

	}, 1000);
}

function getObjectListByGet(params, url, isJson, func) {
    $.ajax({
        type: 'GET',
        dataType: 'html',
        url: url,
        data: params,
        crossDomain:true,
        beforeSend: function (xhr) {
            xhr.overrideMimeType('text/html; charset=' + 'iso-8859-1');
        },
        success: function (data) {
            var results = ((isJson && data != null && data != '') ? jQuery.parseJSON(data) : data);
	    //console.log(results.currentDateTime);
	    func(results);
        }
    });
}

function get_time(results){
    return results;
}
