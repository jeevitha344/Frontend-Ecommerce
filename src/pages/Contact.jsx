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
      <div className="my-6 max-w-6xl mx-auto px-4 py-3">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    
    {/* Left Section */}
    <div className="space-y-6">
      <img
        src={image.contact}
        alt="Contact"
        className="w-full h-[280px] object-cover rounded-xl"
      />

      <div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">
          Our Store
        </h3>
        <p className="text-gray-500 leading-relaxed">
          54709 Hopes <br />
          Suite 350, Krishna Nagar, CBE
        </p>
      </div>

      <p className="text-gray-500">
        Tel: (415) 555-0132 <br />
        Email: admin@forever.com
      </p>

      <div>
        <h3 className="text-xl font-semibold text-gray-700 mb-1">
          Careers at Forever
        </h3>
        <p className="text-gray-500 mb-3">
          Learn more about our teams and job openings.
        </p>
        <button className="border border-black px-6 py-2 text-sm hover:bg-black hover:text-white transition">
          Explore Jobs
        </button>
      </div>
    </div>

    {/* Right Section - Form */}
    <div className="bg-white rounded-2xl shadow-xl px-5 py-5 mb-60">
      <h3 className="text-2xl font-semibold text-gray-800 mb-5 ml-3">
        Send us a message
      </h3>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
        />

        <textarea
          rows="4"
          placeholder="Your Message"
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
</div>
    </div>
  );
};

export default Contact;
