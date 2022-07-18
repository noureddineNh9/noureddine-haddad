import React, { useEffect, useState } from 'react';
import './homepage.style.scss';
import Navbar from '../../components/layouts/navbar/navbar.component';
import { gsap } from 'gsap';
import ScrollMagic from 'scrollmagic';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { useHistory, useLocation } from 'react-router-dom';

import $ from 'jquery';

import { Helmet } from 'react-helmet';

import { Link } from 'react-router-dom';

function Homepage() {
  const history = useHistory();
  const location = useLocation();
  const currentPage = location.pathname.toLowerCase();
  const [first, setFirst] = useState(true);
  var tl1 = null;

  useEffect(() => {
    ScrollMagicPluginGsap(ScrollMagic, gsap);
    gsap.registerPlugin(ScrollTrigger);
    setTimeout(() => {
      animateTitle();

      animateTitleReverse();

      animateOnScroll();
    }, 1500);

    /*    
    gsap.to('.aze', {
      x: 200,
      duration: 0.8,
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: '.sticky',
        markers: true,
        start: 'top center',
        end: 'bottom 25%',
        scrub: true,
        //toggleActions: 'play none none reverse',
      },
    });


    var tl2 = gsap.timeline();

    const controller = new ScrollMagic.Controller();
    tl2.from('.aaa', 1, {
      translateX: '360px',
    });
    const scene = new ScrollMagic.Scene({
      triggerElement: '.sticky',
      triggerHook: '0',
      duration: '600',
    })
      .setPin('.sticky')
      .setTween(tl2)
      .setClassToggle('.sticky', 'aze')
      .addTo(controller);



    var tl2 = gsap.timeline();

    const controller = new ScrollMagic.Controller();
    tl2.to('.title__container', 1, {
      translateX: '360px',
      duration: 2.1,
    });
    const scene = new ScrollMagic.Scene({
      triggerElement: '#header',
      triggerHook: '0',
      duration: '900',
    })
      .setPin('#header')
      .setTween(tl2)
      .addTo(controller);      
   */

    /*
      .fromTo(
        document.querySelector('.home__title__1'),
        { opacity: 1, translateX: '0px' },
        { opacity: 0, duration: 0.5, translateX: '-200px' }
      )
      .fromTo(
        document.querySelectorAll('.home__title__2 .letter'),
        { opacity: 1, duration: 0.4 },
        { opacity: 0, duration: 0.4, stagger: 0.1 },
        '-=.5'
      )
      .fromTo(
        document.querySelector('.home__title__2 h1'),
        { opacity: 1, translateX: '0px' },
        { opacity: 0, duration: 0.8, translateX: '-200px' }
      )
      .fromTo(
        document.querySelectorAll('.home__title__2 .skill'),
        { opacity: 1, translateY: '0px' },
        { opacity: 0, translateY: '10px', duration: 0.5, stagger: 0.2 },
        '-=.5'
      );
      */
  }, []);

  function animateTitle() {
    if (tl1 != null) {
      tl1.kill();
    }
    tl1 = gsap.timeline();
    tl1
      .fromTo(
        document.querySelector('.home__title__1'),
        { opacity: 0, translateX: '-200px' },
        { opacity: 1, duration: 0.5, translateX: '0px' }
      )
      .fromTo(
        document.querySelector('.home__title__2 h1'),
        { opacity: 0, translateX: '-200px' },
        { opacity: 1, duration: 0.8, translateX: '0px' }
      )
      .fromTo(
        document.querySelectorAll('.home__title__2 .letter'),
        { opacity: 0, translateY: '10px' },
        { opacity: 1, duration: 0.4, translateY: '0px', stagger: 0.1 }
      )
      .fromTo(
        document.querySelectorAll('.home__title__2 .skill'),
        { opacity: 0, translateY: '10px' },
        { opacity: 1, duration: 0.5, translateY: '0px', stagger: 0.2 }
      );
  }

  function animateTitleReverse() {
    var controller = new ScrollMagic.Controller();
    var animateIn = gsap.timeline();

    animateIn
      .fromTo(
        document.querySelector('.home__title__1'),
        {
          opacity: 1,
          translateX: '0px',
        },
        {
          opacity: 0,
          duration: 0.2,
          translateX: '-200px',
        }
      )
      .to(document.querySelectorAll('.home__title__2 .letter'), {
        opacity: 0,
        duration: 0.05,
        stagger: 0.05,
      })
      .to(document.querySelector('.home__title__2 h1'), {
        opacity: 0,
        duration: 0.2,
        translateX: '-200px',
      })
      .to(document.querySelectorAll('.home__title__2 .skill'), {
        opacity: 0,
        duration: 0.1,
        translateY: '10px',
        stagger: 0.15,
      });

    // Make Magic Scene
    var scene = new ScrollMagic.Scene({
      triggerElement: '.trigger',
      triggerHook: '0',
    })
      .setTween(animateIn)
      .addTo(controller);
  }

  function animateOnScroll() {
    const controller2 = new ScrollMagic.Controller();
    var scrollingTimeline = gsap.timeline();

    scrollingTimeline
      .to('.description__container h1', {
        opacity: 1,
        duration: 0.4,
        delay: 0.7,
        scale: 1,
        stagger: 2.5,
      })
      .to('.flesh', {
        opacity: 0.7,
        duration: 0.4,
        delay: 1.2,
      })
      .to('.button__1', {
        opacity: 1,
        duration: 0.7,
        delay: 1.2,
        translateY: 20,
      });

    const scene2 = new ScrollMagic.Scene({
      triggerElement: '#header',
      triggerHook: '0',
      duration: '3000',
    })
      .setTween(scrollingTimeline)
      .setPin('#header')
      .addTo(controller2);
  }

  window.addEventListener('load', () => {
    if (window.scrollY === 0) {
      //animateTitle();
    } else {
      $(window).scrollTop(0);
      setTimeout(() => {
        //animateTitle();
      }, 800);
    }
  });
  /*
  window.addEventListener('scroll', () => {
    console.log(x);
    if (window.scrollY === 0 && x === 0) {
      x = 1;
      animateTitle();
      console.log('azeaze');
    }
  });
*/
  function switchPage(page) {
    document.getElementById('sidebar-checkbox').checked = false;
    if (currentPage !== page) {
      document.querySelector('.loader').classList.add('show');
      setTimeout(() => {
        history.push(`${page}`);
        document.querySelector('.loader').classList.remove('show');
      }, 2000);
    }
  }

  function aze() {
    console.log('aze');
    window.scrollTo(0, 0);
  }

  return (
    <div>
      <div className="trigger absolute top-8"></div>
      <section
        id="header"
        className="flex flex-col justify-center px-20 py-24 min-h-screen "
      >
        <div className="title__container">
          <div className="title__wrapper">
            <h1 className="home__title__1">Hi, I'am</h1>
            <div className="home__title__2">
              <h1>
                <span className="letter">N</span>
                <span className="letter">O</span>
                <span className="letter">U</span>
                <span className="letter">R</span>
                <span className="letter">E</span>
                <span className="letter">D</span>
                <span className="letter">D</span>
                <span className="letter">I</span>
                <span className="letter">N</span>
                <span className="letter">E</span>
              </h1>
              <div className="spans">
                <span className="skill">developper</span>
                <span className="skill">freelancer</span>
                <span className="skill">creative</span>
              </div>
            </div>
          </div>
        </div>

        <div className="description__container">
          <div className="description__wrapper">
            <h1 className="text-6xl">Hi there 👋.</h1>
            <h1 className="text-6xl">
              I'm a <strong>Full-stack JavaScript Developer ✨</strong>.
            </h1>
            <h1 className="text-6xl">I love coding 🤩.</h1>
            <h1 className="text-6xl">
              I'm always interested about cool stuff 🔥.
            </h1>
            <h1 className="text-6xl">
              More{' '}
              <a className="link" onClick={() => switchPage('/about')}>
                About Me
              </a>{' '}
              😊.
            </h1>
          </div>
        </div>
        <div className="absolute left-0 bottom-48 flex justify-center w-full">
          <div className="flesh"></div>
          <a onClick={() => switchPage('/projects')} className="button__1">
            View My Works
          </a>
        </div>
      </section>

      {/** 
        <section>
          <Controller>
            <Scene
              duration={300}
              triggerHook={0}
              pin={{ pushFollowers: false }}
            >
              {(progress) => (
                <div
                  className="sticky min-h-screen p-56"
                  style={{ background: '#1C1B20' }}
                >
                  <Timeline totalProgress={progress} paused>
                    <Timeline
                      target={
                        <h3 id="aze" className="text-white text-4xl">
                          text
                        </h3>
                      }
                    >
                      <Tween from={{ opacity: -1 }} to={{ opacity: 1 }} />
                    </Timeline>
                    <Timeline
                      target={
                        <p className="timeline">
                          Watch me move! and then disappear!
                        </p>
                      }
                    >
                      <Tween from={{ x: -1000 }} to={{ x: 250 }} />
                    </Timeline>
                  </Timeline>
                </div>
              )}
            </Scene>
          </Controller>
        </section>*/}
    </div>
  );
}

export default Homepage;
