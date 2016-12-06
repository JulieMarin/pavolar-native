import { PavolarAPI, RequestPackager } from './';

const AuthenticateUser = function(params){
  const request = RequestPackager(params);
  PavolarAPI.getAuthenticate(request);
}

export { AuthenticateUser };
