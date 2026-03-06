import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaBolt, FaVideo, FaVolumeUp, FaFingerprint, FaWrench,
  FaBuilding, FaPaintBrush, FaHome, FaSnowflake, FaSolarPanel,
  FaCheckCircle, FaArrowRight
} from 'react-icons/fa';

const services = [
  {
    icon: <FaBolt />,
    title: 'Electrical Services',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80',
    items: ['Wiring & Rewiring', 'Panel Installation and Maintenance', 'Festival Lighting Setup', 'Electrical Fault Finding', 'Annual Electrical AMC for all types'],
  },
  {
    icon: <FaVideo />,
    title: 'CCTV Installation & Maintenance',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&q=80',
    items: ['Multi-camera security systems', 'DVR/NVR setup & configuration', 'Network-based remote monitoring', 'Structured cabling for surveillance'],
  },
  {
    icon: <FaVolumeUp />,
    title: 'Audio & Visual Systems',
    image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600&q=80',
    items: ['Conference Room Setup', 'PA System', 'Auditorium & Theaters', 'Projector & Video Wall Installation'],
  },
  {
    icon: <FaFingerprint />,
    title: 'Biometric & Security Systems',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=600&q=80',
    items: ['Biometric Attendance', 'Access Control Systems', 'Smart Door Lock Installation'],
  },
  {
    icon: <FaWrench />,
    title: 'Plumbing Services',
    image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=600&q=80',
    items: ['Water Line Installation', 'Leakage Repair', 'Drainage Maintenance'],
  },
  {
    icon: <FaBuilding />,
    title: 'Lift Maintenance',
    image: 'https://images.unsplash.com/photo-1567955041968-282af7cedda2?w=600&q=80',
    items: ['Lift Annual Maintenance Contracts', 'Mechanical & electrical lift servicing', 'Safety inspections & compliance checks', 'Lift performance improvement support'],
  },
  {
    icon: <FaPaintBrush />,
    title: 'Society Beautification',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80',
    items: ['Decorative Lighting', 'Compound & Garden Lighting', 'Festival Lighting Setup', 'Gardening and Plantation', 'Architecture Structure Designing'],
  },
  {
    icon: <FaHome />,
    title: 'Home Automation',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=600&q=80',
    items: ['Smart Lighting', 'Smart Switches', 'Remote Control Systems'],
  },
  {
    icon: <FaSnowflake />,
    title: 'Air Conditioner Services',
    image: 'https://images.unsplash.com/photo-1631545806609-05faf4dbe436?w=600&q=80',
    items: ['AC Installation', 'Gas Refilling', 'AC Repair & AMC', 'Commercial cooling systems', 'Energy efficiency optimization'],
  },
  {
    icon: <FaSolarPanel />,
    title: 'Solar Solutions',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80',
    items: ['Residential rooftop solar systems', 'Commercial solar installations', 'On-grid & off-grid systems', 'Inverter installation & testing', 'System performance monitoring'],
  },
];

const Services = () => {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1 data-aos="fade-up">Our <span>Services</span></h1>
          <p data-aos="fade-up" data-aos-delay="100">
            Comprehensive electrical and facility maintenance solutions
          </p>
          <div className="page-breadcrumb" data-aos="fade-up" data-aos-delay="200">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Services</span>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--light)' }}>
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>What We Offer</h2>
            <p>We provide comprehensive services in the following areas</p>
          </div>

          <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}>
            {services.map((service, index) => (
              <div
                className="service-detail-card"
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 60}
              >
                <div className="service-detail-image">
                  <img src={service.image} alt={service.title} />
                  <div className="service-detail-overlay"></div>
                  <div className="service-detail-icon">{service.icon}</div>
                </div>
                <div className="service-detail-content">
                  <h3>{service.title}</h3>
                  <ul className="service-detail-list">
                    {service.items.map((item, i) => (
                      <li key={i}>
                        <FaCheckCircle className="check-icon" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2 data-aos="fade-up">Need Our Services?</h2>
          <p data-aos="fade-up" data-aos-delay="100">
            Ratheswari Electricals Pvt Ltd stands as a symbol of technical expertise,
            disciplined organization, dedicated service, and earned trust.
          </p>
          <div className="cta-buttons" data-aos="fade-up" data-aos-delay="200">
            <Link to="/contact" className="cta-btn-white">
              Get Free Quotation <FaArrowRight style={{ marginLeft: 8 }} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
