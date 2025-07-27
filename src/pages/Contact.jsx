import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <motion.div 
      className="min-h-screen flex items-center justify-center px-6 py-12 bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-2xl bg-black bg-opacity-30 p-8 rounded-2xl shadow-2xl backdrop-blur-sm">
        <h2>(page under development)</h2>
        <h2 className="text-3xl font-bold mb-6 text-center"> Get in Touch </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-white text-black"
            />
          </div>
          <div>
            <label className="block mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-white text-black"
            />
          </div>
          <div>
            <label className="block mb-2">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-white text-black h-32"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-violet-600 hover:bg-violet-700 text-white py-3 px-6 rounded-lg font-semibold transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </motion.div>
  );
}