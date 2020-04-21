import { CodeDeploy } from 'aws-sdk';
const codedeploy = new CodeDeploy({apiVersion: '2014-10-06'});

console.log('codedeploy: ', codedeploy);
