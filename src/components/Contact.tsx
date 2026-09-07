import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Send,
  FileDown,
  CheckCircle,
  AlertCircle,
  Clock,
  Compass
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface ContactProps {
  onOpenCvModal: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenCvModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus('error');
      setErrorMessage('Please fill in your name, email address, and message.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setFormStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setFormStatus('sending');

    // Simulate sending & trigger client mailto backup
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 800);
  };

  return (
    <section id="contact" className="py-20 bg-white text-slate-800 relative border-b border-slate-200 blueprint-bg">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-mono text-orange-600 font-bold tracking-wider uppercase mb-2">
              <Mail className="w-4 h-4" />
              <span>Section 12 // Direct Communication</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Let's Connect
            </h2>
          </div>
          <p className="mt-2 md:mt-0 text-xs sm:text-sm font-mono text-slate-500 uppercase">
            ENGINEERING CONSULTATION, INTERNSHIP & CAREER ENQUIRIES
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Details & Information (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <p className="text-slate-600 text-base leading-relaxed">
              Interested in connecting regarding civil engineering, construction, structural engineering, surveying, or professional opportunities? Feel free to get in touch.
            </p>

            {/* Structured Contact Cards */}
            <div className="space-y-4">
              
              {/* Phone */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start space-x-4 shadow-2xs">
                <div className="p-3 rounded-lg bg-orange-50 border border-orange-200 text-orange-600 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-500 uppercase block font-semibold">Phone / Mobile</span>
                  <a
                    href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                    className="text-base font-bold text-slate-900 hover:text-orange-600 font-mono transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                  <span className="text-[10px] text-slate-500 font-mono block mt-0.5">Available for calls & direct coordination</span>
                </div>
              </div>

              {/* Email */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start space-x-4 shadow-2xs">
                <div className="p-3 rounded-lg bg-orange-50 border border-orange-200 text-orange-600 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[11px] font-mono text-slate-500 uppercase block font-semibold">Email Address</span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm sm:text-base font-bold text-slate-900 hover:text-orange-600 font-mono transition-colors truncate block"
                  >
                    {personalInfo.email}
                  </a>
                  <span className="text-[10px] text-slate-500 font-mono block mt-0.5">Checked daily for engineering opportunities</span>
                </div>
              </div>

              {/* Location */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start space-x-4 shadow-2xs">
                <div className="p-3 rounded-lg bg-orange-50 border border-orange-200 text-orange-600 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-500 uppercase block font-semibold">Location / Address</span>
                  <span className="text-sm font-semibold text-slate-900 block">
                    {personalInfo.location}
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono block mt-0.5">Uttara, Dhaka, Bangladesh</span>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start space-x-4 shadow-2xs">
                <div className="p-3 rounded-lg bg-orange-50 border border-orange-200 text-orange-600 shrink-0">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[11px] font-mono text-slate-500 uppercase block font-semibold">LinkedIn Profile</span>
                  <a
                    href={personalInfo.linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-slate-900 hover:text-orange-600 font-mono transition-colors truncate block"
                  >
                    {personalInfo.linkedIn}
                  </a>
                  <span className="text-[10px] text-slate-500 font-mono block mt-0.5">Professional engineering network</span>
                </div>
              </div>

            </div>

            {/* Download CV Banner */}
            <div className="p-5 rounded-xl bg-gradient-to-r from-orange-50 via-slate-50 to-slate-50 border border-orange-200 flex items-center justify-between gap-4 shadow-xs">
              <div>
                <span className="font-heading text-base font-bold text-slate-900 block">Curriculum Vitae</span>
                <span className="text-xs text-slate-600 font-mono">Download formal engineering resume</span>
              </div>
              <button
                onClick={onOpenCvModal}
                id="contact-download-cv-btn"
                className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-lg bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs uppercase tracking-wider shrink-0 transition-all shadow-xs active:scale-95"
              >
                <FileDown className="w-4 h-4" />
                <span>Download CV</span>
              </button>
            </div>

          </div>

          {/* Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6 sm:p-8 shadow-sm relative">
              <div className="border-b border-slate-200 pb-4 mb-6">
                <h3 className="font-heading text-xl font-bold text-slate-900">
                  Send a Direct Message
                </h3>
                <p className="text-xs font-mono text-slate-500 mt-1 uppercase">
                  COMMUNICATION FORM // DIRECT RECIPIENT: SAMI
                </p>
              </div>

              {/* Status Notifications */}
              {formStatus === 'success' && (
                <div className="mb-6 p-4 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">Message Prepared Successfully!</span>
                    Thank you for reaching out. You can also send directly via{' '}
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="underline font-bold text-emerald-900"
                    >
                      {personalInfo.email}
                    </a>.
                  </div>
                </div>
              )}

              {formStatus === 'error' && (
                <div className="mb-6 p-4 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-xs font-mono flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">Validation Alert</span>
                    {errorMessage}
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-mono text-slate-700 font-semibold uppercase tracking-wider mb-1.5">
                      Your Name <span className="text-orange-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Engr. Tanvir Ahmed"
                      className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-orange-600 focus:ring-1 focus:ring-orange-600 font-mono transition-colors"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-mono text-slate-700 font-semibold uppercase tracking-wider mb-1.5">
                      Your Email <span className="text-orange-600">*</span>
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. name@organization.com"
                      className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-orange-600 focus:ring-1 focus:ring-orange-600 font-mono transition-colors"
                      required
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-mono text-slate-700 font-semibold uppercase tracking-wider mb-1.5">
                    Subject / Project Reference
                  </label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Site Supervision Opportunity / Structural Query"
                    className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-orange-600 focus:ring-1 focus:ring-orange-600 font-mono transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono text-slate-700 font-semibold uppercase tracking-wider mb-1.5">
                    Message Content <span className="text-orange-600">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Detail your inquiry regarding civil engineering roles, site supervision, structural analysis, or project consultation..."
                    className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-orange-600 focus:ring-1 focus:ring-orange-600 font-mono transition-colors"
                    required
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    id="contact-submit-btn"
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-lg bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs font-mono uppercase tracking-wider transition-all shadow-xs active:scale-95 disabled:opacity-50"
                  >
                    <span>{formStatus === 'sending' ? 'Dispatching...' : 'Send Message'}</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <a
                    href={`mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject || 'Engineering Inquiry')}&body=${encodeURIComponent(formData.message || '')}`}
                    className="text-xs font-mono text-slate-600 hover:text-orange-600 hover:underline"
                  >
                    Or open default email client directly →
                  </a>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
