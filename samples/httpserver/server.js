'use strict'   //使用最严格的javascript 语言,防止javascript 漏洞
var http =  require('http');
var app = http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'}); //设置请求头
	res.end('Hello world\n');
}).listen(8080,'0.0.0.0');