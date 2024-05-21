import {Invitation} from "@/@types/invitation";
import axios from './axios'

export default {
  getInvitee: async (orderId: string): Promise<Invitation> => {
    try {
      const response = await axios.get<Invitation>('/invitee', {
        params: {
          orderId,
          poll: 1
        }
      });

      return response?.data;
    } catch (e: any) {
      throw e?.response?.data;
    }
  }
}
