import AWS from 'aws-sdk';
const codedeploy = new AWS.CodeDeploy({apiVersion: '2014-10-06'});

console.log('codedeploy: ', codedeploy);
