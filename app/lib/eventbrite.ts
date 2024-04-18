import eventbrite from "eventbrite";

export const sdk = eventbrite({ token: process.env.EVENT_BRITE_PRIVATE_TOKEN });