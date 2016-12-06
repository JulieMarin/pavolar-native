import { SignatureGenerator } from './';

const RequestPackager = function(params, securityToken){
  params.signature = SignatureGenerator.generateSignature(params, securityToken);
  return params;
};

export { RequestPackager };
