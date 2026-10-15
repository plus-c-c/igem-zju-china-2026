import "./Footer.css";

/**
 * Footer assets.
 *
 * These icons must point to the files uploaded through the iGEM wiki
 * deliverables tool (https://teams.igem.org/6102/deliverables/wiki/ →
 * static.igem.wiki). The local files under public/images are development
 * placeholders until the uploaded URLs are wired in.
 */
const asset = (path: string) => `${import.meta.env.BASE_URL}images/${path}`;

const sponsors = [
  { name: "GenScript", logo: asset("footer/genscript.png") },
  { name: "Yanyin", logo: asset("footer/yanyin.png") },
  { name: "CUSABIO", logo: asset("footer/cusabio.png") },
  { name: "Twist Bioscience", logo: asset("footer/twist-bioscience.png") },
  { name: "BioRender", logo: asset("footer/biorender.png") },
  { name: "Addgene", logo: asset("footer/addgene.png") },
];

export function Footer({ story = false }: { story?: boolean }) {
  return (
    <footer className={`footer${story ? " footer--story" : ""}`}>
      {/* Crown humps above the rounded footer body (referencing the 2025 design) */}
      <div className="footer-wings" aria-hidden="true">
        <svg
          viewBox="0 0 856 77"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M132.331 0.217773C124.683 10.1006 120.05 22.4264 119.856 35.793C119.626 51.7622 125.775 66.2458 135.944 76.8525H4.10449C17.7731 32.4727 59.1033 0.217778 107.968 0.217773H132.331ZM747.517 0.217773C796.381 0.217775 837.711 32.4727 851.379 76.8525H729.391C739.867 66.2458 746.434 51.7619 746.665 35.793C746.858 22.4264 742.581 10.1006 735.219 0.217773H747.517Z"
            fill="#4a78c9"
          />
        </svg>
      </div>

      <div className="footer-body">
        <div className="container">
          <div className="row g-4 align-items-center footer-top">
            <div className="col-12 col-lg-3 footer-col--brand">
              <div className="footer-chip footer-chip--team">
                <img src={asset("team-logo.png")} alt="ZJU-China" />
              </div>
            </div>

            <div className="col-12 col-lg-5">
              <div className="footer-uni">
                <div className="footer-chip">
                  <img
                    src={asset("footer/zhejiang-university.png")}
                    alt="Zhejiang University"
                  />
                </div>
                <div className="footer-chip">
                  <img
                    src={asset("footer/college-of-life-sciences.png")}
                    alt="College of Life Sciences, Zhejiang University"
                  />
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-4">
              <div className="footer-contact">
                <div className="footer-mascot">
                  <img
                    src={asset("project-logo.png")}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div>
                  <h5 className="footer-contact-title">FOLLOW &amp; CONTACT</h5>
                  <p className="footer-contact-email mb-0">
                    <a href="mailto:ZJUChina@outlook.com">
                      ZJUChina@outlook.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row footer-supporters text-center">
            <div className="col">
              <h4 className="footer-supporters-title">
                WE THANK OUR SUPPORTERS:
              </h4>
              <div className="sponsors-container">
                <div className="sponsors-track">
                  {[...sponsors, ...sponsors].map((sponsor, index) => (
                    <div
                      className="sponsor-slide"
                      key={`${sponsor.name}-${index}`}
                    >
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="row footer-legal">
            <div className="col">
              <p className="mb-0">
                <small>
                  © 2026 - Content on this site is licensed under a{" "}
                  <a
                    href="https://creativecommons.org/licenses/by/4.0/"
                    rel="license"
                  >
                    Creative Commons Attribution 4.0 International license
                  </a>
                  .
                </small>
              </p>
              <p className="mb-0">
                <small>
                  The repository used to create this website is available at{" "}
                  <a href="https://gitlab.igem.org/2026/zju-china">
                    gitlab.igem.org/2026/zju-china
                  </a>
                  .
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
