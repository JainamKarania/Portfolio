import React, { useState ,useRef } from 'react';
import '../assets/bg-banner.webp'
import emailjs from '@emailjs/browser';
import Resume from './JainamKarania_Resume.pdf';
export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_o1lvhpf', 'template_n3nxo8p', form.current, {
        publicKey: 'eRoY1OzyVF6A82LeH',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setSubmitted(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
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
                    <a href={Resume} download><button className='flex p-4 bg-green-600 border-none rounded-2xl'>Download CV</button></a>
                    </div>
    <div className="md:w-full w-full bg-neutral-950 p-8 rounded-2xl">
      {!submitted ? (
              <>
      <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
        <form onSubmit={sendEmail} ref={form}  className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-white">Name</label>
            <input type="text" id="name" name="name"  className="mt-1 p-2 w-full text-black border rounded-md" />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-white">Email</label>
            <input type="email" id="email" name="email"  className="mt-1 text-black p-2 w-full border rounded-md" />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-medium text-white">Your Message</label>
            <textarea id="message" name="message" rows="4"  className="mt-1 p-2 text-black w-full border rounded-md"></textarea>
          </div>
          <div>
              <label htmlFor="attachment" className="block text-lg font-medium text-white">Attachment</label>
              <input type="file" id="attachment" name="attachment" className="mt-1 p-2 text-black w-full border rounded-md" />
            </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Submit</button>
        </form>
        </>
              ) : (
                <div className="text-left">
                  <h2 className="text-3xl font-bold mb-4 text-white">Thank you for reaching out!</h2>
                  <p className="text-lg text-white">We appreciate your message. Our team will get back to you as soon as possible.</p>
                </div>
              )}
      </div>
    </div>
    </div>
    </section>
    </div>
  );
};

