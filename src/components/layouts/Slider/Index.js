import React, { useEffect } from 'react';
import $ from 'jquery';
import './style.scss';

function Index(props) {
  useEffect(() => {
    $('.slider').each(function () {
      var $this = $(this);
      var $group = $this.find('.slide_group');
      var $slides = $this.find('.slide');
      var bulletArray = [];
      var currentIndex = 0;
      var timeout;

      function move(newIndex) {
        var animateLeft, slideLeft;

        advance();

        if ($group.is(':animated') || currentIndex === newIndex) {
          return;
        }

        bulletArray[currentIndex].removeClass('active');
        bulletArray[newIndex].addClass('active');

        if (newIndex > currentIndex) {
          slideLeft = '100%';
          animateLeft = '-100%';
        } else {
          slideLeft = '-100%';
          animateLeft = '100%';
        }

        $slides.eq(newIndex).css({
          display: 'block',
          left: slideLeft,
        });
        $group.animate(
          {
            left: animateLeft,
          },
          function () {
            $slides.eq(currentIndex).css({
              display: 'none',
            });
            $slides.eq(newIndex).css({
              left: 0,
            });
            $group.css({
              left: 0,
            });
            currentIndex = newIndex;
          }
        );
      }

      function advance() {
        clearTimeout(timeout);
        timeout = setTimeout(function () {
          if (currentIndex < $slides.length - 1) {
            move(currentIndex + 1);
          } else {
            move(0);
          }
        }, 6000);
      }

      $('.next_btn').on('click', function () {
        if (currentIndex < $slides.length - 1) {
          move(currentIndex + 1);
        } else {
          move(0);
        }
      });

      $('.previous_btn').on('click', function () {
        if (currentIndex !== 0) {
          move(currentIndex - 1);
        } else {
          move($slides.length - 1);
        }
      });

      $.each($slides, function (index) {
        var $button = $(
          '<a class="slide_btn"><i class="fas fa-circle"></i></a>'
        );

        if (index === currentIndex) {
          $button.addClass('active');
        }
        $button
          .on('click', function () {
            move(index);
          })
          .appendTo('.slide_buttons');
        bulletArray.push($button);
      });

      advance();
    });
  }, []);

  return (
    <>
      <div className="slider_container">
        <div class="slider">
          <div class="slide_viewer">
            <div class="slide_group">
              {props.images.map((p, i) => (
                <div key={i} class="slide">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/${p.url}`}
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div class="directional_nav">
          <div class="previous_btn" title="Previous">
            <i class="fas fa-chevron-right"></i>
          </div>
          <div class="next_btn" title="Next">
            <i class="fas fa-chevron-right "></i>
          </div>
        </div>
      </div>
      <div class="slide_buttons"></div>
    </>
  );
}

export default Index;
