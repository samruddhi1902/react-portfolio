import React from 'react';

import { Pagination,Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
        {
          id: 1,
          name: 'Data Engineer Intern',
          role: 'BAJAJ FINSERV',
          duration: 'Sep 2024 - Present',
          test: 'During my internship at Bajaj Finserv, I have been able to apply my analytical and technical skills to improve user experience by optimizing customer journeys through data-driven insights. Collaborating closely with the team, I’ve developed and managed data pipelines that ensure accuracy and efficiency, contributing to the overall success of our projects.',
        },
        {
          id: 2,
          name: 'Membership Chair',
          role: 'ACM Student Chapter',
          duration: 'Apr 2024 - Present',
          test: 'As the Membership Chair for the ACM Student Chapter, I led initiatives to expand our community and drive engagement among students. Through strategic outreach, I organized events tailored to our members’ interests, increasing engagement by 30% and fostering a collaborative environment. My role has allowed me to build connections.',
        },
        {
          id: 3,
          name: 'Student Coordinator',
          role: 'Internationalization Cell',
          duration: 'Jan 2024 - Present',
          test: 'In my role as Student Coordinator for the Internationalization Cell, I’ve developed strategies to encourage cross-cultural understanding and increase participation in international programs. Organizing seminars and events has allowed me to engage with a diverse group of students and promote valuable global learning experiences.',
        },
        {
          id: 4,
          name: 'Public Relations Coordinator',
          role: 'GDSC SIT',
          duration: 'Aug 2023 - Mar 2024',
          test: 'As the Public Relations Coordinator for GDSC SIT, I managed communication strategies, promoted events, and built strong relationships within the tech community. My efforts helped ensure active student participation and a meaningful presence for GDSC on campus, fostering connections and supporting professional growth among students.',
        }
   
    
  ];
  return (
    <section id="testimonials">
    <h5>My Positions</h5>
    <h2>Experience</h2>
    <Swiper 
        className="container testimonials__container"
        modules={[Pagination, Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 2000, // 3 seconds
          disableOnInteraction: false, // Allows autoplay even after user interaction
        }}
      >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
          <h3 className='client__name'>{test.name}</h3>
          <h4 className='client__role'>{test.role}</h4>
          <p className="client__duration">{test.duration}</p>
          <small className="client__review">{test.test}</small>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Testimonials;