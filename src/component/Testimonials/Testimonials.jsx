import React, { useRef } from 'react';
import './Testimonials.css';
import next_icon from '../../assets/img/next-icon.png';
import back_icon from '../../assets/img/back-icon.png';
import user_1 from '../../assets/img/user-1.png';
import user_2 from '../../assets/img/user-2.png';
import user_3 from '../../assets/img/user-3.png';
import user_4 from '../../assets/img/user-4.png';

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) tx -= 25;
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) tx += 25;
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} alt="Next" onClick={slideForward} className="next-btn" />
      <img src={back_icon} alt="Back" onClick={slideBackward} className="back-btn" />

      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="Nandini Nayal" />
                <div>
                  <h3>Nandini Nayal</h3>
                  <span>GuruCool, India</span>
                </div>
              </div>
              <p>
                "I absolutely loved my time at GuruCool! 🎓 The mentors were super supportive and the lessons were easy to follow. I gained valuable skills quickly and connected with awesome people. Totally worth it! 🙌"
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="Satinder Sartaaj" />
                <div>
                  <h3>Satinder Sartaaj</h3>
                  <span>GuruCool, India</span>
                </div>
              </div>
              <p>
                "My journey with GuruCool was fantastic! 🌟 The teaching team was top-notch and the content kept me engaged. I picked up a ton of knowledge and met some lifelong friends. 10/10 would recommend! 🤝"
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="Monali Thakur" />
                <div>
                  <h3>Monali Thakur</h3>
                  <span>GuruCool, India</span>
                </div>
              </div>
              <p>
                "GuruCool exceeded my expectations! The trainers were passionate and everything was organized perfectly. I grew so much, both professionally and personally. Can’t thank them enough! 🙏✨"
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="Ed Sheeran" />
                <div>
                  <h3>Ed Sheeran</h3>
                  <span>GuruCool, India</span>
                </div>
              </div>
              <p>
                "Such a great learning experience at GuruCool! 🤓 The staff truly cares and the program was super enriching. I developed real-world skills and had fun the whole time. Highly recommend it! 🎉"
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
