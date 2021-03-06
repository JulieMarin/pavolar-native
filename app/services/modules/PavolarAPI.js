import axios from 'axios';

class APIRouter {
  constructor() {
    this.rootURI = 'https://api.pavolar.com'
  }

  getAuthenticate(params) {
    return axios.get(this.rootURI + '/1/user/authenticate/account.json', {
      params: params
    });
  }

  getSearchResults(params) {
    return axios.get(this.rootURI + '/1/flights/search/search.json', {
      params: params
    });
  }

  searchAirports(query) {
    return axios.get('https://api-cdn.pavolar.com/1/flights/airports/search.json', {
      params: {
        query: query
      }
    });
  }

  getAirlinesList() {
    return axios.get('https://api-cdn.pavolar.com/1/info/details/airlines.json?airline=');
  }

}

const PavolarAPI = new APIRouter;

export { PavolarAPI };
