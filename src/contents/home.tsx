import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type CSSProperties,
} from "react";
import HeroSection from "../components/home/HeroSection";
import GlobalBurden from "../components/home/GlobalBurden";
import Page03SportsTrauma from "../components/home/Page03SportsTrauma";
import Page04PostOpRehabilitation from "../components/home/Page04PostOpRehabilitation";
import Page05BirdReturnsToNest from "../components/home/Page05BirdReturnsToNest";
import {
  HydrogelExplanation,
  HydrogelFormation,
  LiposomeLoading,
  MagneticAlignment,
  MaterialLimitations,
  MaterialResultCards,
  MaterialsAndSelp,
} from "../components/home/Page06MaterialStory";
import { Footer } from "../components/Footer";
import "../components/home/layers.css";
import "./home.css";

import { StoryContext } from "../components/home/StoryContext";
import {
  STORY_STOPS,
  useStoryNavigation,
} from "../components/home/useStoryNavigation";
import "../components/home/material-story.css";

function Scene({
  children,
  name,
  index,
  active,
  birdProgress,
  birdStage,
  birdLandingProgress,
  next,
  pipelineStep = -1,
  pipelineProgress = 0,
  footer = false,
  style,
}: {
  children: ReactNode;
  name: string;
  index: number;
  active: boolean;
  birdProgress: number;
  birdStage: number;
  birdLandingProgress: number;
  next: () => void;
  pipelineStep?: number;
  pipelineProgress?: number;
  footer?: boolean;
  style?: CSSProperties;
}) {
  return (
    <section
      id={`home-${index + 1}`}
      className={`home-scene${index === 0 ? " home-hero-scene" : ""}${footer ? " home-footer-scene" : ""}`}
      aria-label={name}
      style={style}
      aria-hidden={!active}
      inert={!active}
    >
      <StoryContext.Provider
        value={{
          active,
          birdProgress,
          birdStage,
          birdLandingProgress,
          next,
          pipelineStep,
          pipelineProgress,
        }}
      >
        <div className="home-scene-canvas">{children}</div>
      </StoryContext.Provider>
    </section>
  );
}
export function Home() {
  const {
    stop,
    page,
    burdenStage,
    burdenProgress,
    burdenPain,
    birdProgress,
    birdStage,
    birdLandingProgress,
    next,
    scenePosition,
    crossfade,
    sportsText,
    sportsArt,
    sportsFrame,
    rehabText,
    rehabArt,
    rehabFrame,
    hydrogelInjection,
    cardTransition,
    nestTitle,
  } = useStoryNavigation();
  const viewport = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 1280, height: 720 });
  useEffect(() => {
    document.body.classList.add("home-story-open");
    document.documentElement.classList.add("home-story-open");
    window.scrollTo(0, 0);
    const element = viewport.current;
    const observer = new ResizeObserver(([entry]) =>
      setSize({
        width: entry.contentRect.width,
        height: entry.contentRect.height,
      }),
    );
    if (element) observer.observe(element);
    return () => {
      observer.disconnect();
      document.body.classList.remove("home-story-open");
      document.documentElement.classList.remove("home-story-open");
    };
  }, []);
  const scenes = [
    {
      name: "NEST",
      content: (
        <>
          <HeroSection />
          <button
            className="home-scroll-cue"
            onClick={next}
            aria-label="Explore the NEST story"
          >
            <img
              src={`https://static.igem.wiki/teams/6102/wiki/images/home/chevrons.svg`}
              width="26.4167"
              height="29"
              alt=""
            />
          </button>
        </>
      ),
    },
    {
      name: "Global burden",
      content: (
        <GlobalBurden
          stage={burdenStage}
          progress={burdenProgress}
          painProgress={burdenPain}
        />
      ),
    },
    {
      name: "Sports trauma",
      content: <Page03SportsTrauma frameProgress={sportsFrame} />,
    },
    {
      name: "Post-operative rehabilitation",
      content: <Page04PostOpRehabilitation frameProgress={rehabFrame} />,
    },
    { name: "No single solution fits all", content: <HydrogelExplanation /> },
    { name: "Material limitations", content: <MaterialLimitations /> },
    { name: "Material result cards", content: <MaterialResultCards /> },
    { name: "Return to NEST", content: <Page05BirdReturnsToNest /> },
    { name: "Materials and SELP", content: <MaterialsAndSelp /> },
    { name: "Magnetic alignment", content: <MagneticAlignment /> },
    { name: "Hydrogel formation", content: <HydrogelFormation /> },
    { name: "Liposome loading", content: <LiposomeLoading /> },
    { name: "NEST footer", content: <Footer story /> },
  ];
  const style = {
    "--scene-scale": Math.min(size.width / 1280, size.height / 720),
    "--screen-height": `${size.height}px`,
    "--screen-width": `${size.width}px`,
  } as CSSProperties;
  return (
    <div
      className="home-scroll-space"
      style={{
        height: STORY_STOPS.length * size.height,
      }}
    >
      <div
        ref={viewport}
        className="nest-home story-viewport"
        style={style}
        data-story-stop={stop}
        data-story-page={page + 1}
        data-bird-progress={birdProgress}
      >
        <div
          className="story-track"
          style={{
            transform: `translateY(${-scenePosition * size.height}px)`,
          }}
        >
          {scenes.map((scene, index) => (
            <Scene
              key={scene.name}
              name={scene.name}
              index={index}
              style={
                {
                  ...(crossfade?.incoming === index
                    ? {
                        transform: "translateY(-100%)",
                        opacity: crossfade.opacity,
                        zIndex: 2,
                      }
                    : {}),
                  ...(index === 2 || index === 3
                    ? {
                        "--intro-text": index === 2 ? sportsText : rehabText,
                        "--intro-art": index === 2 ? sportsArt : rehabArt,
                      }
                    : {}),
                  ...(index === 4
                    ? {
                        "--hydrogel-injection-offset": `${hydrogelInjection * 108}px`,
                      }
                    : {}),
                  ...(index === 5
                    ? {
                        "--cards-exit-y": `${cardTransition * -620}px`,
                        "--cards-exit-opacity": 1 - cardTransition,
                      }
                    : {}),
                  ...(index === 6
                    ? {
                        "--cards-entry-y": `${(1 - cardTransition) * 620}px`,
                        "--cards-entry-opacity": cardTransition,
                      }
                    : {}),
                  ...(index === 7 ? { "--nest-title": nestTitle } : {}),
                } as CSSProperties
              }
              active={page === index}
              footer={scene.name === "NEST footer"}
              birdProgress={birdProgress}
              birdStage={birdStage}
              birdLandingProgress={birdLandingProgress}
              next={next}
              pipelineStep={index >= 8 && index <= 11 ? index - 8 : -1}
              pipelineProgress={Math.max(0, Math.min(3, scenePosition - 8))}
            >
              {scene.content}
            </Scene>
          ))}
        </div>
      </div>
    </div>
  );
}
