import "./Footer.css";

/**
 * All footer icons are uploaded through the iGEM wiki deliverables tool
 * (https://teams.igem.org/6102/deliverables/wiki/) and served from
 * static.igem.wiki. To add a logo, upload it there and append the resulting
 * URL to one of the lists below.
 */
const uploads = "https://static.igem.wiki/teams/6102/wiki/images";

const universityLogos = [
  {
    src: `${uploads}/footer/001.avif`,
    alt: "College of Life Sciences, Zhejiang University",
  },
  {
    src: `${uploads}/footer/002.avif`,
    alt: "Zhejiang University",
  },
];

const sponsorLogos = [
  { src: `${uploads}/footer/01-genscript.avif`, alt: "GenScript" },
  { src: `${uploads}/footer/02-yanyin.avif`, alt: "Yanyin" },
  { src: `${uploads}/footer/03-cusabio-huamei.avif`, alt: "CUSABIO" },
  {
    src: `${uploads}/footer/04-twist-bioscience.avif`,
    alt: "Twist Bioscience",
  },
  { src: `${uploads}/footer/05-biorender.avif`, alt: "BioRender" },
  { src: `${uploads}/footer/06-addgene.avif`, alt: "Addgene" },
];

export function Footer({ story = false }: { story?: boolean }) {
  return (
    <footer
      className={`footer${story ? " footer--story" : ""}`}
      data-node-id="192:311"
      data-name="Footer / Desktop"
    >
      <div className="footer__left" data-node-id="192:312">
        <img
          className="footer__team-logo"
          src={`${uploads}/team-logo.avif`}
          alt="ZJU-China"
        />
        <p className="footer__tagline" data-node-id="192:315">
          An engineered hydrogel platform for healthier joints and a better
          tomorrow.
        </p>
      </div>

      <div className="footer__right">
        <div className="footer__contact">
          <h5 className="footer__contact-title">FOLLOW &amp; CONTACT</h5>
          <p className="footer__contact-email">
            <a href="mailto:ZJUChina@outlook.com">ZJUChina@outlook.com</a>
          </p>
        </div>

        <div className="footer__legal" data-node-id="192:316">
          <p>
            © 2026 - Content on this site is licensed under a{" "}
            <a
              href="https://creativecommons.org/licenses/by/4.0/"
              rel="license"
            >
              Creative Commons Attribution 4.0 International license
            </a>
            .
          </p>
          <p>
            The repository used to create this website is available at{" "}
            <a href="https://gitlab.igem.org/2026/zju-china">
              gitlab.igem.org/2026/zju-china
            </a>
            .
          </p>
        </div>
      </div>

      <div className="footer__bottom">
        <h4 className="footer__supporters-title">WE THANK OUR SUPPORTERS:</h4>
        <div className="footer__logos">
          <div className="footer__logo-group" aria-label="Universities">
            {universityLogos.map((logo) => (
              <span className="footer__logo-chip" key={logo.src}>
                <img src={logo.src} alt={logo.alt} loading="lazy" />
              </span>
            ))}
          </div>
          <div className="footer__logo-group" aria-label="Sponsors">
            {sponsorLogos.map((logo) => (
              <span className="footer__logo-chip" key={logo.src}>
                <img src={logo.src} alt={logo.alt} loading="lazy" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
