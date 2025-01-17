
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ContactUs from './ContactUs';
import WhatsAppButton from './Whatsapp';
import { Axios } from '../App';

function DetailedRubbish() {
  const location = useLocation();
  const { type, title, } = location.state || {};
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await Axios.get("services");
        const filteredData = response.data.filter((ele) => ele.category === type);
        setData(filteredData);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, [type]);

  console.log(data);
  console.log(title);




  return (
    <div className="p-4">
      {data.length > 0 ? (
        <div className="mt-4 flex justify-center ">

          {data.map((service, index) => (
            <div key={index} className="border p-2 my-2 w-fit text-slate-700 ">

              <p className="font-medium text-3xl text-center m-2">{service.category}</p>
              <p className="font-medium text-2xl text-center m-2">{service.type}</p>
              <p className='text-lg'>{service.description}</p>
              <h1 className='text-xl font-bold text-slate-700 p-3'>Pricing</h1>
              {service.pricing.map((ele, ind) => (

                <div key={ind} className='bg-slate-700 text-white p-3 m-1 rounded-sm hover:bg-slate-800 cursor-pointer duration-300'>

                  <div className='flex gap-3 justify-center'>
                    <p>{ele.label}</p>
                    =
                    <p>{ele.price}</p>
                  </div>  
                </div>

              )

              )}
              <div className="flex items-center justify-center gap-3">
                <ContactUs
                  custom="bg-yellow-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-yellow-600"
                  name="Book now"
                />
                 <WhatsAppButton custom="bg-green-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-600" />
              </div>

             
            </div>
          ))}

        </div>
      ) : (
        <p className="text-gray-500 mt-4">No matching services found.</p>
      )}
    </div>
  );
}

export default DetailedRubbish;
