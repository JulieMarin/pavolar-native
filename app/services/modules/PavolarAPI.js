import axios from 'axios';

class APIRouter {
  constructor() {
    this.rootURI = 'https://api.pavolar.com'
  }

  getAuthenticate(params) {
    return axios.get(this.rootURI + '/1/user/authenticate/account.json', {
      params: params
    })
  }

  searchAirports(query) {
    return axios.get('https://api-cdn.pavolar.com/1/flights/airports/search.json', {
      params: {
        query: query
      }
    })
  }

}

const PavolarAPI = new APIRouter;

export { PavolarAPI };
