import React from "react";

function Contact() {
  return <section>
    <div className="container " style={{
      minHeight:'100vh',
      display:'flex'
    }}>
          <div class="form h-100 contact-wrap p-5">
            <h3 class="text-center mb-5">Let's Talk</h3>
            <form class="mb-5" method="get" id="contactForm" name="contactForm">
              <div class="row">
                <div class="col-md-6 form-group mb-3">
                  <input type="text" class="form-control" name="name" id="name" placeholder="Your name"/>
                </div>
                <div class="col-md-6 form-group mb-3">
                  <input type="email" class="form-control" name="email" id="email"  placeholder="Your email"/>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12 form-group mb-3">
                  <input type="text" class="form-control" name="subject" id="subject" placeholder="Your subject"/>
                </div>
              </div>

              <div class="row mb-5">
                <div class="col-md-12 form-group mb-3">
                  <textarea class="form-control" name="message" id="message" cols="30" rows="7"  placeholder="Write your message"></textarea>
                </div>
              </div>
              <div class="" style={{
                display:'flex',
                justifyContent:'center'
              }}>
                  <button type="submit" class="_btn _btn--main _btn-sm btn--animated" >send</button>
              </div>
            </form>
          </div>
        </div>

  </section>;
}

export default Contact;
