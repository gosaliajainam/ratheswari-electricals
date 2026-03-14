import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheck, FaArrowRight, FaBuilding, FaCity, FaIndustry, FaLandmark, FaWarehouse } from 'react-icons/fa';

const steps = [
  'Tender Document Review & Technical Analysis',
  'Site Inspection (if required)',
  'Competitive & Transparent Quotation',
  'Structured Execution Plan',
  'Deployment of Skilled Manpower',
  'Quality Testing & Certification',
  'Project Handover & Documentation',
];

const sectors = [
  { icon: <FaLandmark />, label: 'Government Departments' },
  { icon: <FaCity />, label: 'Municipal Corporations' },
  { icon: <FaIndustry />, label: 'Public Sector Units (PSUs)' },
  { icon: <FaBuilding />, label: 'Residential & Commercial Developers' },
  { icon: <FaWarehouse />, label: 'Corporate Infrastructure Projects' },
];

const Tenders = () => {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1 data-aos="fade-up">Government & Private <span>Tenders</span></h1>
          <p data-aos="fade-up" data-aos-delay="100">Compliance, documentation, and performance standards</p>
          <div className="page-breadcrumb" data-aos="fade-up" data-aos-delay="200">
            <Link to="/">Home</Link><span>/</span><span>Tenders</span>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--light)' }}>
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Our Tender Process</h2>
            <p>Structured planning, skilled manpower, and disciplined execution</p>
          </div>
          <div className="tender-process">
            {steps.map((step, i) => (
              <div className="tender-step" key={i} data-aos="fade-up" data-aos-delay={i * 80}>
                <div className="tender-step-number">{i + 1}</div>
                <h4>{step}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#F8F9FA' }}>
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Sectors We Serve</h2>
          </div>
          <div className="tender-sectors">
            {sectors.map((s, i) => (
              <div className="tender-sector" key={i} data-aos="fade-right" data-aos-delay={i * 80}>
                <span className="tender-sector-icon">{s.icon}</span>
                <p>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section why-choose">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Why Choose Us for Tenders?</h2>
          </div>
          <div className="strengths-grid">
            {['Experienced Technical Team', 'Compliance with Tender Specifications', 'Proper Documentation & Reporting', 'Safety & Quality Assurance', 'On-Time Completion', 'Transparent Billing Process', 'AMC & Post-Project Support'].map((s, i) => (
              <div className="strength-item" key={i} data-aos="fade-right" data-aos-delay={i * 50}>
                <div className="strength-check"><FaCheck /></div>
                <p>{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2 data-aos="fade-up">Interested in Working With Us?</h2>
          <p data-aos="fade-up" data-aos-delay="100">We deliver projects in full compliance with tender specifications</p>
          <div className="cta-buttons" data-aos="fade-up" data-aos-delay="200">
            <Link to="/contact" className="cta-btn-white">Contact Us <FaArrowRight style={{ marginLeft: 8 }} /></Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tenders;
