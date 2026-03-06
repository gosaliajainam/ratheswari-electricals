import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: '', phone: '', email: '', message: '' });
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
                  <p>Gujarat, India</p>
                </div>
              </div>
            </div>

            <div className="contact-form" data-aos="fade-left">
              <h3>Send Us Inquiry</h3>
              {submitted && (
                <div style={{ padding: '12px 20px', background: '#d4edda', color: '#155724', borderRadius: 8, marginBottom: 20, fontWeight: 500 }}>
                  Thank you! Your inquiry has been submitted successfully.
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Name</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your Name" required />
                  </div>
                  <div className="form-group">
                    <label>Phone</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Your Phone" required />
                  </div>
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Message" required></textarea>
                </div>
                <button type="submit" className="form-submit">
                  <FaPaperPlane style={{ marginRight: 8 }} /> Send Inquiry
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
