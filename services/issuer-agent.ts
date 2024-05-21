import axios from './axios'

export default {
  getQrCodeVerification: async () => {
    try {
      const response = await axios.get('/issuerAgent/presentation-definition', {
        params: {
          eventName: 'CACE Identity'
        }
      });

      return response?.data;
    } catch (e: any) {
      throw e?.response?.data;
    }
  }
}
