import gsap from 'gsap';
import React, { useEffect } from 'react';
import './contactpage.style.scss';

function ContactPage() {
  useEffect(() => {
    setTimeout(() => {
      gsap
        .timeline()
        .to('.section__title__1', {
          opacity: 1,
          translateX: 0,
          duration: 0.5,
          ease: 'power4.out',
        })
        .to('.section__title__2', {
          opacity: 1,

          translateX: 0,
          duration: 0.5,
          ease: 'power4.out',
        })
        .to('.contact__form', {
          translateY: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power4.out',
        });
    }, 600);
  }, []);

  var x = 1;
  return (
    <section id="contact" className="p-32 min-h-screen">
      <div className="section__title pb-32">
        <h1 className="section__title__1">Let's Talk</h1>
        <h1 className="section__title__2">Let's Talk</h1>
      </div>
      <div className="max-w-7xl mx-auto">
        <form className="contact__form mb-5 opacity-0" id="contactForm">
          <div class="md:flex">
            <div class="md:w-1/2 form-group mb-6 md:mr-6">
              <input
                type="text"
                class="form-control"
                name="name"
                id="name"
                placeholder="Your name"
              />
            </div>
            <div class="md:w-1/2 form-group mb-6 ">
              <input
                type="email"
                class="form-control"
                name="email"
                id="email"
                placeholder="Your email"
              />
            </div>
          </div>

          <div class="form-group mb-6 ">
            <input
              type="text"
              class="form-control"
              name="subject"
              id="subject"
              placeholder="Your subject"
            />
          </div>

          <div class=" form-group mb-6 ">
            <textarea
              class="form-control"
              name="message"
              id="message"
              cols="30"
              rows="7"
              placeholder="Write your message"
            ></textarea>
          </div>

          <div
            class=""
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <button type="submit" class="button__2">
              send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactPage;
