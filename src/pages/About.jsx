import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaCogs, FaUsers, FaHandshake, FaShieldAlt, FaCheck,
  FaBullseye, FaEye, FaBuilding, FaIndustry, FaCity,
  FaLandmark, FaWarehouse, FaCheckCircle, FaArrowRight
} from 'react-icons/fa';
import CounterSection from '../components/CounterSection';

const pillars = [
  { icon: <FaCogs />, title: 'Skill', subtitle: 'Skill & Expertise', desc: 'Qualified technicians and experienced professionals.' },
  { icon: <FaUsers />, title: 'Organization', subtitle: 'Structured Work', desc: 'Structured planning and systematic execution.' },
  { icon: <FaHandshake />, title: 'Service', subtitle: 'Customer First', desc: 'Prompt response and customer-focused solutions.' },
  { icon: <FaShieldAlt />, title: 'Trust', subtitle: 'Reliable & Transparent', desc: 'Transparent work practices and long-term reliability.' },
];

const strengths = [
  'Experienced Technical Team',
  'Skilled & Trained Manpower',
  'Strong Project Coordination',
  'On-Time Execution',
  'Safety & Compliance Focus',
  'Transparent Pricing',
  'Customized AMC Packages',
];

const trustItems = [
  { icon: <FaCheckCircle />, title: 'Reliable Service Delivery' },
  { icon: <FaCheckCircle />, title: 'Quick Response to Complaints' },
  { icon: <FaCheckCircle />, title: 'Professional Work Culture' },
  { icon: <FaCheckCircle />, title: 'Long-Term Maintenance Support' },
  { icon: <FaCheckCircle />, title: 'Ethical Business Practices' },
];

const About = () => {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1 data-aos="fade-up">About <span>Us</span></h1>
          <p data-aos="fade-up" data-aos-delay="100">
            Professionally managed technical service and facility maintenance company
          </p>
          <div className="page-breadcrumb" data-aos="fade-up" data-aos-delay="200">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>About Us</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-intro">
            <div className="about-intro-image" data-aos="fade-right">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                alt="Electrical team at work"
              />
            </div>
            <div className="about-intro-content" data-aos="fade-left">
              <h2>About Ratheswari Electricals Pvt Ltd</h2>
              <p>
                Ratheswari Electricals Pvt Ltd is a professionally managed technical service and
                facility maintenance company delivering reliable, safe, and high-quality solutions
                across Residential, Commercial, Corporate, Government, and Industrial sectors.
              </p>
              <p>
                With a strong foundation in electrical and infrastructure services, our company has
                built a reputation for disciplined execution, skilled workmanship, and long-term
                client relationships. We specialize in Annual Maintenance Contracts (AMC), technical
                installations, and integrated facility support services.
              </p>
              <p>
                Our strength lies in combining technical expertise with organized management systems
                to ensure smooth operations and complete customer satisfaction.
              </p>
              <div className="about-sectors">
                {[
                  { icon: <FaBuilding />, label: 'Residential Societies' },
                  { icon: <FaCity />, label: 'Corporate Offices' },
                  { icon: <FaIndustry />, label: 'Commercial Buildings' },
                  { icon: <FaLandmark />, label: 'Government Departments' },
                  { icon: <FaWarehouse />, label: 'Industrial Units' },
                ].map((sector, i) => (
                  <span className="about-sector-tag" key={i}>
                    {sector.icon} {sector.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section identity-section">
        <div className="container">
          <div className="identity-motto" data-aos="fade-up">
            <p className="english-motto">Skill &bull; Organization &bull; Service &bull; Trust</p>
            <p className="english">Our Core Identity & Guiding Principles</p>
          </div>

          <div className="section-title" data-aos="fade-up">
            <h2>Our Identity</h2>
            <p>Our company is guided by timeless principles expressed in our motto</p>
          </div>

          <div className="pillars-grid">
            {pillars.map((pillar, index) => (
              <div
                className="pillar-card"
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                style={{ background: 'white', border: '1px solid #eee' }}
              >
                <div className="pillar-icon">{pillar.icon}</div>
                <h3 style={{ color: '#1A1A2E' }}>{pillar.title}</h3>
                <p className="pillar-subtitle">{pillar.subtitle}</p>
                <p style={{ color: '#6C757D' }}>{pillar.desc}</p>
              </div>
            ))}
          </div>

          <div className="vision-mission">
            <div className="vm-card" data-aos="fade-right">
              <h3><FaEye className="icon" /> Our Vision</h3>
              <p>
                To become a trusted and leading technical service provider across Gujarat and India
                by delivering excellence, maintaining high safety standards, and building lasting
                professional partnerships.
              </p>
            </div>
            <div className="vm-card" data-aos="fade-left">
              <h3><FaBullseye className="icon" /> Our Mission</h3>
              <p>
                To provide safe, efficient, and cost-effective electrical and facility maintenance
                solutions under one roof, ensuring operational continuity and long-term asset
                protection for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CounterSection />

      <section className="section">
        <div className="container">
          <div className="about-intro" style={{ gap: '50px' }}>
            <div data-aos="fade-right">
              <div className="section-title" style={{ textAlign: 'left', marginBottom: 30 }}>
                <h2>Our Strength</h2>
              </div>
              {strengths.map((item, i) => (
                <div className="strength-item" key={i} data-aos="fade-right" data-aos-delay={i * 50}
                  style={{ background: 'rgba(255,107,0,0.05)', border: '1px solid rgba(255,107,0,0.1)', marginBottom: 10 }}>
                  <div className="strength-check">
                    <FaCheck />
                  </div>
                  <p style={{ color: '#333' }}>{item}</p>
                </div>
              ))}
            </div>
            <div data-aos="fade-left">
              <div className="section-title" style={{ textAlign: 'left', marginBottom: 30 }}>
                <h2>Our Commitment to Quality & Safety</h2>
              </div>
              <p style={{ color: '#6C757D', lineHeight: 1.8, marginBottom: 20 }}>
                At Ratheswari Electricals Pvt Ltd, safety and quality are at the core of every project.
                We follow industry standards, use quality materials, and maintain professional procedures
                to ensure reliable and long-lasting performance.
              </p>
              <p style={{ color: '#6C757D', lineHeight: 1.8, marginBottom: 30 }}>
                We believe that our responsibility does not end with project completion — it continues
                through ongoing support, maintenance, and service excellence.
              </p>

              <h3 style={{ fontSize: '1.3rem', color: '#1A1A2E', marginBottom: 20 }}>Why Trust Us</h3>
              <div className="trust-grid" style={{ gridTemplateColumns: '1fr' }}>
                {trustItems.map((item, i) => (
                  <div className="trust-card" key={i} data-aos="fade-up" data-aos-delay={i * 80}
                    style={{ textAlign: 'left', display: 'flex', alignItems: 'center', gap: 15, padding: '15px 20px' }}>
                    <span style={{ color: '#FF6B00', fontSize: '1.2rem' }}>{item.icon}</span>
                    <h4>{item.title}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2 data-aos="fade-up">Partner With Us</h2>
          <p data-aos="fade-up" data-aos-delay="100">
            We operate with discipline, technical expertise, and commitment to customer satisfaction.
          </p>
          <div className="cta-buttons" data-aos="fade-up" data-aos-delay="200">
            <Link to="/contact" className="cta-btn-white">
              Contact Us <FaArrowRight style={{ marginLeft: 8 }} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
