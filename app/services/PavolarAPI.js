import axios from 'axios';

class APIRouter {
  constructor() {
    this.rootURI = 'https://api.pavolar.com'
  }

  getAuthenticate(params) {
    axios.get( this.rootURI + '/1/user/authenticate/account.json', {
      params: params
    })
    .then((response) => {
     console.log(response);
   })
  }

}

const PavolarAPI = new APIRouter;

export { PavolarAPI };
