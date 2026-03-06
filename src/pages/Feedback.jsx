import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPaperPlane, FaStar } from 'react-icons/fa';

const Feedback = () => {
  const [form, setForm] = useState({ name: '', email: '', rating: '', feedback: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: '', email: '', rating: '', feedback: '' });
  };

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1 data-aos="fade-up">Your <span>Feedback</span></h1>
          <p data-aos="fade-up" data-aos-delay="100">We value your opinion. Help us improve our services.</p>
          <div className="page-breadcrumb" data-aos="fade-up" data-aos-delay="200">
            <Link to="/">Home</Link><span>/</span><span>Feedback</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-form" style={{ maxWidth: '700px', margin: '0 auto' }}>
            <h3><FaStar style={{ color: 'var(--primary)', marginRight: '10px' }} />Share Your Feedback</h3>
            {submitted && <div className="form-success">Thank you for your feedback!</div>}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Your Name</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Enter your name" required />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Enter your email" required />
              </div>
              <div className="form-group">
                <label>Rating</label>
                <select name="rating" value={form.rating} onChange={handleChange} required style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '2px solid #e0e0e0', fontSize: '0.95rem', fontFamily: 'Poppins, sans-serif', outline: 'none' }}>
                  <option value="">Select Rating</option>
                  <option value="5">Excellent</option>
                  <option value="4">Very Good</option>
                  <option value="3">Good</option>
                  <option value="2">Fair</option>
                  <option value="1">Poor</option>
                </select>
              </div>
              <div className="form-group">
                <label>Your Feedback</label>
                <textarea name="feedback" value={form.feedback} onChange={handleChange} placeholder="Tell us about your experience..." rows="5" required></textarea>
              </div>
              <button type="submit" className="form-submit"><FaPaperPlane /> Submit Feedback</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feedback;
