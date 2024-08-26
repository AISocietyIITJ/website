import React, { useEffect, useState } from 'react';
import Example from './Button';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Contactus() {
    useEffect(() => {
        Aos.init({ duration: 700 });
      }, []);
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending....');
    const formData = new FormData(event.target);

    formData.append('access_key', '2fbd56fe-8b2d-40bc-b0ef-11d4f0710404');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult('Form Submitted Successfully');
      event.target.reset();
    } else {
      console.log('Error', data);
      setResult(data.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4 pb-24 md:py-36" data-aos="fade-up">
      <div className="w-full max-w-2xl bg-black p-4 rounded-lg shadow-lg">
        <h1 className="md:pt-4 pt-36 text-3xl md:text-6xl font-bold text-white text-center mb-4">
          Get in touch with the Team of RAID
        </h1>
        <p className="text-lg md:text-xl dark:text-gray-400 text-center mb-6">
          "Got questions, feedback, or ideas? We’re here to listen and collaborate. Connect with us and be a part of our AI journey at IIT Jodhpur."
        </p>
        <div>
            <Example />
        </div>
        <form onSubmit={onSubmit} className="space-y-8">
          <div className="grid gap-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-200"
              >
                Email
              </label>
              <input
                className="w-full rounded-md border border-gray-300 bg-transparent p-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
                type="email"
                name="email"
                id="email"
                required
                placeholder="Email"
              />
            </div>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-200"
              >
                Name
              </label>
              <input
                className="w-full rounded-md border border-gray-300 bg-transparent p-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-200"
              >
                Message
              </label>
              <textarea
                className="w-full rounded-md border border-gray-300 bg-transparent p-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
                id="message"
                name="message"
                placeholder="Leave us a message"
                required
                rows={4}
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          >
            Send Message
          </button>
          {result && (
            <p className="mt-4 text-center text-white">{result}</p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Contactus;
