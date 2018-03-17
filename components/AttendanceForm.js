import React from 'react';
import ScrollAnimation from '../lib/ScrollAnimation';

class AttendanceForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formSubmitted: false
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(evt) {
    evt.preventDefault();
    const { target: form } = evt;
    form.submit();
    this.setState({ formSubmitted: true });
  }

  render() {
    return (
      <div
        id="fh5co-started"
        className="fh5co-bg"
        style={{
          backgroundImage: 'url(/static/images/on-the-road-7-1384791.jpg)'
        }}
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
              <p style={{ color: 'rgba(255,255,255,0.9)' }}>
                Dejte nám prosím vědět, že s vámi můžeme počítat. Děkujeme.
              </p>
            </ScrollAnimation>
          </div>
          <ScrollAnimation
            className="row attendance-form"
            animateIn="fadeInUp"
            animateOnce
          >
            <div className="col-md-10 col-md-offset-1">
              {!this.state.formSubmitted ? (
                <form
                  action="https://docs.google.com/forms/d/e/1FAIpQLSdks1cMS_pd0Qg8U2D6tZ17ocUyXKMRiT-a2V0ecGC1-rE3Aw/formResponse?"
                  className="form-inline"
                  encType="text/plain"
                  name="gform"
                  onSubmit={this.onSubmit}
                  target="hidden_iframe"
                >
                  <div className="col-md-4 col-sm-4">
                    <div className="form-group">
                      <label htmlFor="name" className="sr-only">
                        Jméno
                      </label>
                      <input
                        type="name"
                        className="form-control"
                        id="name"
                        name="entry.1179271670"
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
                        name="entry.965893452"
                      />
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-4">
                    <button type="submit" className="btn btn-default btn-block">
                      Rozhodně přijedu!
                    </button>
                  </div>
                </form>
              ) : (
                <h3
                  style={{
                    color: 'rgba(255,255,255,0.9)',
                    textAlign: 'center'
                  }}
                >
                  Děkujeme!
                </h3>
              )}
              <iframe
                name="hidden_iframe"
                id="hidden_iframe"
                style={{ display: 'none' }}
              />
            </div>
          </ScrollAnimation>
          <div className="row">
            <ScrollAnimation
              className="col-md-8 col-md-offset-2 text-center fh5co-heading"
              animateIn="fadeInUp"
              animateOnce
            >
              <p style={{ color: 'rgba(255,255,255,0.9)' }}>
                Kdybyste nějaké informace postrádali nebo měli jakýkoli dotaz,
                ozvěte se nevěstě nebo ženichovi. V den svatby bychom ale velmi
                ocenili, kdybyste se už obraceli pouze na naši zlatou pravou
                ruku
                <strong> Lucku Klocovou</strong>.&nbsp;
                <small>
                  <abbr>Tel.</abbr> <tel>+420 773 911 319</tel>
                </small>
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    );
  }
}
export default AttendanceForm;
