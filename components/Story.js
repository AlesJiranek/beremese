import React from 'react';
import ScrollAnimation from '../lib/ScrollAnimation';

const Story = () => (
  <div id="fh5co-couple-story">
    <div className="container">
      <div className="row">
        <ScrollAnimation
          animateIn="fadeInUp"
          animateOnce
          className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box"
        >
          <span>Náš příběh</span>
          <h2>Jak to celé začalo?</h2>
        </ScrollAnimation>
      </div>
      <div className="row">
        <div className="col-md-12 col-md-offset-0">
          <ScrollAnimation
            animateIn="fadeInUp"
            animateOnce
            component="ul"
            className="timeline animate-box"
          >
            <ScrollAnimation animateIn="fadeInUp" animateOnce component="li">
              <div
                className="timeline-badge"
                style={{ backgroundImage: 'url(/static/images/proudy.jpg)' }}
              />
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h3 className="timeline-title">První setkání</h3>
                  <span className="date">2. října 2012, Festival Proudy</span>
                </div>
                <div className="timeline-body">
                  <p>
                    Za prvním našim setkáním stojí naše společná kamarádka
                    Nikča. Nikča naprosto přesvědčená<br />o tom, že k sobě
                    přeci jasně patříme! Oba jsme se vzájemného setkání dlouho
                    zdráhali, protože nikdo přeci nechce být dohazován.
                    Každopádně za půl roku jsme se osobně poznali při
                    příležitosti kolejního festivalu.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="fadeInUp"
              animateOnce
              component="li"
              className="timeline-inverted"
            >
              <div
                className="timeline-badge"
                style={{ backgroundImage: 'url(/static/images/IMG_0769.jpg)' }}
              />
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h3 className="timeline-title">První tanec</h3>
                  <span className="date">20. února 2014, Klub Vagon</span>
                </div>
                <div className="timeline-body">
                  <p>
                    Hádejte kdo za to opět mohl! O rok a půl později jsme byli
                    oba pozváni na Nikčy narozeniny. Ano,<br />a byla to ta
                    stejná Nikča. Na začátku jsme se sobě vyhýbali, pak ale Aleš
                    málem rozlil pivo, najednou mě vyzval k tanci a ten to
                    všechno rozhodl.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" animateOnce component="li">
              <div
                className="timeline-badge"
                style={{
                  backgroundImage:
                    'url(/static/images/vK1o5rZGqxyovfIhZyMELhk03wO.jpg)'
                }}
              />
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h3 className="timeline-title">První rande</h3>
                  <span className="date">
                    7. března 2014, Kino Slovanský dům
                  </span>
                </div>
                <div className="timeline-body">
                  <p>
                    Oťukávání to bylo vskutku veselé. Kino na které se Aleš
                    doslova vřítil na poslední chvíli, Renči držkopády na
                    bruslích, po kterých se loučila<br />s Alešem s krvavýma
                    rukama a roztrhanýma legínama na zadku. Až naše první dětská
                    pusa, která proběhla v metru na Vyšehradě, kdy se Aleš
                    odhodlal a než si to Renča uvědomila, tak se vypařil. A pak
                    se málem hanbou propadla, protože celý vagón slyšel ten
                    děsný velký mlask.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="fadeInUp"
              animateOnce
              component="li"
              className="timeline-inverted"
            >
              <div
                className="timeline-badge"
                style={{
                  backgroundImage:
                    'url(/static/images/18261330_10212101081629791_2020012277_o.jpg)'
                }}
              />
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h3 className="timeline-title">Naše svatba</h3>
                  <span className="date">
                    16. června 2018, Penzion Mlýn Kamenice
                  </span>
                </div>
                <div className="timeline-body">
                  <p>
                    A pak už jsme prožili již skvělé čtyři roky srandy, která
                    nám doufáme vydrží napořád! Samozřejmě také zásluhou našich
                    skvělých rodičů<br />a kamarádů! Nemůžeme se dočkat svatby,
                    kde Vás všechny budeme mít.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  </div>
);

export default Story;
