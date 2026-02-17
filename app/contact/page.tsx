'use client';

import { FormEvent, useState } from 'react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-5xl font-extrabold text-loadlink-navy mb-4 text-center">
          Get in Touch
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>

        {submitted ? (
          <div className="bg-green-100 border border-green-400 text-green-700 px-8 py-6 rounded-lg text-center mb-8">
            <h2 className="font-bold text-lg mb-2">Thank you!</h2>
            <p>We've received your message and will get back to you soon.</p>
          </div>
        ) : null}

        <form onSubmit={handleSubmit} className="bg-light-bg rounded-lg p-8 shadow-lg">
          {/* Name Field */}
          <div className="mb-6">
            <label htmlFor="name" className="block text-loadlink-navy font-bold mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-loadlink-orange transition-all"
              placeholder="John Doe"
            />
          </div>

          {/* Email Field */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-loadlink-navy font-bold mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-loadlink-orange transition-all"
              placeholder="john@example.com"
            />
          </div>

          {/* Subject Field */}
          <div className="mb-6">
            <label htmlFor="subject" className="block text-loadlink-navy font-bold mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-loadlink-orange transition-all"
              placeholder="How can we help?"
            />
          </div>

          {/* Message Field */}
          <div className="mb-8">
            <label htmlFor="message" className="block text-loadlink-navy font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-loadlink-orange transition-all resize-none"
              placeholder="Tell us what you need..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-loadlink-orange text-white font-bold py-3 px-6 rounded-lg hover:bg-loadlink-navy transition-all duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <i className="fas fa-phone text-loadlink-orange text-3xl mb-4 block"></i>
            <h3 className="font-bold text-loadlink-navy mb-2">Phone</h3>
            <p className="text-gray-600">+1 (555) 123-4567</p>
          </div>
          <div className="text-center">
            <i className="fas fa-envelope text-loadlink-orange text-3xl mb-4 block"></i>
            <h3 className="font-bold text-loadlink-navy mb-2">Email</h3>
            <p className="text-gray-600">support@loadlink.com</p>
          </div>
          <div className="text-center">
            <i className="fas fa-map-marker-alt text-loadlink-orange text-3xl mb-4 block"></i>
            <h3 className="font-bold text-loadlink-navy mb-2">Address</h3>
            <p className="text-gray-600">123 Logistics Ave, Sydney, Australia</p>
          </div>
        </div>
      </div>
    </div>
  );
}
