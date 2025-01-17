// components/WhatsAppButton.js
import React from "react";

const WhatsAppButton = ({custom}) => {
  const handleChat = () => {
    window.open("https://wa.me/8281497085", "_blank");
  };

  return (
    <button
      onClick={handleChat}
      
      className={`${custom ? custom : "fixed bottom-4 right-32 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-600"}`}
    >
      Chat Now
    </button>
  );
};

export default WhatsAppButton;
