function get() {
	console.log("get a");
	let URL = 'https://jt97zq7quf.execute-api.us-east-2.amazonaws.com/verBalancer'; 
	$.ajax({
		type: "GET",
		url: URL,
		crossDomain: true,
		contentType:"application/json",
		dataType: "json",
		success: function( data ) {
			$( "#result" ).html( data );
		}
	});
} 

function getb() {
	console.log("GET");
	let URL = 'https://jt97zq7quf.execute-api.us-east-2.amazonaws.com/verBalancer'; 
	$.get(URL,(res)=>{
			console.log(res);
			document.getElementById('result').innerHTML = 'Resultado ' + res.body;
	});   
}

function getc() {
	fetch("https://jt97zq7quf.execute-api.us-east-2.amazonaws.com/verBalancer", {
		method: "GET",
        mode:'no-cors'
	}).then(res => {
		console.log(res);
		document.getElementById('result').innerHTML = 'Resultado ' + res.body;
	});
	
}


function send(){

		let data = {
			placa: document.getElementById('placa').value,
			color: document.getElementById('color').value,
			dueno: document.getElementById('dueno').value
		};
		console.log(data);
		fetch("https://xzgejijseh.execute-api.us-east-2.amazonaws.com/consultaPlaca", {
            method: "POST", 
            mode:'no-cors',
            body: JSON.stringify(data)
            }).then(res => {
                console.log(res);
				alert("Se registro la placa");
            });
        }