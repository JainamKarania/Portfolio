import React, { useState } from 'react';
import '../assets/bg-banner.webp'
import './style.css'
export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setIsSubmitted(true);
  };

  return (
    <div>
        <section className="py-20 bg-contact-overlay bg-no-repeat bg-cover">
            <div className="container max-w-7xl px-4 mx-auto">
                <div className="flex w-full items-center justify-between bg-blue-600 rounded-2xl pr-4 py-4">
                    <div className="flex flex-col p-8 max-w-md w-full items-start gap-12">
                        <h2 className="text-6xl">Lets Connect</h2>
                        <button className='flex p-4 bg-green-600 border-none rounded-2xl'>Download CV</button>
                    </div>
    <div className="max-w-md w-full bg-neutral-950 p-8 rounded-2xl">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      {isSubmitted ? (
        <p className="text-green-500">Thank you for your submission!</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="mt-1 p-2 w-full border rounded-md" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 p-2 w-full border rounded-md" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
            <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} className="mt-1 p-2 w-full border rounded-md"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Submit</button>
        </form>
      )}
      </div>
    </div>
    </div>
    </section>
    </div>
  );
};

