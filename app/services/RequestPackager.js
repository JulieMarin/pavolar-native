import { generateSignature, nonceGenerator } from './';

const requestPackager = function(params, securityToken){
  params.nonce = nonceGenerator();
  params.signature = generateSignature(params, securityToken);
  return params;
};

export { requestPackager };
