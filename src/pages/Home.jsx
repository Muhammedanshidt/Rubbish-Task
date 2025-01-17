import React from 'react';
import RubbishComponent from '../components/RubbishComponent';
import ParcelComponent from '../components/ParcelComponent';
import WhatsAppButton from '../components/Whatsapp';
import ContactUs from '../components/ContactUs';

function Home() {
  return (
    <div className="flex justify-around h-screen p-10 ">
      <div >
        <RubbishComponent />
      </div>
        <div>
        <ParcelComponent />
      </div>
      <ContactUs/>
      <WhatsAppButton/>
    </div>
  );
}

export default Home;
