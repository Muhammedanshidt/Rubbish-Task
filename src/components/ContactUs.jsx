import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Axios } from '../App';

function ContactUsModal({ custom, name }) {
  const [isOpen, setIsOpen] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const onSubmit = async (data) => {
    console.log("Form Data:", data);
  
    try {
      console.log("Before axios.post");
      const response = await Axios.post("contact", data);
      console.log("Axios response:", response);
  
      if (response.status === 200) {
        alert("Thank you for contacting us!");
        setIsOpen(false); // Close the modal after successful submission
      } else {
        console.log("Unexpected response status:", response.status);
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit the form. Please check your internet connection or try again later.");
    }
  };

  return (
    <div>
      {/* Button to open modal */}
      <button
        onClick={toggleModal}
        className={`${custom ? custom : "fixed bottom-4 right-32 bg-yellow-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-yellow-600"}`}
      >
        {name ? name : "Contact Us"}
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-md p-6 relative">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>


            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Name Field */}
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name", { required: "Name is required" })}
                  className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300 ${errors.name ? "border-red-500" : ""
                    }`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              {/* Email Field */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  })}
                  className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300 ${errors.email ? "border-red-500" : ""
                    }`}
                  placeholder="Your email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* Phone Number Field */}
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Phone number must be 10 digits",
                    },
                  })}
                  className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300 ${errors.phone ? "border-red-500" : ""
                    }`}
                  placeholder="Your phone number"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>

              {/* Address Field */}
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Address
                </label>
                <textarea
                  id="message"
                  rows="2"
                  {...register("message", { required: "Address is required" })}
                  className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300 ${errors.message ? "border-red-500" : ""
                    }`}
                  placeholder="Your address"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="px-4 py-2 bg-[#161717] text-white rounded hover:bg-[#000000]"
              >
                Submit
              </button>
            </form>



            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 text-[#161717] hover:text-[#000000]"
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactUsModal;
