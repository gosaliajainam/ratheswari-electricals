import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaBolt, FaVideo, FaVolumeUp, FaFingerprint, FaWrench,
  FaBuilding, FaPaintBrush, FaHome, FaSnowflake, FaSolarPanel,
  FaShieldAlt, FaCogs, FaHandshake, FaUsers, FaCheck,
  FaArrowRight, FaPhoneAlt, FaFileAlt
} from 'react-icons/fa';
import CounterSection from '../components/CounterSection';

const services = [
  { icon: <FaBolt />, title: 'Electrical Services', desc: 'Complete electrical installation, maintenance, wiring & panel solutions' },
  { icon: <FaVideo />, title: 'CCTV & Surveillance', desc: 'Multi-camera security systems with remote monitoring setup' },
  { icon: <FaVolumeUp />, title: 'Audio & Visual', desc: 'Conference room, PA system & projector installations' },
  { icon: <FaFingerprint />, title: 'Biometric & Access', desc: 'Biometric attendance & smart access control systems' },
  { icon: <FaWrench />, title: 'Plumbing Services', desc: 'Water line installation, leakage repair & drainage maintenance' },
  { icon: <FaBuilding />, title: 'Lift Maintenance', desc: 'Annual lift maintenance, servicing & safety inspections' },
  { icon: <FaPaintBrush />, title: 'Society Beautification', desc: 'Decorative lighting, garden setup & architectural design' },
  { icon: <FaHome />, title: 'Home Automation', desc: 'Smart lighting, switches & remote control systems' },
  { icon: <FaSnowflake />, title: 'AC Services', desc: 'Installation, repair, gas refilling & commercial cooling' },
  { icon: <FaSolarPanel />, title: 'Solar Solutions', desc: 'Rooftop solar, on-grid/off-grid systems & monitoring' },
];

const pillars = [
  { icon: <FaCogs />, title: 'Technical Skill', subtitle: 'Skill & Expertise', desc: 'Qualified technicians and experienced professionals' },
  { icon: <FaUsers />, title: 'Organized Execution', subtitle: 'Structured Work', desc: 'Structured planning and systematic execution' },
  { icon: <FaHandshake />, title: 'Dedicated Service', subtitle: 'Customer First', desc: 'Prompt response and customer-focused solutions' },
  { icon: <FaShieldAlt />, title: 'Customer Trust', subtitle: 'Reliable & Transparent', desc: 'Transparent work practices and long-term reliability' },
];

const strengths = [
  'Skilled and Experienced Technical Team',
  'Government & Private Contract Experience',
  'Fast Response and Reliable Service',
  'Quality Commitment and Customer Satisfaction',
  'Affordable AMC Plans',
  'Cost Effective and Performance-Focused Solutions',
  'Safe and Secure Work Environment',
  'Transparent Work Process',
  'Built on Quality and Driven by Trust',
];

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <FaBolt /> Trusted Electrical Service Provider
            </div>
            <h1>
              <span>Ratheswari</span> Electricals<br />Pvt Ltd
            </h1>
            <p className="hero-tagline">
              Skill &bull; Organization &bull; Service &bull; Trust
            </p>
            <p>
              Complete Annual Maintenance & Technical Service Solutions for
              Residential Societies, Corporate Houses, Commercial Buildings,
              Government and Private Contracts.
            </p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-primary">
                <FaPhoneAlt /> Request Site Visit
              </Link>
              <Link to="/contact" className="btn btn-outline">
                <FaFileAlt /> Get Free Quotation
              </Link>
            </div>
          </div>

          <div className="hero-image">
            <div className="hero-image-glow"></div>
            <div className="hero-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80"
                alt="Electrical work professional"
              />
            </div>
            <div className="hero-floating-card card-1">
              <div className="hero-floating-card-icon">
                <FaShieldAlt />
              </div>
              <div>
                <h4>100% Safety</h4>
                <p>Certified Team</p>
              </div>
            </div>
            <div className="hero-floating-card card-2">
              <div className="hero-floating-card-icon">
                <FaBolt />
              </div>
              <div>
                <h4>24/7 Support</h4>
                <p>Quick Response</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section services-home">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Our Core Services</h2>
            <p>
              We provide comprehensive electrical and facility maintenance solutions
              with skilled manpower and organized execution.
            </p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div
                className="service-card"
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <div className="service-card-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Counter Section */}
      <CounterSection />

      {/* Why Choose Us */}
      <section className="section why-choose">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Why Choose Us?</h2>
            <p>Our approach is based on four core principles</p>
          </div>

          <div className="pillars-grid">
            {pillars.map((pillar, index) => (
              <div
                className="pillar-card"
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="pillar-icon">{pillar.icon}</div>
                <h3>{pillar.title}</h3>
                <p className="pillar-subtitle">{pillar.subtitle}</p>
                <p>{pillar.desc}</p>
              </div>
            ))}
          </div>

          <div className="section-title" data-aos="fade-up">
            <h2>Our Strength</h2>
          </div>

          <div className="strengths-grid">
            {strengths.map((strength, index) => (
              <div
                className="strength-item"
                key={index}
                data-aos="fade-right"
                data-aos-delay={index * 50}
              >
                <div className="strength-check">
                  <FaCheck />
                </div>
                <p>{strength}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2 data-aos="fade-up">Ready to Get Started?</h2>
          <p data-aos="fade-up" data-aos-delay="100">
            We believe in building long-term professional relationships through quality service and trust.
          </p>
          <div className="cta-buttons" data-aos="fade-up" data-aos-delay="200">
            <Link to="/contact" className="cta-btn-white">
              <FaPhoneAlt style={{ marginRight: 8 }} /> Request Site Visit
            </Link>
            <Link to="/contact" className="btn btn-outline">
              <FaFileAlt /> Get Free Quotation <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
