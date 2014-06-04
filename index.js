var server = require('server'); //server is node custom module
var router = require('router');
var reqHandler = require('requestHandler');

var handle = {};
handle['/list'] = reqHandler.list;
handle['/add'] = reqHandler.add;
handle['/delete'] = reqHandler.deleteEmp;
handle['/edit'] = reqHandler.edit;

server.start(router,handle);