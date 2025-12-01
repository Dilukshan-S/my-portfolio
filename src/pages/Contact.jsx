import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    emailjs.send(
      'service_5afum5w',
      'template_q6ob2gr',    
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      },
      'QTOnPdOkRMMzNp9Xj'      
    )
    .then(() => {
      setLoading(false);
      setStatus('Message sent successfully!');
      setForm({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      setLoading(false);
      console.error('EmailJS error:', error.text || error);
      setStatus('Failed to send message. Please try again later.');
    });
  };

  return (
    <motion.div 
      className="min-h-screen flex items-center justify-center px-6 py-12 bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-2xl bg-black bg-opacity-30 p-8 rounded-2xl shadow-2xl backdrop-blur-sm">
        <h2 className="text-3xl font-bold mb-6 text-center">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 font-semibold">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              aria-label="Full name"
              className="w-full p-3 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 font-semibold">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
              aria-label="Email address"
              className="w-full p-3 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 font-semibold">Message</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              placeholder="Tell me about your project or inquiry..."
              aria-label="Message content"
              className="w-full p-3 rounded-lg bg-white text-black h-32 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-violet-600 hover:bg-violet-700 text-white py-3 px-6 rounded-lg font-semibold transition disabled:opacity-60"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
          {status && (
            <div role="alert" className={`text-center mt-4 p-3 rounded-lg ${status.includes('successfully') ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'}`}>
              {status}
            </div>
          )}
        </form>
      </div>
    </motion.div>
  );
}
