"use strict";
exports.__esModule = true;
var aws_sdk_1 = require("aws-sdk");
var codedeploy = new aws_sdk_1.CodeDeploy({ apiVersion: '2014-10-06' });
console.log('codedeploy: ', codedeploy);
