import "./Footer.css";

export function Footer({ story = false }: { story?: boolean }) {
  return (
    <footer
      className={`footer${story ? " footer--story" : ""}`}
      data-node-id="192:311"
      data-name="Footer / Desktop"
    >
      <div className="footer__left" data-node-id="192:312">
        <p className="footer__tagline" data-node-id="192:315">
          An engineered hydrogel platform for healthier joints and a better
          tomorrow.
        </p>
      </div>

      <div className="footer__legal" data-node-id="192:316">
        <p>
          © 2026 - Content on this site is licensed under a{" "}
          <a href="https://creativecommons.org/licenses/by/4.0/" rel="license">
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
        <div className="footer__sponsors" aria-label="Project sponsors">
          <img
            className="footer__sponsor-logo"
            src="https://static.igem.wiki/teams/6102/wiki/images/footer/001.avif"
            alt="College of Life Sciences, Zhejiang University"
          />
          <img
            className="footer__sponsor-logo"
            src="https://static.igem.wiki/teams/6102/wiki/images/footer/002.avif"
            alt="Zhejiang University"
          />
        </div>
      </div>
    </footer>
  );
}
