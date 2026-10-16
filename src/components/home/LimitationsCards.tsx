import { useState, type ReactNode } from "react";
import "./LimitationsCards.css";

const STATIC = "https://static.igem.wiki/teams/6102/wiki/images/home";
const LOCAL = `${import.meta.env.BASE_URL}images/home`;

type CardArtwork = {
  name: string;
  className: string;
  local?: boolean;
};

type CardCopy = {
  title: ReactNode;
  body: ReactNode;
  frontArt: CardArtwork[];
  backArt: CardArtwork[];
};

const yellowCards: CardCopy[] = [
  {
    title: "Scalability",
    body: (
      <>
        Complex fabrication limits batch consistency and large-scale production.
      </>
    ),
    frontArt: [
      {
        name: "home-06-card-art-01.avif",
        className: "limitations-art--yellow-scalability",
      },
    ],
    backArt: [
      {
        name: "home-limit-back-cell-a.png",
        className: "limitations-art--cell-a",
        local: true,
      },
      {
        name: "home-limit-back-cell-b.png",
        className: "limitations-art--cell-b",
        local: true,
      },
      {
        name: "home-limit-back-cell-c.png",
        className: "limitations-art--cell-c",
        local: true,
      },
    ],
  },
  {
    title: (
      <>
        Mechanical
        <br />
        Stability
      </>
    ),
    body: (
      <>
        Cartilage repair materials must withstand mechanical stress and remain
        firmly attached to damaged tissue.
      </>
    ),
    frontArt: [
      {
        name: "home-06-card-art-02.avif",
        className: "limitations-art--yellow-mechanical",
      },
    ],
    backArt: [
      {
        name: "home-limit-back-patient.png",
        className: "limitations-art--patient",
        local: true,
      },
    ],
  },
  {
    title: (
      <>
        Dynamic
        <br />
        Microenvironment
      </>
    ),
    body: (
      <>
        Matrix loss, degradation, and inflammation demand adaptable repair
        strategies.
      </>
    ),
    frontArt: [
      {
        name: "home-06-card-art-03.avif",
        className: "limitations-art--yellow-dynamic",
      },
    ],
    backArt: [
      {
        name: "home-limit-back-dna.png",
        className: "limitations-art--dna",
        local: true,
      },
      {
        name: "home-limit-back-cell-outline.png",
        className: "limitations-art--cell-outline",
        local: true,
      },
      {
        name: "home-limit-back-nucleus.png",
        className: "limitations-art--nucleus",
        local: true,
      },
    ],
  },
];

const blueCards: CardCopy[] = [
  {
    title: (
      <>
        Synthetic
        <br />
        Biology
      </>
    ),
    body: (
      <>
        Complex fabrication limits batch consistency and large-scale production.
      </>
    ),
    frontArt: [
      {
        name: "home-07-card-art-01.avif",
        className: "limitations-art--blue-organism",
      },
    ],
    backArt: [
      {
        name: "home-07-card-art-01.avif",
        className: "limitations-art--blue-back-organism",
      },
    ],
  },
  {
    title: (
      <span className="limitations-selp-title">
        <strong>SELP</strong>
        <small>(Silk-elastin-like protein)</small>
      </span>
    ),
    body: (
      <>
        Cartilage repair materials must withstand mechanical stress and remain
        firmly attached to damaged tissue.
      </>
    ),
    frontArt: [
      {
        name: "home-07-card-art-02.avif",
        className: "limitations-art--blue-selp",
      },
    ],
    backArt: [
      {
        name: "home-07-card-art-02.avif",
        className: "limitations-art--blue-back-selp",
      },
    ],
  },
  {
    title: (
      <>
        Modular
        <br />
        Design
      </>
    ),
    body: (
      <>
        Matrix loss, degradation, and inflammation demand adaptable repair
        strategies.
      </>
    ),
    frontArt: [
      {
        name: "home-07-card-art-03b.avif",
        className: "limitations-art--blue-gag",
      },
      {
        name: "home-07-card-art-03c.avif",
        className: "limitations-art--blue-liposome",
      },
      {
        name: "home-07-card-art-03a.avif",
        className: "limitations-art--blue-magnetic",
      },
    ],
    backArt: [
      {
        name: "home-07-card-art-03b.avif",
        className: "limitations-art--blue-back-gag",
      },
      {
        name: "home-07-card-art-03c.avif",
        className: "limitations-art--blue-back-liposome",
      },
      {
        name: "home-07-card-art-03a.avif",
        className: "limitations-art--blue-back-magnetic",
      },
    ],
  },
];

function Artwork({ art }: { art: CardArtwork }) {
  return (
    <img
      alt=""
      aria-hidden="true"
      className={`limitations-art ${art.className}`}
      decoding="async"
      src={`${art.local ? LOCAL : STATIC}/${art.name}`}
    />
  );
}

function CardLayer({
  active,
  card,
  flipped,
  index,
  layer,
  setFlipped,
}: {
  active: boolean;
  card: CardCopy;
  flipped: boolean;
  index: number;
  layer: "yellow" | "blue";
  setFlipped: (value: boolean) => void;
}) {
  return (
    <div
      className={`limitations-layer limitations-layer--${layer}`}
      data-flipped={flipped}
      aria-hidden={!active}
    >
      <span className="limitations-layer__shadow" aria-hidden="true" />
      <span className="limitations-layer__flip">
        <span className="limitations-layer__face limitations-layer__face--front">
          <span className="limitations-card-title">{card.title}</span>
          {card.frontArt.map((art) => (
            <Artwork art={art} key={art.name} />
          ))}
          <button
            aria-label={`Show details for card ${index + 1}`}
            className="limitations-card-click"
            onClick={() => setFlipped(true)}
            tabIndex={active && !flipped ? 0 : -1}
            type="button"
          >
            Click
          </button>
        </span>
        <button
          aria-label={`Return card ${index + 1} to its front`}
          className="limitations-layer__face limitations-layer__face--back"
          onClick={() => setFlipped(false)}
          tabIndex={active && flipped ? 0 : -1}
          type="button"
        >
          <span className="limitations-card-title">{card.title}</span>
          <span className="limitations-card-body">{card.body}</span>
          {card.backArt.map((art) => (
            <Artwork art={art} key={art.name} />
          ))}
        </button>
      </span>
    </div>
  );
}

export function MaterialLimitations({
  yellowRemoved,
}: {
  yellowRemoved: boolean;
}) {
  const [yellowFlipped, setYellowFlipped] = useState([false, false, false]);
  const [blueFlipped, setBlueFlipped] = useState([false, false, false]);

  return (
    <div
      className="limitations-page"
      data-node-id="909:9"
      data-yellow-removed={yellowRemoved}
    >
      <h2 className="limitations-page__heading limitations-page__heading--yellow">
        limitations of the materials
      </h2>
      <h2 className="limitations-page__heading limitations-page__heading--blue">
        our solution
      </h2>

      <div className="limitations-card-row">
        {yellowCards.map((yellowCard, index) => (
          <article className="limitations-card" key={index}>
            <CardLayer
              active={yellowRemoved}
              card={blueCards[index]}
              flipped={blueFlipped[index]}
              index={index}
              layer="blue"
              setFlipped={(value) =>
                setBlueFlipped((current) =>
                  current.map((item, itemIndex) =>
                    itemIndex === index ? value : item,
                  ),
                )
              }
            />
            <CardLayer
              active={!yellowRemoved}
              card={yellowCard}
              flipped={yellowFlipped[index]}
              index={index}
              layer="yellow"
              setFlipped={(value) =>
                setYellowFlipped((current) =>
                  current.map((item, itemIndex) =>
                    itemIndex === index ? value : item,
                  ),
                )
              }
            />
          </article>
        ))}
      </div>
    </div>
  );
}
