import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaPaperPlane, FaStar, FaCheckCircle,
  FaUser, FaEnvelope, FaPhone, FaBuilding, FaTools
} from 'react-icons/fa';

const Feedback = () => {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', company: '', service: '', rating: 0, feedback: ''
  });
  const [hoverRating, setHoverRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleStarClick = (rating) => setForm({ ...form, rating });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', phone: '', company: '', service: '', rating: 0, feedback: '' });
  };

  const getRatingLabel = (r) => {
    const labels = { 1: 'Poor', 2: 'Fair', 3: 'Good', 4: 'Very Good', 5: 'Excellent' };
    return labels[r] || '';
  };

  const benefits = [
    { icon: <FaCheckCircle />, text: 'Helps us improve service quality' },
    { icon: <FaCheckCircle />, text: 'Reviewed by our leadership team' },
    { icon: <FaCheckCircle />, text: 'Helps train our technicians better' },
    { icon: <FaCheckCircle />, text: '100% confidential & secure' },
  ];

  return (
    <>
      {/* PAGE HEADER */}
      <section className="page-header">
        <div className="container">
          <h1 data-aos="fade-up">Your <span>Feedback</span></h1>
          <p data-aos="fade-up" data-aos-delay="100">
            We value your opinion. Help us improve our services.
          </p>
          <div className="page-breadcrumb" data-aos="fade-up" data-aos-delay="200">
            <Link to="/">Home</Link><span>/</span><span>Feedback</span>
          </div>
        </div>
      </section>

      {/* FEEDBACK SECTION */}
      <section className="section" style={{ backgroundColor: 'var(--light)' }}>
        <div className="container">
          <div className="fb-layout">

            {/* LEFT INFO PANEL */}
            <div className="fb-info" data-aos="fade-right">
              <div className="fb-info-top">
                <div className="fb-info-icon">
                  <FaStar />
                </div>
                <h3>Share Your Experience</h3>
                <p>
                  Your honest feedback helps us grow and deliver better electrical solutions to all our clients.
                </p>
              </div>

              <ul className="fb-benefits">
                {benefits.map((b, i) => (
                  <li key={i}>
                    <span className="fb-check">{b.icon}</span>
                    <span>{b.text}</span>
                  </li>
                ))}
              </ul>

              <div className="fb-contact-box">
                <p className="fb-contact-label">Have an urgent concern?</p>
                <a href="tel:8866877336" className="fb-call-link">
                  <FaPhone /> 88668 77336
                </a>
                <a href="mailto:ratheswarielectricals@gmail.com" className="fb-email-link">
                  <FaEnvelope /> ratheswarielectricals@gmail.com
                </a>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="contact-form" data-aos="fade-left">
              <h3 style={{ fontSize: '1.4rem', color: 'var(--secondary)', marginBottom: 6 }}>
                <FaStar style={{ color: 'var(--primary)', marginRight: 8, verticalAlign: 'middle' }} />
                Feedback Form
              </h3>
              <p style={{ color: 'var(--gray)', fontSize: '0.9rem', marginBottom: 24 }}>
                Fields marked with * are required
              </p>

              {submitted && (
                <div className="fb-success">
                  <FaCheckCircle />
                  <div>
                    <strong>Thank you for your feedback!</strong>
                    <p>Our team will review it and get back to you shortly.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label><FaUser className="fb-label-icon" /> Your Name *</label>
                    <input
                      type="text" name="name" value={form.name}
                      onChange={handleChange} placeholder="e.g. Rajesh Patel" required
                    />
                  </div>
                  <div className="form-group">
                    <label><FaEnvelope className="fb-label-icon" /> Email Address *</label>
                    <input
                      type="email" name="email" value={form.email}
                      onChange={handleChange} placeholder="your@email.com" required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label><FaPhone className="fb-label-icon" /> Phone Number</label>
                    <input
                      type="tel" name="phone" value={form.phone}
                      onChange={handleChange} placeholder="e.g. 9876543210"
                    />
                  </div>
                  <div className="form-group">
                    <label><FaBuilding className="fb-label-icon" /> Company / Organization</label>
                    <input
                      type="text" name="company" value={form.company}
                      onChange={handleChange} placeholder="Your company name"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label><FaTools className="fb-label-icon" /> Service Used *</label>
                  <select
                    name="service" value={form.service}
                    onChange={handleChange} required
                    className="fb-select"
                  >
                    <option value="">Select the service you used</option>
                    <option>Electrical Wiring & Installation</option>
                    <option>Solar Panel Installation</option>
                    <option>Panel Board Works</option>
                    <option>Annual Maintenance Contract (AMC)</option>
                    <option>Government Tender Work</option>
                    <option>Industrial Electrical</option>
                    <option>Other</option>
                  </select>
                </div>

                {/* STAR RATING */}
                <div className="form-group">
                  <label><FaStar className="fb-label-icon" style={{ color: 'var(--primary)' }} /> Overall Rating *</label>
                  <div className="fb-stars-row">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        className={`fb-star ${star <= (hoverRating || form.rating) ? 'filled' : ''}`}
                        onClick={() => handleStarClick(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        aria-label={`${star} star`}
                      >
                        <FaStar />
                      </button>
                    ))}
                    {(hoverRating || form.rating) > 0 && (
                      <span className="fb-rating-label">
                        {getRatingLabel(hoverRating || form.rating)}
                      </span>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label>Your Feedback *</label>
                  <textarea
                    name="feedback" value={form.feedback} onChange={handleChange}
                    placeholder="Tell us about your experience with our team and services..."
                    rows="5" required
                  />
                </div>

                <button type="submit" className="form-submit">
                  <FaPaperPlane style={{ marginRight: 8 }} /> Submit Feedback
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Feedback;
