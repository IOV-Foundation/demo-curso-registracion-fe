'use client'

import QRCode from "react-qr-code";
import {useState} from "react";
import issuerAgent from "@/services/issuer-agent";

export default function ValidateInvitee() {
  const [qrCodeData, setQrCodeData] = useState<never>();

  const handleVerifyTicket = () => {
    issuerAgent.getQrCodeVerification().then(resp => { setQrCodeData(JSON.stringify(resp) as never); }).catch(console.error);
  }

  return <div className="text-center">
    {!qrCodeData && <>
      <h1>Evento titulo</h1>
      <button type="button" className="my-4 w-full rounded bg-cace-primary px-6 py-4 text-center text-white md:w-auto" onClick={handleVerifyTicket}>Validar Ticket</button>
    </>}
    {qrCodeData && <QRCode size={180} value={qrCodeData} className="w-full" />}
  </div>
}
