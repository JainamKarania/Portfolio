import React, { useState } from 'react';
import '../assets/bg-banner.webp'
import './style.css'
import { TypeAnimation } from 'react-type-animation';
export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attachement:'',
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
        <section className="py-20 bg-contact-overlay bg-no-repeat bg-cover" id='contact'>
            <div className="container max-w-7xl px-4 mx-auto">
                <div className="flex flex-col gap-4 p-4 md:flex-row items-center space-y-6 md:space-y-0 bg-blue-600 rounded-2xl">
                    <div className="md:w-full p-4 flex flex-col max-w-xl w-full items-start gap-4">
                    <h2 className="text-6xl font-bold mb-4">Lets Connect</h2>
                    <p className='text-3xl font-medium'>Looking for a passionate Frontend Developer?</p>
                    <p className="text-xl font-medium">Drop an email on: jainamkarania05@gmail.com.</p>
                    <p className="text-xl font-medium">Contact me on : 9104955662.</p>
                    <button className='flex p-4 bg-green-600 border-none rounded-2xl'>Download CV</button>
                    </div>
    <div className="md:w-full w-full bg-neutral-950 p-8 rounded-2xl">
      <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
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
          <div>
              <label htmlFor="attachment" className="block text-sm font-medium text-gray-700">Attachment</label>
              <input type="file" id="attachment" name="attachment" onChange={handleChange} className="mt-1 p-2 w-full border rounded-md" />
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

