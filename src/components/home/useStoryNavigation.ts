import { useCallback, useEffect, useState } from "react";

export const STORY_STOPS = [
  0, 0, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7,
  7, 7, 8,
];

/** Native scrolling controls the timeline without wheel or touch interception. */
export function useStoryNavigation() {
  const [position, setPosition] = useState(0);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const root = document.querySelector<HTMLElement>(".home-scroll-space");
      const viewport = document.querySelector<HTMLElement>(".story-viewport");
      if (!root || !viewport) return;
      const start = root.getBoundingClientRect().top + window.scrollY;
      const units = (window.scrollY - start) / viewport.clientHeight;
      setPosition(Math.max(0, Math.min(STORY_STOPS.length - 1, units)));
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    schedule();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);
  const seek = useCallback((target: number) => {
    const root = document.querySelector<HTMLElement>(".home-scroll-space");
    const viewport = document.querySelector<HTMLElement>(".story-viewport");
    if (!root || !viewport) return;
    window.scrollTo({
      top:
        root.getBoundingClientRect().top +
        window.scrollY +
        Math.max(0, Math.min(STORY_STOPS.length - 1, target)) *
          viewport.clientHeight,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  }, []);
  const stop = Math.floor(position);
  const fraction = position - stop;
  const from = STORY_STOPS[stop];
  const to = STORY_STOPS[Math.min(stop + 1, STORY_STOPS.length - 1)];
  // Overlay selected scene changes so their illustrations can animate inside a
  // stationary viewport instead of moving the whole background.
  const characterCut = from !== to && from >= 1 && to <= 3;
  const cut = characterCut;
  const scenePosition = cut ? from : from + (to - from) * fraction;
  const smoothFraction = fraction * fraction * (3 - 2 * fraction);
  const smoothstep = (value: number) => value * value * (3 - 2 * value);
  const cardProgress = Math.max(0, Math.min(1, (position - 16) / 2));
  const yellowExitProgress = Math.max(0, Math.min(1, cardProgress * 2));
  const resultTextProgress = Math.max(
    0,
    Math.min(1, (cardProgress - 0.5) / 0.25),
  );
  const resultEntryProgress = Math.max(
    0,
    Math.min(1, (cardProgress - 0.65) / 0.35),
  );
  const reveal = (start: number) =>
    Math.max(0, Math.min(1, (position - start) / 0.35));
  const nextSceneStop = STORY_STOPS.findIndex(
    (value, index) => index > position && value > scenePosition,
  );
  return {
    stop,
    page: Math.round(scenePosition),
    scenePosition,
    crossfade: cut ? { incoming: to, opacity: smoothFraction } : null,
    cardTransition: {
      yellowExit: smoothstep(yellowExitProgress),
      resultTextEntry: smoothstep(resultTextProgress),
      resultEntry: smoothstep(resultEntryProgress),
    },
    sportsText: reveal(6.05),
    sportsArt: reveal(6.5),
    sportsFrame: Math.max(0, Math.min(1, position - 7)),
    rehabText: reveal(9.05),
    rehabArt: reveal(9.5),
    rehabFrame: Math.max(0, Math.min(2, position - 10)),
    hydrogelInjection: Math.max(0, Math.min(1, (position - 13) / 0.9)),
    nestTitle: reveal(19.1),
    burdenStage: position < 3 ? 0 : position < 4 ? 1 : 2,
    // Crossfade to the more painful pose during the latter half of this scene.
    burdenPain: Math.max(0, Math.min(1, position - 3.35)),
    // Finish counting at 4.75, hold the full number, then crossfade at 5.
    burdenProgress: Math.max(0, Math.min(1, (position - 4) / 0.75)),
    // Spread the flight across both stationary bird-scene intervals.
    birdProgress: Math.max(0, Math.min(1, (position - 20) / 2)),
    birdStage: position < 21 ? 0 : position < 22 ? 1 : 2,
    birdLandingProgress: Math.max(0, Math.min(1, (position - 22) / 0.85)),
    pipelineProgress: Math.max(0, Math.min(3, position - 24)),
    nextScene: () => seek(nextSceneStop >= 0 ? nextSceneStop : position + 1),
    next: () => seek(Math.floor(position + 0.001) + 1),
    previous: () => seek(Math.ceil(position - 0.001) - 1),
  };
}
