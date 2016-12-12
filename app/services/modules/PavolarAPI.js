import axios from 'axios';

class APIRouter {
  constructor() {
    this.rootURI = 'https://api.pavolar.com'
  }

  getAuthenticate(params) {
    return axios.get( this.rootURI + '/1/user/authenticate/account.json', {
      params: params
    })
  }

}

const PavolarAPI = new APIRouter;

export { PavolarAPI };
