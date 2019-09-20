import React from "react";

export default function App() {
  const skills = [
    { id: 1, years: 7, name: "JavaScript", progress: true, rating: 5 },
    { id: 2, years: 6, name: "PHP", progress: true, rating: 4 },
    { id: 3, years: 6, name: "Microsoft Word", progress: false, rating: 4 },
    { id: 4, years: 5, name: "Adobe Photoshop", progress: true, rating: 3 },
    { id: 5, years: 4, name: "HTML5", progress: false, rating: 4 },
    { id: 6, years: 4, name: "SASS / CSS3", progress: true, rating: 4 },
    { id: 7, years: 4, name: "Git", progress: false, rating: 3 },
    { id: 8, years: 3, name: "React.js", progress: true, rating: 4 },
    { id: 9, years: 2, name: "Symfony Framework", progress: false, rating: 2 },
    { id: 10, years: 1, name: "Java", progress: true, rating: 3 }
  ];

  const certificates = [
    {
      id: 1,
      description: "Firma S.A. Ukończony kurs JavaScript ES5",
      year: "2019"
    },
    {
      id: 2,
      description: "Najszybszy kierowca - Kurs prawa jazdy Kat. C",
      year: "2014"
    },
    { id: 3, description: "Blow Mind - Kurs szybkiego czytania", year: "2010" }
  ];
  return (
    <section id="cv">
      <div className="container">
        <div className="logo">
          <img src="/logo_cv.svg" alt="" />
        </div>

        <div className="person">
          {/* LEFT */}
          <div>
            <div className="person-info">
              <p>Doświadczenie w IT (w latach)</p>
              <div className="ball left">7</div>
            </div>
            <div className="person-info">
              <p>
                Praca zdalna: <b>Częściowa</b>
              </p>
              <div className="ball left"></div>
            </div>
            <div className="person-info">
              <div className="person-helper">
                <p>Preferowana lokalizacja</p>
                <div className="person-buttons left">
                  <button>Kraków</button>
                  <button>Poznań</button>
                </div>
              </div>
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="person-info">
              <div className="person-helper left">
                <p>Kluczowe umiejętności</p>
                <div className="person-buttons left">
                  <button>Java</button>
                  <button>JavaScript</button>
                  <button>HTML5</button>
                  <button>CSS3</button>
                  <button>Responsive Web Design</button>
                  <button>Node.js</button>
                  <button>Express</button>
                </div>
              </div>
              <div className="ball left"></div>
            </div>
          </div>
          {/* IMAGE */}
          <div>
            <img src="/profile.svg" alt="" />
          </div>
          {/* RIGHT */}
          <div>
            <div className="person-info">
              <div className="ball right">$</div>
              <p>
                Oczekiwania: <b>18.000 zł netto/m-c</b>
                <br />
                Stawka netto/dzień: <b>900 PLN</b>
                <br />
                Stawka netto/h: <b>110 PLN</b>
              </p>
            </div>
            <div className="person-info">
              <div className="ball right"></div>
              <p>
                Preferowana forma umowy
                <br />
                <span className="not-found">Brak preferencji</span>
              </p>
            </div>
            <div className="person-info">
              <div className="ball right"></div>
              <div className="person-helper right">
                <p>Interesuje mnie</p>
                <div className="person-buttons right">
                  <button>Dodatkowe zlecenia</button>
                  <button>Pełen etat</button>
                  <button>Projekty / Freelancer</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        {/* Person & Specialization */}
        <div className="person-name">
          <h3>Starszy Inżynier Oprogramowania</h3>
          <h2>Damian (Poznań)</h2>
          <div className="circle-container">
            <div className="circle"></div>
            <p>Aktywnie szukam</p>
          </div>
          <div className="specialization">
            <h4>Specjalizacja</h4>
            <div className="specialization-info">
              <p>It security specialist / manager</p>
              <span>|</span>
              <p>It solutions manager</p>
              <span>|</span>
              <p>It solutions architect</p>
            </div>
          </div>
          <hr />
        </div>
        {/* Experiences & Skills */}
        <div className="exp-skills-container">
          <hr />
          <div className="experiences">
            <hr />
            <h4>Doświadczenie w IT</h4>
            <div className="experiences-container">
              {/* First Item */}
              <div className="experiences-item">
                <div className="experiences-description">
                  <h4>Company S.A. CODE TWO</h4>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dolorem voluptatum, iusto quod error laudantium quas quo
                  perspiciatis? Excepturi, veritatis autem sint, earum
                  architecto culpa vitae molestias!
                </div>
                <div className="experiences-years">
                  <button className="experiences-button">7 lat</button>
                </div>
              </div>
              {/* Second Item */}
              <div className="experiences-item">
                <div className="experiences-description">
                  <h4>Doświadczenie w kierowaniu własnym zespołem</h4>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dolorem voluptatum, iusto quod error laudantium quas quo
                  perspiciatis? Excepturi, veritatis autem sint, earum
                  architecto culpa vitae molestias!
                </div>
                <div className="experiences-years">
                  <button className="experiences-button">5 lat</button>
                </div>
              </div>
              {/* Third Item */}
              <div className="experiences-item">
                <div className="experiences-description">
                  <h4>Senior Developer</h4>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dolorem voluptatum, iusto quod error laudantium quas quo
                  perspiciatis? Excepturi, veritatis autem sint, earum
                  architecto culpa vitae molestias!
                </div>
                <div className="experiences-years">
                  <button className="experiences-button">3 lata</button>
                </div>
              </div>
            </div>
          </div>
          <div className="skills">
            <div className="progress">
              <i className="fas fa-heart"></i> - Technologie w których chcę się
              rozwijać
            </div>
            <h4>Ilość lat / umiejętności</h4>
            {skills.map(el => (
              <Skills
                key={el.id}
                years={el.years}
                name={el.name}
                progress={el.progress}
                rating={el.rating}
              ></Skills>
            ))}
          </div>
        </div>
        {/* About Me */}
        <div className="about-me">
          <h3>O mnie</h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          voluptate aliquam, dolorem excepturi, nisi sit placeat magnam ab
          fugiat facere officiis qui odit, culpa eligendi! Magni iste quis
          minima ducimus? Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Ducimus at voluptates itaque veniam molestiae eum doloremque
          beatae ab facilis ratione reprehenderit quae, cumque eius minima ullam
          quo sit animi atque? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quibusdam voluptate incidunt temporibus iusto ipsam
          eum dolores! Cupiditate quisquam reprehenderit aspernatur numquam,
          tempora eveniet assumenda alias quibusdam consequatur, officia sunt
          minus.
        </div>
        {/* Education & Languages */}
        <div className="exp-skills-container education">
          <hr />
          <div className="experiences">
            <hr />
            <h4>Wykształcenie</h4>
            <div className="experiences-container">
              {/* First Item */}
              <div className="experiences-item">
                <div className="experiences-description">
                  <h4>Wyższe magisterskie</h4>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dolorem voluptatum, iusto quod error laudantium quas quo
                  perspiciatis? Excepturi, veritatis autem sint, earum
                  architecto culpa vitae molestias!
                </div>
                <div className="experiences-years">
                  <button className="experiences-button">2016</button>
                </div>
              </div>
              {/* Second Item */}
              <div className="experiences-item">
                <div className="experiences-description">
                  <h4>Technikum Informatyczne</h4>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dolorem voluptatum, iusto quod error laudantium quas quo
                  perspiciatis? Excepturi, veritatis autem sint, earum
                  architecto culpa vitae molestias!
                </div>
                <div className="experiences-years">
                  <button className="experiences-button">2013</button>
                </div>
              </div>
            </div>
          </div>
          <div className="languages">
            <h4>Języki obce</h4>
            {/* First Item */}
            <div className="experiences-item languages-item">
              <div className="experiences-years languages-no-arrow">
                <button className="experiences-button languages-button">
                  B2
                </button>
              </div>
              <div className="experiences-description languages-text-left">
                <h4>Język Angielski</h4>
                <Stars rating="3"></Stars>
              </div>
            </div>
            {/* Second Item */}
            <div className="experiences-item languages-item">
              <div className="experiences-years languages-no-arrow">
                <button className="experiences-button languages-button">
                  C1
                </button>
              </div>
              <div className="experiences-description languages-text-left">
                <h4>Język Niemiecki</h4>
                <Stars rating="4"></Stars>
              </div>
            </div>
            {/* Third Item */}
            <div className="experiences-item languages-item">
              <div className="experiences-years languages-no-arrow">
                <button className="experiences-button languages-button">
                  A2
                </button>
              </div>
              <div className="experiences-description languages-text-left">
                <h4>Język Francuski</h4>
                <Stars rating="2"></Stars>
              </div>
            </div>
          </div>
        </div>

        {/* Certificats */}
        <div className="certificats">
          <h4>Certyfikaty</h4>
          <div className="certificats-container">
            {certificates.map(el => (
              <Certificats
                key={el.id}
                direction={el.id % 2 === 0 ? "right" : "left"}
                year={el.year}
              >
                {el.description}
              </Certificats>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Certificats({ children, direction, year }) {
  return (
    <div className={"certificats-item " + direction}>
      {direction === "right" && (
        <CertificatsDescription year={year}></CertificatsDescription>
      )}
      <div className="experiences-description certificats-description">
        <h4>{children}</h4>
      </div>
      {direction === "left" && (
        <CertificatsDescription year={year}></CertificatsDescription>
      )}
    </div>
  );
}

function CertificatsDescription({ year }) {
  return (
    <div className="experiences-years certificats-years">
      <button className="experiences-button certificats-button">{year}</button>
    </div>
  );
}

function Skills({ name, progress, rating, years }) {
  return (
    <div className="skills-item">
      <div className="skills-years">
        <div className="ball right">{years}</div>
        {name} {progress && <i className="fas fa-heart"></i>}
      </div>
      <Stars rating={rating}></Stars>
    </div>
  );
}

function Stars({ rating }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars[i] = i <= rating ? "fas fa-star" : "fas fa-star transparent";
  }

  return (
    <div className="skills-stars">
      {stars.map((el, index) => (
        <i key={index} className={el}></i>
      ))}
    </div>
  );
}
