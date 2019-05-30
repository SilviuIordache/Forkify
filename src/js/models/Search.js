import axios from 'axios';

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    const key = '7f34ed11d7823c35145ad0dbc42c402d'
    try {
      const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);

      this.result = res.data.recipes;
      //console.log(this.result);
    } catch (error) {
      alert(error);
    }
  }
}