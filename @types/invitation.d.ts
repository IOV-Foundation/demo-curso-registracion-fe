export interface Invitation {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  eventId: string;
  ticketType: string;
  company: string;
  orderId: string;
  event: {
    id: string;
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    organizer: string;
    location: string;
    url: string;
  };
  credentialOffer: {
    id: string;
    body: {
      id: string
    }
  };
};
