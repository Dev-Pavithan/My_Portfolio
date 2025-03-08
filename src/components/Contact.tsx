import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from 'emailjs-com';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  // Explicitly define event types
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus('Sending...');

    // Type assertion to specify that e.target is an HTMLFormElement
    const form = e.target as HTMLFormElement;

    emailjs
      .sendForm(
        'service_66phzfj',
        'template_35kxhv4',
        form,  // Now TypeScript understands form as HTMLFormElement
        '2v9qjzbEUSsIJJCiI'
      )
      .then(
        (response) => {
          setStatus('Success!');
          console.log('Success:', response);
        },
        (error) => {
          setStatus('Error, please try again.');
          console.log('Error:', error);
        }
      );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#1A1A1A] pt-24 pb-20"
    >
      <div className="px-4 mx-auto max-w-7xl">
        <div className="mb-12">
          <h1 className="mb-6 text-4xl font-bold">Contact</h1>
          <div className="w-12 h-1 bg-yellow-400"></div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="space-y-6">
              <div className="rounded-2xl bg-[#2A2A2A] p-6">
                <h2 className="mb-6 text-2xl font-semibold">Get in Touch</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="rounded-full bg-[#333333] p-3">
                      <Mail className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="text-gray-300">pavithanunenthiran29@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="rounded-full bg-[#333333] p-3">
                      <Phone className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Phone</p>
                      <p className="text-gray-300">075 042 9863</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="rounded-full bg-[#333333] p-3">
                      <MapPin className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Location</p>
                      <p className="text-gray-300">Jaffna, Sri Lanka</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="rounded-2xl bg-[#2A2A2A] p-6">
              <h2 className="mb-6 text-2xl font-semibold">Send Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="rounded-lg bg-[#333333] px-4 py-3 text-gray-300 outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="rounded-lg bg-[#333333] px-4 py-3 text-gray-300 outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full rounded-lg bg-[#333333] px-4 py-3 text-gray-300 outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full rounded-lg bg-[#333333] px-4 py-3 text-gray-300 outline-none focus:ring-2 focus:ring-yellow-400"
                ></textarea>
                <button
                  type="submit"
                  className="flex items-center px-6 py-3 space-x-2 font-semibold text-gray-900 transition-colors bg-yellow-400 rounded-lg hover:bg-yellow-300"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
              {status && (
                <div className="mt-4 text-center text-gray-400">{status}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
