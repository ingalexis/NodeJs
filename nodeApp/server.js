
'use strict';

const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();

app.get('/',(req,res)=>{
	res.send('<br><h2 style="color:#CD6155">Bienvenidos a las instancia #'+process.env.instancia+' de ec2 con el Load Network Balancer y la ApiGateWay de Amazon</h2><br><br><img src="https://cdn.chris.schalenborgh.be/wp-content/uploads/2012/02/helloworld.jpeg">');
});

app.listen(PORT,HOST);

console.log('running on http://${HOST}:${PORT}');
