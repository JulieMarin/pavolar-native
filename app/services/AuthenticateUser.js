import { requestPackager } from './';
import { PavolarAPI } from './modules';

const authenticateUser = (params) => {
  const request = requestPackager(params);
  return PavolarAPI.getAuthenticate(request);
}

export { authenticateUser };
