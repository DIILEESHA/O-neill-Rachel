import React from "react";
import { QRCode } from "react-qrcode-logo";

import lo from "./assets/bee.jpg"

const QrGenerator = () => {
  const myLink = "https://davidkaty.vercel.app/"; // your link

  // Function to download QR code as PNG
  const downloadQr = () => {
    const canvas = document.getElementById("myQrCanvas");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "my-qr-code.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Scan to Visit My Website</h2>
      <div style={{ display: "inline-block", margin: "20px" }}>
        <QRCode
          id="myQrCanvas"
          value={myLink}
          size={250}
          ecLevel="H"
          qrStyle="dots"
          eyeRadius={[15, 15, 15]}
          fgColor="#000"
          gradient={{
            type: "linear",
            rotation: 45,
            colors: ["#FAB12F", "#FF9D00", "#FA812F"],
          }}
          logoWidth={50}
          logoHeight={50}
        />
      </div>
      <div>
        <button
          onClick={downloadQr}
          style={{
            padding: "10px 20px",
            background: "#FF9D00",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Download QR
        </button>
      </div>
    </div>
  );
};

export default QrGenerator;
