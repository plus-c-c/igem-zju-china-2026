import { useState } from "react";

const STATIC = "https://static.igem.wiki/teams/6102/wiki/images/home";

const asset = (name: string) => `${STATIC}/${name}`;

function Art({ name, className }: { name: string; className: string }) {
  return (
    <img
      alt=""
      aria-hidden="true"
      className={`material-art ${className}`}
      decoding="async"
      loading="lazy"
      src={asset(name)}
    />
  );
}

function ProcessCard({ side }: { side: "left" | "right" }) {
  return (
    <div className={`material-process-card material-process-card--${side}`} />
  );
}

export function MaterialsAndSelp() {
  return (
    <div
      className="material-scene material-scene--760 material-scene--pipeline"
      data-node-id="725:9"
    >
      <ProcessCard side="right" />
      <div className="material-label material-label--left" />
      <Art name="home-09-pipeline-chain.avif" className="material-01-chain" />
      <Art name="home-09-pipeline-vial.avif" className="material-01-vial" />
      <Art
        name="home-09-pipeline-fermenter.avif"
        className="material-01-fermenter"
      />
      <Art
        name="home-09-pipeline-connector.svg"
        className="material-01-connector"
      />
    </div>
  );
}

export function MagneticAlignment() {
  return (
    <div
      className="material-scene material-scene--770 material-scene--pipeline"
      data-node-id="725:10"
    >
      <ProcessCard side="left" />
      <div className="material-label material-label--right" />
      <Art
        name="home-10-pipeline-network.avif"
        className="material-02-network"
      />
      <Art name="home-10-pipeline-vial.avif" className="material-02-vial" />
      <Art name="home-10-pipeline-flask.avif" className="material-02-flask" />
      <Art
        name="home-10-pipeline-connector.svg"
        className="material-02-connector"
      />
    </div>
  );
}

export function HydrogelFormation() {
  return (
    <div
      className="material-scene material-scene--780 material-scene--pipeline"
      data-node-id="725:11"
    >
      <ProcessCard side="right" />
      <div className="material-label material-label--left" />
      <Art name="home-11-pipeline-chain.avif" className="material-03-chain" />
      <Art name="home-11-pipeline-vial.avif" className="material-03-vial" />
      <Art
        name="home-11-pipeline-fermenter.avif"
        className="material-03-fermenter"
      />
      <Art
        name="home-11-pipeline-connector.svg"
        className="material-03-connector"
      />
    </div>
  );
}

export function LiposomeLoading() {
  return (
    <div
      className="material-scene material-scene--784 material-scene--pipeline"
      data-node-id="725:12"
    >
      <ProcessCard side="left" />
      <div className="material-label material-label--right" />
      <Art
        name="home-12-pipeline-fermenter.avif"
        className="material-04-fermenter"
      />
      <Art name="home-12-pipeline-vial.avif" className="material-04-vial" />
      <Art
        name="home-12-pipeline-liposome.avif"
        className="material-04-liposome"
      />
    </div>
  );
}

const limitationCards = [
  {
    title: (
      <>
        barriers to large-
        <br />
        scale production
      </>
    ),
    art: "home-06-card-art-01.avif",
    className: "material-limit-art--aggregate",
  },
  {
    title: (
      <>
        challenges for
        <br />
        clinical application
      </>
    ),
    art: "home-06-card-art-02.avif",
    className: "material-limit-art--bone",
  },
  {
    title: (
      <>
        cannot overcome the
        <br />
        confined
        <br />
        microenvironment
      </>
    ),
    art: "home-06-card-art-03.avif",
    className: "material-limit-art--cycle",
  },
];

export function MaterialLimitations() {
  const [flipped, setFlipped] = useState([false, false, false]);
  const backgrounds = [
    "home-06-card-bg-01.avif",
    "home-06-card-bg-02.avif",
    "home-06-card-bg-03.avif",
  ];

  const toggleCard = (index: number) => {
    setFlipped((current) =>
      current.map((value, cardIndex) => (cardIndex === index ? !value : value)),
    );
  };

  return (
    <div
      className="material-scene material-scene--770 material-cards"
      data-node-id="725:13"
    >
      <h2>limitations of the materials</h2>
      <div className="material-card-row">
        {limitationCards.map((card, index) => (
          <article className="material-card" key={card.art}>
            <button
              aria-label={`Flip card ${index + 1}`}
              aria-pressed={flipped[index]}
              className="material-card-flip"
              data-flipped={flipped[index]}
              onClick={() => toggleCard(index)}
              type="button"
            >
              <span className="material-card-flip-inner">
                <span className="material-card-face material-card-face--front">
                  <Art name={backgrounds[index]} className="material-card-bg" />
                  <span className="material-card-title">{card.title}</span>
                  <Art
                    name={card.art}
                    className={`material-limit-art ${card.className}`}
                  />
                </span>
                <span className="material-card-face material-card-face--back">
                  <Art name={backgrounds[index]} className="material-card-bg" />
                </span>
              </span>
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}

export function MaterialResultCards() {
  return (
    <div
      className="material-scene material-scene--840 material-results"
      data-node-id="725:15"
    >
      <div className="material-card-row">
        <article className="material-card">
          <Art name="home-06-card-bg-01.avif" className="material-card-bg" />
          <Art
            name="home-07-card-art-01.avif"
            className="material-result-cell"
          />
        </article>
        <article className="material-card">
          <Art name="home-06-card-bg-02.avif" className="material-card-bg" />
          <Art
            name="home-07-card-art-02.avif"
            className="material-result-chain"
          />
        </article>
        <article className="material-card">
          <Art name="home-06-card-bg-03.avif" className="material-card-bg" />
          <Art
            name="home-07-card-art-03a.avif"
            className="material-result-magnetic"
          />
          <Art
            name="home-07-card-art-03b.avif"
            className="material-result-gag"
          />
          <Art
            name="home-07-card-art-03c.avif"
            className="material-result-liposome"
          />
        </article>
      </div>
      <p className="material-results-created">so,we created......</p>
    </div>
  );
}

export function HydrogelExplanation() {
  return (
    <div
      className="material-scene material-scene--explanation"
      data-node-id="725:16"
    >
      <h2 className="material-explanation-kicker">
        No single solution fits all
      </h2>
      <div className="material-explanation-copy">
        <h2>
          Hydrogel materials show great potential
          <br />
          for addressing this challenge.
        </h2>
        <p>
          Biomimetic hydrogels have emerged as suitable filling materials. In
          addition to their excellent moldability, which enables them to conform
          to irregular defects, they can closely mimic the physicochemical and
          biological properties of the natural extracellular matrix (ECM). They
          provide cells with three-dimensional structural support, helping
          maintain tissue mechanical function and microenvironmental
          homeostasis.
        </p>
      </div>
      <Art
        name="home-05-solution-syringe.avif"
        className="material-explanation-bone"
      />
      <Art
        name="home-05-solution-bone.avif"
        className="material-explanation-syringe"
      />
    </div>
  );
}
