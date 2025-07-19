import React, { useState } from 'react';
import employ from './images/employ.png';
import career from './images/career.png';
import management from './images/management.png';
import think from './images/think.png';
import contact from './images/contact.png';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

function Bottom() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (idx) => {
    setOpenFAQ(openFAQ === idx ? null : idx);
  };

  const faqItems = [
    {
      question: 'Could distance be a barrier?',
      answer:
        'Distance may affect availability depending on the teacher’s location and your needs. We recommend discussing upfront.',
    },
    {
      question: 'How many extra home lesson jobs can I apply for?',
      answer: 'There is no limit — you can apply for as many as you’re qualified for.',
    },
    {
      question: 'How can I be sure that the teachers listed are genuine?',
      answer: 'We vet all teachers and verify their credentials before listing them.',
    },
    {
      question: 'How many hours for an extra home lesson schedule?',
      answer: 'Lesson hours vary depending on the agreed schedule between you and the teacher.',
    },
  ];

  return (
    <div className="px-4 py-12 space-y-16 overflow-x-hidden">
      {/* Why Onions */}
      <section>
        <h1 className="text-3xl font-bold text-center mb-8">Why Onions?</h1>
        <div className="grid gap-8 md:grid-cols-3">
          {[employ, career, management].map((img, idx) => (
            <div
              key={idx}
              className="bg-white rounded shadow p-6 text-center space-y-4"
            >
              <img
                src={img}
                alt="why-onions"
                className="w-16 h-16 mx-auto"
              />
              <h2 className="text-xl font-semibold">Employment Opportunities</h2>
              <p className="text-sm text-gray-600">
                Reducing the rates of unemployment in Nigeria and providing career
                development opportunities to Teachers.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h1 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h1>
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <img
            src={think}
            alt="faq"
            className="w-48 md:w-64 mx-auto md:mx-0"
          />
          <div className="flex-1 space-y-4">
            {faqItems.map((item, idx) => (
              <div
                key={idx}
                className="border-b pb-2"
              >
                <button
                  type="button"
                  className="flex justify-between items-center w-full cursor-pointer"
                  onClick={() => toggleFAQ(idx)}
                >
                  <h4 className="text-gray-800 font-medium text-left">{item.question}</h4>
                  <ChevronDownIcon
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${openFAQ === idx ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${openFAQ === idx ? 'max-h-40 mt-2' : 'max-h-0'}`}
                >
                  <p className="text-sm text-gray-600">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-gray-100 p-6 rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Left */}
          <div className="flex-1 space-y-4">
            <h2 className="text-xl font-semibold">Have Further Enquiries?</h2>
            <p>Send us a mail for more information</p>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm mb-1">Name</p>
                  <input
                    className="w-full border border-gray-300 p-2 rounded"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <p className="text-sm mb-1">Email Address</p>
                  <input
                    className="w-full border border-gray-300 p-2 rounded"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <p className="text-sm mb-1">Message</p>
                <textarea
                  rows={5}
                  className="w-full border border-gray-300 p-2 rounded"
                  placeholder="Your message"
                />
              </div>
              <button
                type="submit"
                className="w-[340px] h-[30px] border-none text-[#35740b] font-bold mt-10 rounded bg-[#fefefe]"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Right */}
          <img
            src={contact}
            alt="contact"
            className="w-64 md:w-80"
          />
        </div>
      </section>
    </div>
  );
}

export default Bottom;
