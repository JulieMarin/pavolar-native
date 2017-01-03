import { requestPackager } from './';
import { PavolarAPI } from './modules';

const searchForFlights = (params) => {
  const request = requestPackager(params);
  return PavolarAPI.getSearchResults(request);
}

export { searchForFlights };
