import React, { useState } from "react";
import "./Qrcode.css";

const Qrcode = () => {
  const [qrData, setQrData] = useState("");
  const [qrSize, setQrSize] = useState("200");
  const [img, setImg] = useState("");

  const generateQR = () => {
    const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`;
    setImg(url);
  };

  return (
    <div className="app">
      <input value={qrData} onChange={(e) => setQrData(e.target.value)} placeholder="Enter QR data" />
      <input value={qrSize} onChange={(e) => setQrSize(e.target.value)} placeholder="Enter size" />
      <button onClick={generateQR}>Generate QR</button>
      {img && <img src={img} alt="QR code" />}
    </div>
  );
};

export default Qrcode;
