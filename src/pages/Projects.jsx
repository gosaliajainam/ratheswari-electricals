import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheck, FaArrowRight } from 'react-icons/fa';

const amcBenefits = [
  'Regular Preventive Maintenance',
  'Reduced Breakdown Risk',
  'Priority Service',
  'Cost Savings',
  'Long Equipment Life',
];

const Projects = () => {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1 data-aos="fade-up">Our <span>Projects</span></h1>
          <p data-aos="fade-up" data-aos-delay="100">
            Delivering performance, durability, and client satisfaction
          </p>
          <div className="page-breadcrumb" data-aos="fade-up" data-aos-delay="200">
            <Link to="/">Home</Link><span>/</span><span>Projects</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Annual Maintenance Contracts (AMC)</h2>
            <p>Comprehensive Maintenance Solutions for Reliable Operations</p>
          </div>
          <p style={{ textAlign: 'center', color: '#6C757D', maxWidth: 800, margin: '0 auto 40px', lineHeight: 1.8 }} data-aos="fade-up">
            We specialize in structured and systematic AMC designed to ensure smooth functioning,
            reduced breakdowns, and long-term asset protection. Our AMC services are customized
            based on the client's infrastructure, equipment type, and operational requirements.
          </p>

          <div className="project-categories" data-aos="fade-up">
            {['Residential Societies', 'Corporate Offices', 'Commercial Buildings', 'Turnkey Projects'].map((cat, i) => (
              <button className={`project-category-btn`} key={i}>{cat}</button>
            ))}
          </div>

          <div className="amc-benefits">
            {amcBenefits.map((benefit, i) => (
              <div className="amc-benefit" key={i} data-aos="zoom-in" data-aos-delay={i * 80}>
                <div className="amc-benefit-icon"><FaCheck /></div>
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2 data-aos="fade-up">Need a Customized AMC Plan?</h2>
          <p data-aos="fade-up" data-aos-delay="100">Contact us for customized AMC plans as per your requirement.</p>
          <div className="cta-buttons" data-aos="fade-up" data-aos-delay="200">
            <Link to="/contact" className="cta-btn-white">Contact Us <FaArrowRight style={{ marginLeft: 8 }} /></Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
