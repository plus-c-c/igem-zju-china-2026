import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type CSSProperties,
} from "react";
import { HomeIntro } from "../components/home/HomeIntro";
import GlobalBurden from "../components/home/GlobalBurden";
import Page03SportsTrauma from "../components/home/Page03SportsTrauma";
import Page04PostOpRehabilitation from "../components/home/Page04PostOpRehabilitation";
import Page05BirdReturnsToNest from "../components/home/Page05BirdReturnsToNest";
import {
  HydrogelExplanation,
  MaterialPipelineStory,
  MaterialLimitations,
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
      className={`home-scene${footer ? " home-footer-scene" : ""}`}
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
    nextScene,
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
    pipelineProgress,
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
      name: "NEST introduction",
      content: <HomeIntro onEnter={nextScene} />,
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
    { name: "Return to NEST", content: <Page05BirdReturnsToNest /> },
    {
      name: "NEST material pipeline",
      content: <MaterialPipelineStory progress={pipelineProgress} />,
    },
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
                        "--cards-yellow-y": `${cardTransition.yellowExit * -760}px`,
                        "--cards-blue-y": `${cardTransition.yellowExit * -760}px`,
                        "--limitations-opacity": 1 - cardTransition.yellowExit,
                        "--limitations-title-y": `${cardTransition.yellowExit * -42}px`,
                        "--results-text-opacity":
                          cardTransition.resultTextEntry,
                        "--results-text-y": `${(1 - cardTransition.resultTextEntry) * 24}px`,
                        "--results-entry-y": `${(1 - cardTransition.resultEntry) * 34}px`,
                        "--results-opacity": cardTransition.resultEntry,
                      }
                    : {}),
                  ...(index === 6 ? { "--nest-title": nestTitle } : {}),
                } as CSSProperties
              }
              active={page === index}
              footer={scene.name === "NEST footer"}
              birdProgress={birdProgress}
              birdStage={birdStage}
              birdLandingProgress={birdLandingProgress}
              next={next}
              pipelineStep={index === 7 ? Math.round(pipelineProgress) : -1}
              pipelineProgress={pipelineProgress}
            >
              {scene.content}
            </Scene>
          ))}
        </div>
      </div>
    </div>
  );
}
