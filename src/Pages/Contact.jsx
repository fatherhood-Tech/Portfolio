import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="bg-black text-black-300 p-8">
      <h2 className="text-4xl text-gray-800 tracking-widset text-white font-medium mb-4">
        Contact Us
      </h2>
      <div className="h-0.5 bg-gray-800 w-24 mb-2"></div>
      <p className="text-gray-100 mb-8">
        Fill in the form to start the conversation
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="mb-8 lg:mb-0 text-gray-100">
          <h3 className="text-2xl mb-8">Rwanda</h3>
          <p className="mb-2">
            <ion-icon name="call-outline"></ion-icon> +250 780 597 235
          </p>
          <p className="mb-2">
            <ion-icon name="mail-outline"></ion-icon> fatherhoodtech@gmail.com
          </p>
          <p className="mb-2">
            <ion-icon name="location-outline"></ion-icon> NM 151 St, Musanze,
            Muhoza
          </p>
          <p className="mb-2">
            <ion-icon name="time-outline"></ion-icon> Open 9 AM to 5 PM
          </p>
        </div>
        <div className="lg-colspan-2">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  {...register("fullName")}
                  placeholder="Full names"
                  className="w-full p-2 rounded form-input"
                />
                <input
                  {...register("email")}
                  placeholder="Email"
                  type="email"
                  className="w-full p-2 rounded form-input"
                />
              </div>
              <textarea
                {...register("message")}
                placeholder="Your text"
                className="w-full p-2 rounded form-input"
              />
              <button
                type="submit"
                className="inline-block px-12 py-2.5 rounded text-sm cursor-pointer select-none outline-none transition-all duration-500 focus:outline-none focus:ring-0 focus:ring-offset-0 hover:-translate-y-1.5 bg-gray-800 text-white"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
