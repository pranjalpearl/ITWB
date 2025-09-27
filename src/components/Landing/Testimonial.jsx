"use client"
import React, { useState } from 'react';

// 1. Dummy data extracted into an array of objects
const testimonialsData = [
  {
    id: 1,
    name: 'Oliver Wolfe',
    location: 'United Kingdom',
    date: '15th December, 2018',
    image: '/images/testimonials/t_1.png',
    socialIcon: 'fab fa-linkedin-in',
    rating: 5,
    text: 'Memorable holidays planned an amazing trip for us to Italy. The trip had a mix of all activities that we were interested in. The hotels were nice and situated very close to the station. This made travelling in the city very easy.',
  },
  {
    id: 2,
    name: 'Emily Carter',
    location: 'USA',
    date: '22nd January, 2019',
    image: '/images/testimonials/t_2.png',
    socialIcon: 'fab fa-twitter',
    rating: 5,
    text: 'The tours planned were also very good with very nice guides. We would definitely recommend a trip with them. The entire experience was seamless and highly enjoyable from start to finish.',
  },
  {
    id: 3,
    name: 'Liam Johnson',
    location: 'Australia',
    date: '10th March, 2019',
    image: '/images/testimonials/t_3.png',
    socialIcon: 'fab fa-linkedin-in',
    rating: 4,
    text: 'A fantastic trip overall. The customer service was top-notch, and every detail was taken care of. The accommodations exceeded our expectations. Highly recommended for anyone looking for a hassle-free vacation.',
  },
  {
    id: 4,
    name: 'Sophia Williams',
    location: 'Canada',
    date: '5th April, 2019',
    image: '/images/testimonials/t_4.png',
    socialIcon: 'fab fa-facebook-f',
    rating: 5,
    text: 'Our family had an unforgettable adventure. The itinerary was perfectly balanced with activities and free time. The guides were knowledgeable and friendly. We can’t wait to book our next trip with them!',
  },
  {
    id: 5,
    name: 'Noah Brown',
    location: 'New Zealand',
    date: '18th June, 2019',
    image: '/images/testimonials/t_5.png',
    socialIcon: 'fab fa-instagram',
    rating: 5,
    text: 'From the initial planning stages to the final day of our trip, everything was flawless. The team was responsive and attentive to our needs, creating a personalized experience that we will cherish forever.',
  },
  {
    id: 6,
    name: 'Noah Brown',
    location: 'New Zealand',
    date: '18th June, 2019',
    image: '/images/testimonials/t_6.png',
    socialIcon: 'fab fa-instagram',
    rating: 5,
    text: 'From the initial planning stages to the final day of our trip, everything was flawless. The team was responsive and attentive to our needs, creating a personalized experience that we will cherish forever.',
  },
  {
    id: 7,
    name: 'Noah Brown',
    location: 'New Zealand',
    date: '18th June, 2019',
    image: '/images/testimonials/t_7.png',
    socialIcon: 'fab fa-instagram',
    rating: 5,
    text: 'From the initial planning stages to the final day of our trip, everything was flawless. The team was responsive and attentive to our needs, creating a personalized experience that we will cherish forever.',
  },
  {
    id: 8,
    name: 'Noah Brown',
    location: 'New Zealand',
    date: '18th June, 2019',
    image: '/images/testimonials/t_8.png',
    socialIcon: 'fab fa-linkedin-in',
    rating: 5,
    text: 'From the initial planning stages to the final day of our trip, everything was flawless. The team was responsive and attentive to our needs, creating a personalized experience that we will cherish forever.',
  },
  {
    id: 9,
    name: 'Emily Carter',
    location: 'USA',
    date: '22nd January, 2019',
    image: '/images/testimonials/t_9.png',
    socialIcon: 'fab fa-twitter',
    rating: 5,
    text: 'The tours planned were also very good with very nice guides. We would definitely recommend a trip with them. The entire experience was seamless and highly enjoyable from start to finish.',
  },
  {
    id: 10,
    name: 'Emily Carter',
    location: 'USA',
    date: '22nd January, 2019',
    image: '/images/testimonials/t_10.png',
    socialIcon: 'fab fa-twitter',
    rating: 5,
    text: 'The tours planned were also very good with very nice guides. We would definitely recommend a trip with them. The entire experience was seamless and highly enjoyable from start to finish.',
  },
  // You can add more testimonials here...
];

const Testimonial = () => {
  // 2. State to keep track of the active testimonial's ID
  const [activeIndex, setActiveIndex] = useState(0);

  // 3. Click handler to update the active testimonial
  const handleTestimonialClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <section className="testimonials-area">
        <div
          className="rt-shape-emenetns-1"
          style={{
            backgroundImage: "url('/images/shape-elements/shape-4.png')",
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-9 mx-auto text-center">
              <div className="rt-section-title-wrapper">
                <h2 className="rt-section-title">
                  <span>testimonials</span>
                  What Our Customers Say
                </h2>
                <p>
                  We have many happy customers that have booked holidays with
                  us. Some Impresions from our Customers! Please read some of the
                  lovely things our Customers say about us.
                </p>
              </div>
            </div>
          </div>
          <div className="section-title-spacer"></div>
          <div className="row">
            <div className="col-lg-12 mx-auto">
              <div className="testimoninal-active-1">
                {testimonialsData.map((testimonial, index) => {
                  // 4. Logic to determine the position and state (active/inactive)
                  let className = 'singleTbox-1 text-center';
                  if (index === activeIndex) {
                    className += ' active position-1';
                  } else {
                    className += ' inactive';
                    // This logic positions other items relative to the active one
                    let position = index - activeIndex;
                    if (position < 0) {
                      position += testimonialsData.length;
                    }
                    // We add 1 because CSS positions are usually 1-based
                    className += ` position-${position + 1}`;
                  }

                  return (
                    <div
                      key={testimonial.id}
                      className={className}
                      data-position={`position-${index + 1}`}
                      onClick={() => handleTestimonialClick(index)} // Make the whole card clickable
                    >
                      <div className="testi-thumb cursor-pointer shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 mx-auto">
                        <div
                          className="inner-bg "
                          style={{
                            backgroundImage: `url('${testimonial.image}')`,
                          }}
                        ></div>
                        <span className="social-badge">
                          <i className={testimonial.socialIcon}></i>
                        </span>
                      </div>

                      <div className="autor-bio">
                        <h5>{testimonial.name}</h5>
                        <p>
                          {testimonial.location}, {testimonial.date}
                        </p>
                        <span className="rating">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <i key={i} className="fas fa-star"></i>
                          ))}
                        </span>
                      </div>
                      <div className="inner-content">
                        <p>{testimonial.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="rt-divider style-one rt-margin-top"></div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;