import React, { useState } from "react";
import { image } from "../assets/index";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="mt-16">
      {/* Heading */}
      <div className="text-2xl text-center pt-8 border-t">
        <div className="inline-flex gap-2 items-center mt-3">
          <p className="text-gray-500">
            CONTACT <span className="text-gray-700 font-medium">US</span>
          </p>
          <p className="w-8 sm:w-12 h-px sm:h-0.5 bg-gray-700"></p>
        </div>
      </div>

      {/* Content */}
      <div className="my-10 flex flex-col md:flex-row gap-10 mb-28 justify-center items-center px-4">
        {/* Left Section */}
        <div className="flex flex-col gap-6 max-w-md">
          <img
            src={image.contact}
            alt="Contact"
            className="w-full rounded-lg"
          />

          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">
            54709 Hopes <br />
            Suite 350, Krishna Nagar, CBE
          </p>

          <p className="text-gray-500">
            Tel: (415) 555-0132 <br />
            Email: admin@forever.com
          </p>

          <p className="font-semibold text-xl text-gray-600">
            Careers at Forever
          </p>
          <p className="text-gray-500">
            Learn more about our teams and job openings.
          </p>

          <button className="border border-black px-8 py-3 text-sm hover:bg-black hover:text-white transition-all duration-500 w-fit">
            Explore Jobs
          </button>
        </div>

        {/* Right Section - Contact Form */}
        <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Send us a message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
