import { motion, useReducedMotion } from "motion/react";
import { useStory } from "./StoryContext";
const staticHome = "https://static.igem.wiki/teams/6102/wiki/images/home";
const imgFlyingBirdFrame1 = `${staticHome}/home-08-bird-flight-01.avif`;
const imgFlyingBirdFrame2 = `${staticHome}/home-08-bird-flight-02.avif`;
const imgBoneNest = `${staticHome}/home-08-bone.avif`;
const imgBirdRestingOnBone = `${staticHome}/home-08-bird-landed.avif`;
const imgAccentBlushGlow = `https://static.igem.wiki/teams/6102/wiki/images/home/c207d.svg`;
const imgAccentYellowOrbit = `https://static.igem.wiki/teams/6102/wiki/images/home/55f95.svg`;

export default function Page05BirdReturnsToNest() {
  const { birdProgress, birdStage, birdLandingProgress } = useStory();
  const reduced = useReducedMotion();
  const quick = reduced ? { duration: 0.01 } : undefined;
  const landing = reduced ? Number(birdStage >= 2) : birdLandingProgress;
  const landingEase = landing * landing * (3 - 2 * landing);
  const rawFlight = Math.max(0, Math.min(1, birdProgress));
  const flight = reduced ? Number(rawFlight > 0) : rawFlight;
  const flightEase = flight * flight * (3 - 2 * flight);
  const flightY = -280 + 490 * flightEase;
  const flightEntryOpacity = Math.max(0, Math.min(1, flight * 8));

  return (
    <div
      className="home-layer-46"
      data-node-id="186:313"
      data-name="Page 05 / Bird Returns to NEST"
    >
      <div
        className="home-layer-47"
        data-node-id="227:10"
        data-name="Accent / Blush glow"
      >
        <div className="home-layer-48">
          <img
            alt=""
            loading="lazy"
            decoding="async"
            className="home-layer-49"
            src={imgAccentBlushGlow}
          />
        </div>
      </div>
      <div
        className="home-layer-50"
        data-node-id="227:11"
        data-name="Accent / Yellow orbit"
      >
        <div className="home-layer-51">
          <img
            alt=""
            loading="lazy"
            decoding="async"
            className="home-layer-49"
            src={imgAccentYellowOrbit}
          />
        </div>
      </div>
      <p className="home-layer-52" data-node-id="227:12">
        NEST
      </p>
      <p className="home-layer-53" data-node-id="227:13">
        RETURN TO NEST
      </p>
      <div
        className="home-layer-57"
        data-node-id="650:1444"
        data-name="Bone nest"
      >
        <img
          alt=""
          loading="lazy"
          decoding="async"
          className="home-layer-58"
          src={imgBoneNest}
        />
      </div>
      <div
        className="home-layer-59"
        data-node-id="647:351"
        data-name="Bird resting on bone"
        style={{
          opacity: birdStage >= 2 ? Math.min(1, landing * 5) : 0,
          transform: `translateY(${24 * (1 - landingEase)}px) scale(${0.82 + 0.18 * landingEase})`,
        }}
      >
        <img
          alt=""
          loading="lazy"
          decoding="async"
          className="home-resting-bird-image"
          src={imgBirdRestingOnBone}
        />
      </div>
      <div
        className="home-layer-60"
        data-name="Alternating flying bird frames"
        style={{
          opacity:
            birdStage >= 2 ? 1 - Math.min(1, landing * 5) : flightEntryOpacity,
          transform: `translate3d(-50%, ${flightY}px, 0)`,
        }}
      >
        <img
          alt=""
          loading="lazy"
          decoding="async"
          className="home-flying-bird-frame home-flying-bird-frame--1"
          data-node-id="510:6"
          src={imgFlyingBirdFrame1}
        />
        <img
          alt=""
          loading="lazy"
          decoding="async"
          className="home-flying-bird-frame home-flying-bird-frame--2"
          data-node-id="510:5"
          src={imgFlyingBirdFrame2}
        />
      </div>
      <motion.div
        className="home-layer-61"
        data-node-id="227:19"
        data-name="Badge / Welcome Home"
        initial={false}
        animate={{
          opacity: birdStage >= 2 ? 1 : 0,
          y: birdStage >= 2 ? 0 : 12,
        }}
        transition={
          quick ?? {
            duration: 0.38,
            ease: "easeOut",
            delay: birdStage >= 2 ? 0.22 : 0,
          }
        }
      >
        <p className="home-layer-62" data-node-id="227:20">
          HOME, AT LAST
        </p>
      </motion.div>
    </div>
  );
}
