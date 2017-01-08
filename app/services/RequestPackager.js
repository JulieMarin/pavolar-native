import { generateSignature, nonceGenerator } from './';

const requestPackager = function(params, securityToken){
  params.nonce = nonceGenerator();
  params.appID = 'NGUZ1NKZ69593J3L5AEXY30EEE07TXOBA5EXS93J'
  params.signature = generateSignature(params, securityToken);
  return params;
};

export { requestPackager };
