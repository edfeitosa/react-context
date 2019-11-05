import axios from 'axios';

class AppClient {
  _getHttpClient() {
    const appHttpClient = axios.create({
      baseURL: 'http://localhost:4000'
    });
    return appHttpClient;
  }

  async getCodeTicket(code) {
    try {
      const httpClient = this._getHttpClient();
      const response = await httpClient.get(`/ticket/${code}`);
      return response;
    } catch (error) {
      throw error;
    }
  }
}

export default new AppClient();