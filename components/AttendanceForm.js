import React from "react";
import ScrollAnimation from "../lib/ScrollAnimation";

const AttendanceForm = () => (
  <div
    id="fh5co-started"
    className="fh5co-bg"
    style={{ backgroundImage: "url(/static/images/img_bg_4.jpg)" }}
  >
    <div className="overlay" />
    <div className="container">
      <div className="row">
        <ScrollAnimation
          className="col-md-8 col-md-offset-2 text-center fh5co-heading"
          animateIn="fadeInUp"
          animateOnce
        >
          <h2>Přijedete za námi?</h2>
          <p>Dejte nám prosím vědět, že s vámi můžeme počítat. Děkujeme.</p>
        </ScrollAnimation>
      </div>
      <ScrollAnimation
        className="row attendance-form"
        animateIn="fadeInUp"
        animateOnce
      >
        <div className="col-md-10 col-md-offset-1">
          <form className="form-inline">
            <div className="col-md-4 col-sm-4">
              <div className="form-group">
                <label htmlFor="name" className="sr-only">
                  Jméno
                </label>
                <input
                  type="name"
                  className="form-control"
                  id="name"
                  placeholder="Jméno"
                />
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="form-group">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <button type="submit" className="btn btn-default btn-block">
                Rozhodně přijedu!
              </button>
            </div>
          </form>
        </div>
      </ScrollAnimation>
      <div className="row">
        <ScrollAnimation
          className="col-md-8 col-md-offset-2 text-center fh5co-heading"
          animateIn="fadeInUp"
          animateOnce
        >
          <p>
            Kdybyste nějaké informace postrádali, nebo jste měli jakýkoli dotaz,
            ozvěte se nevěstě nebo ženichovi. V den svatby bychom ale velmi
            ocenili, kdybyste se už obraceli pouze na naši zlatou pravou ruku
            Lucku Klocovou.&nbsp;
            <small>
              <abbr>Tel.</abbr> <tel>+420 773 911 319</tel>
            </small>
          </p>
        </ScrollAnimation>
      </div>
    </div>
  </div>
);

export default AttendanceForm;
