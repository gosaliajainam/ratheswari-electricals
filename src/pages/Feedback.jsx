import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaPaperPlane, FaStar, FaCheckCircle,
  FaUser, FaEnvelope, FaPhone, FaBuilding, FaTools
} from 'react-icons/fa';

const validationRules = {
  name: {
    required: true,
    validate: (v) => v.trim().length >= 2,
    message: 'Name is required (minimum 2 characters)',
  },
  email: {
    required: true,
    validate: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
    message: 'Please enter a valid email address',
  },
  phone: {
    required: true,
    validate: (v) => /^\d{10}$/.test(v),
    message: 'Phone number must be exactly 10 digits (numbers only)',
  },
  service: {
    required: true,
    validate: (v) => v.trim().length > 0,
    message: 'Please select a service',
  },
  feedback: {
    required: true,
    validate: (v) => v.trim().length >= 10,
    message: 'Feedback is required (minimum 10 characters)',
  },
};

const Feedback = () => {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', company: '', service: '', rating: 0, feedback: ''
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [hoverRating, setHoverRating] = useState(0);
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

  const handleStarClick = (rating) => setForm({ ...form, rating });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(validationRules).forEach((field) => {
      const error = validateField(field, form[field]);
      if (error) newErrors[field] = error;
    });

    setErrors(newErrors);
    setTouched({ name: true, email: true, phone: true, service: true, feedback: true });

    if (Object.keys(newErrors).length > 0) return;

    setLoading(true);
    setSubmitError('');

    try {
      const res = await fetch('https://formsubmit.co/ajax/info@ratheswarielectricals.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          Name: form.name,
          Email: form.email,
          Phone: form.phone,
          Company: form.company || 'N/A',
          Service: form.service,
          Rating: `${form.rating}/5 (${getRatingLabel(form.rating) || 'Not rated'})`,
          Feedback: form.feedback,
          _subject: 'New Feedback from Website',
          _template: 'table',
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
        setForm({ name: '', email: '', phone: '', company: '', service: '', rating: 0, feedback: '' });
        setErrors({});
        setTouched({});
      } else {
        setSubmitError('Failed to send feedback. Please try again.');
      }
    } catch {
      setSubmitError('Failed to send feedback. Please try again.');
    } finally {
      setLoading(false);
    }
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

              {submitError && (
                <div style={{ padding: '12px 20px', background: '#f8d7da', color: '#721c24', borderRadius: 8, marginBottom: 20, fontWeight: 500 }}>
                  {submitError}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className={`form-group ${errors.name && touched.name ? 'has-error' : ''}`}>
                    <label><FaUser className="fb-label-icon" /> Your Name *</label>
                    <input
                      type="text" name="name" value={form.name}
                      onChange={handleChange} onBlur={handleBlur}
                      placeholder="e.g. Rajesh Patel"
                    />
                    {errors.name && touched.name && <span className="field-error">{errors.name}</span>}
                  </div>
                  <div className={`form-group ${errors.email && touched.email ? 'has-error' : ''}`}>
                    <label><FaEnvelope className="fb-label-icon" /> Email Address *</label>
                    <input
                      type="email" name="email" value={form.email}
                      onChange={handleChange} onBlur={handleBlur}
                      placeholder="your@email.com"
                    />
                    {errors.email && touched.email && <span className="field-error">{errors.email}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className={`form-group ${errors.phone && touched.phone ? 'has-error' : ''}`}>
                    <label><FaPhone className="fb-label-icon" /> Phone Number *</label>
                    <input
                      type="tel" name="phone" value={form.phone}
                      onChange={handleChange} onBlur={handleBlur}
                      placeholder="e.g. 9876543210" maxLength="10"
                    />
                    {errors.phone && touched.phone && <span className="field-error">{errors.phone}</span>}
                  </div>
                  <div className="form-group">
                    <label><FaBuilding className="fb-label-icon" /> Company / Organization</label>
                    <input
                      type="text" name="company" value={form.company}
                      onChange={handleChange} placeholder="Your company name"
                    />
                  </div>
                </div>

                <div className={`form-group ${errors.service && touched.service ? 'has-error' : ''}`}>
                  <label><FaTools className="fb-label-icon" /> Service Used *</label>
                  <select
                    name="service" value={form.service}
                    onChange={handleChange} onBlur={handleBlur}
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
                  {errors.service && touched.service && <span className="field-error">{errors.service}</span>}
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

                <div className={`form-group ${errors.feedback && touched.feedback ? 'has-error' : ''}`}>
                  <label>Your Feedback *</label>
                  <textarea
                    name="feedback" value={form.feedback}
                    onChange={handleChange} onBlur={handleBlur}
                    placeholder="Tell us about your experience with our team and services..."
                    rows="5"
                  />
                  {errors.feedback && touched.feedback && <span className="field-error">{errors.feedback}</span>}
                </div>

                <button type="submit" className="form-submit" disabled={loading}>
                  <FaPaperPlane style={{ marginRight: 8 }} /> {loading ? 'Sending...' : 'Submit Feedback'}
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
