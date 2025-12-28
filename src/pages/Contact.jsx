import React from "react";

const Contact = () => {
  return (
    <div className="my-10 max-w-[90%] lg:max-w-3xl mx-auto font-rubik">
      <form action="" className="shadow-md w-full p-4">
        <h1 className="text-center font-bold text-3xl">Contact Us</h1>

        <div className="my-2">
          <label>
            Name <span className="text-red-700">*</span>
          </label>
          <br />
          <input
            className="border w-full rounded-md px-2 py-1 border-gray-500 focus:outline-none focus:ring-1 ring-primary transition-all ease-in-out"
            type="text"
            placeholder="Enter your name"
          />
        </div>
        <div className="my-2">
          <label>
            Phone <span className="text-red-700">*</span>
          </label>
          <br />
          <input
            className="border w-full rounded-md px-2 py-1 border-gray-500 focus:outline-none focus:ring-1 ring-primary transition-all ease-in-out"
            type="text"
            placeholder="Enter your phone number"
          />
        </div>
        <div className="my-2">
          <label>
            Message
          </label>
          <br />
          <textarea
            rows={5}
            className="border w-full rounded-md px-2 py-1 border-gray-500 focus:outline-none focus:ring-1 ring-primary transition-all ease-in-out"
            type="text"
            placeholder="Message"
          />
        </div>

        <div className="my-2 flex justify-end">
          <button className="bg-primary text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-700 transition-all ease-in-out">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
