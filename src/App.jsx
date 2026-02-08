import React from "react";
import Header from "./components/Header.jsx";
import Leam from "./components/Leam.jsx";
import Qrcode from "./components/Qrcode.jsx";

function App() {
  const handleClick = () => alert("Button clicked");

  return (
    <div>
      <Header Name="Muski" Age={22} isMarried={false} handleClick={handleClick} />
      <Leam />
      <Qrcode />
    </div>
  );
}

export default App;
