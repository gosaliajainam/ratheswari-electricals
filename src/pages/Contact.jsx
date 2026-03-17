import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const validationRules = {
  name: {
    required: true,
    validate: (v) => v.trim().length >= 2,
    message: 'Name is required (minimum 2 characters)',
  },
  phone: {
    required: true,
    validate: (v) => /^\d{10}$/.test(v),
    message: 'Phone number must be exactly 10 digits (numbers only)',
  },
  email: {
    required: true,
    validate: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
    message: 'Please enter a valid email address',
  },
  message: {
    required: true,
    validate: (v) => v.trim().length >= 10,
    message: 'Message is required (minimum 10 characters)',
  },
};

const Contact = () => {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validateField = (name, value) => {
    const rule = validationRules[name];
    if (!rule) return '';
    if (rule.required && !value.toString().trim()) return rule.message;
    if (!rule.validate(value.toString())) return rule.message;
    return '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      const numericOnly = value.replace(/\D/g, '').slice(0, 10);
      setForm((prev) => ({ ...prev, phone: numericOnly }));
      if (touched[name]) {
        setErrors((prev) => ({ ...prev, phone: validateField('phone', numericOnly) }));
      }
      return;
    }
    setForm((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(validationRules).forEach((field) => {
      const error = validateField(field, form[field]);
      if (error) newErrors[field] = error;
    });

    setErrors(newErrors);
    setTouched({ name: true, phone: true, email: true, message: true });

    if (Object.keys(newErrors).length > 0) return;

    setLoading(true);
    setSubmitError('');

    try {
      const res = await fetch('https://formsubmit.co/ajax/info@ratheswarielectricals.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          Name: form.name,
          Phone: form.phone,
          Email: form.email,
          Message: form.message,
          _subject: 'New Inquiry from Website',
          _template: 'table',
        }),
      });
      if (res.ok) {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
        setForm({ name: '', phone: '', email: '', message: '' });
        setErrors({});
        setTouched({});
      } else {
        setSubmitError('Failed to send inquiry. Please try again.');
      }
    } catch {
      setSubmitError('Failed to send inquiry. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1 data-aos="fade-up">Contact <span>Us</span></h1>
          <p data-aos="fade-up" data-aos-delay="100">Get in touch for any inquiry or service request</p>
          <div className="page-breadcrumb" data-aos="fade-up" data-aos-delay="200">
            <Link to="/">Home</Link><span>/</span><span>Contact</span>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--light)' }}>
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info" data-aos="fade-right">
              <h3>Ratheswari Electricals Pvt Ltd</h3>
              <p>We understand the technical needs of different sectors and provide customized solutions.</p>

              <div className="contact-detail">
                <div className="contact-detail-icon"><FaPhone /></div>
                <div className="contact-detail-text">
                  <h4>Phone</h4>
                  <p>8866877336</p>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon"><FaEnvelope /></div>
                <div className="contact-detail-text">
                  <h4>Email</h4>
                  <p>ratheswarielectricals@gmail.com</p>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon"><FaClock /></div>
                <div className="contact-detail-text">
                  <h4>Working Hours</h4>
                  <p>Monday – Saturday, 10:00 AM to 6:00 PM</p>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon"><FaMapMarkerAlt /></div>
                <div className="contact-detail-text">
                  <h4>Location</h4>
                  <p>B-104,Shakti ETC,Vandematram road,Opp. Nayra Petrol pump, Vandematram, Gota, Ahmedabad-382481, Gujarat, India</p>
                </div>
              </div>
            </div>

            <div className="contact-form" data-aos="fade-left">
              <h3>Send Us Inquiry</h3>
              <p style={{ color: 'var(--gray)', fontSize: '0.9rem', marginBottom: 24 }}>
                Fields marked with * are required
              </p>
              {submitted && (
                <div style={{ padding: '12px 20px', background: '#d4edda', color: '#155724', borderRadius: 8, marginBottom: 20, fontWeight: 500 }}>
                  Thank you! Your inquiry has been submitted successfully.
                </div>
              )}
              {submitError && (
                <div style={{ padding: '12px 20px', background: '#f8d7da', color: '#721c24', borderRadius: 8, marginBottom: 20, fontWeight: 500 }}>
                  {submitError}
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className={`form-group ${errors.name && touched.name ? 'has-error' : ''}`}>
                    <label>Name *</label>
                    <input
                      type="text" name="name" value={form.name}
                      onChange={handleChange} onBlur={handleBlur}
                      placeholder="Your Name"
                    />
                    {errors.name && touched.name && <span className="field-error">{errors.name}</span>}
                  </div>
                  <div className={`form-group ${errors.phone && touched.phone ? 'has-error' : ''}`}>
                    <label>Phone *</label>
                    <input
                      type="tel" name="phone" value={form.phone}
                      onChange={handleChange} onBlur={handleBlur}
                      placeholder="Your Phone (10 digits)" maxLength={10}
                    />
                    {errors.phone && touched.phone && <span className="field-error">{errors.phone}</span>}
                  </div>
                </div>
                <div className={`form-group ${errors.email && touched.email ? 'has-error' : ''}`}>
                  <label>Email *</label>
                  <input
                    type="email" name="email" value={form.email}
                    onChange={handleChange} onBlur={handleBlur}
                    placeholder="Your Email"
                  />
                  {errors.email && touched.email && <span className="field-error">{errors.email}</span>}
                </div>
                <div className={`form-group ${errors.message && touched.message ? 'has-error' : ''}`}>
                  <label>Message *</label>
                  <textarea
                    name="message" value={form.message}
                    onChange={handleChange} onBlur={handleBlur}
                    placeholder="Your Message"
                  ></textarea>
                  {errors.message && touched.message && <span className="field-error">{errors.message}</span>}
                </div>
                <button type="submit" className="form-submit" disabled={loading}>
                  <FaPaperPlane style={{ marginRight: 8 }} /> {loading ? 'Sending...' : 'Send Inquiry'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
