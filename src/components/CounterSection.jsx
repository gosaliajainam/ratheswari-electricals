import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const counters = [
  { end: 500, suffix: '+', label: 'Projects Completed' },
  { end: 50, suffix: '+', label: 'AMC Clients' },
  { end: 100, suffix: '+', label: 'Skilled Technicians' },
  { end: 10, suffix: '+', label: 'Years Experience' },
];

const CounterSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="counter-section" ref={ref}>
      <div className="container">
        <div className="counter-grid">
          {counters.map((counter, index) => (
            <div className="counter-item" key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
              <h3>
                {inView ? (
                  <CountUp end={counter.end} duration={2.5} suffix={counter.suffix} />
                ) : (
                  '0'
                )}
              </h3>
              <p>{counter.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
