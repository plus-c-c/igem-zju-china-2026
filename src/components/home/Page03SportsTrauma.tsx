import { useReducedMotion } from "motion/react";

const imgSportsTraumaFrame1 = `https://static.igem.wiki/teams/6102/wiki/images/home/home-03-sports-trauma-01.avif`;
const imgSportsTraumaFrame2 = `https://static.igem.wiki/teams/6102/wiki/images/home/home-03-sports-trauma-02.avif`;
const imgSportsTraumaFrame3 = `https://static.igem.wiki/teams/6102/wiki/images/home/home-03-sports-trauma-03.avif`;
const imgPage03PowderDisc = `https://static.igem.wiki/teams/6102/wiki/images/home/3249a.svg`;
const imgPage03YellowAccent = `https://static.igem.wiki/teams/6102/wiki/images/home/ff246.svg`;
const imgPage03PinkSpark = `https://static.igem.wiki/teams/6102/wiki/images/home/ea453.svg`;

export default function Page03SportsTrauma({
  frameProgress,
}: {
  frameProgress: number;
}) {
  const reduced = useReducedMotion();
  const frame = reduced ? Math.round(frameProgress) : frameProgress;
  return (
    <div
      className="home-layer-12"
      data-node-id="186:310"
      data-name="Page 03 / Sports Trauma"
    >
      <div
        className="home-layer-13"
        data-node-id="222:31"
        data-name="Page 03 / Powder Disc"
      >
        <img
          alt=""
          loading="lazy"
          decoding="async"
          className="home-layer-11"
          src={imgPage03PowderDisc}
        />
      </div>
      <div
        className="home-layer-14"
        data-node-id="222:32"
        data-name="Page 03 / Yellow Accent"
      >
        <img
          alt=""
          loading="lazy"
          decoding="async"
          className="home-layer-11"
          src={imgPage03YellowAccent}
        />
      </div>
      <div
        className="home-layer-15"
        data-node-id="222:33"
        data-name="Page 03 / Illustration Stage"
      />
      <p className="home-layer-16" data-node-id="222:34">
        SPORTS TRAUMA
      </p>
      <div className="home-layer-17" data-node-id="222:35">
        <p className="home-layer-18">Impact happens</p>
        <p className="home-layer-19">in an instant.</p>
      </div>
      <p className="home-layer-20" data-node-id="222:36">
        A sudden knee injury can interrupt movement, confidence, and recovery.
        NEST is designed to support precise repair where it matters most.
      </p>
      <div
        className="home-layer-21"
        data-node-id="222:37"
        data-name="Page 03 / Chip"
      >
        <p className="home-layer-22" data-node-id="222:38">
          TARGETED JOINT REPAIR
        </p>
      </div>
      <div
        className="home-layer-23"
        data-node-id="222:39"
        data-name="Illustration / Sports Knee Trauma"
      >
        <img
          alt="An athlete holding an injured knee after a sports accident"
          data-node-id="829:5"
          loading="lazy"
          decoding="async"
          className="home-layer-9 story-frame-image"
          src={imgSportsTraumaFrame1}
          style={{ opacity: Math.max(0, 1 - frame) }}
        />
        <img
          alt=""
          aria-hidden="true"
          data-node-id="829:7"
          loading="lazy"
          decoding="async"
          className="home-layer-9 story-frame-image"
          src={imgSportsTraumaFrame2}
          style={{ opacity: Math.max(0, 1 - Math.abs(frame - 1)) }}
        />
        <img
          alt=""
          aria-hidden="true"
          data-node-id="829:9"
          loading="lazy"
          decoding="async"
          className="home-layer-9 story-frame-image"
          src={imgSportsTraumaFrame3}
          style={{ opacity: Math.max(0, frame - 1) }}
        />
      </div>
      <div
        className="home-layer-24"
        data-node-id="224:93"
        data-name="Page 03 / Pink Spark"
      >
        <img
          alt=""
          loading="lazy"
          decoding="async"
          className="home-layer-11"
          src={imgPage03PinkSpark}
        />
      </div>
      <div
        className="home-layer-25"
        data-node-id="224:94"
        data-name="Page 03 / Yellow Rule"
      />
    </div>
  );
}
