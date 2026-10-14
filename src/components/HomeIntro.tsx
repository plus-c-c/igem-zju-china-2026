import { useEffect, useRef, useState } from "react";
import "./HomeIntro.css";

const remoteVideo =
  "https://static.igem.wiki/teams/6102/wiki/videos/homepage.mp4";
const localVideo = `${import.meta.env.BASE_URL}videos/homepage.mp4`;

type HomeIntroProps = {
  onEnter: () => void;
};

export function HomeIntro({ onEnter }: HomeIntroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoSource, setVideoSource] = useState(remoteVideo);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playback = video.play();
    if (playback) {
      void playback.catch(() => setFinished(true));
    }
  }, [videoSource]);

  const enterHomepage = () => {
    if (finished) onEnter();
  };

  return (
    <div
      className={`home-intro${finished ? " home-intro--ready" : ""}`}
      role="button"
      tabIndex={finished ? 0 : -1}
      aria-label={finished ? "Enter homepage" : "Homepage animation playing"}
      onClick={enterHomepage}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") enterHomepage();
      }}
    >
      <video
        ref={videoRef}
        className="home-intro__video"
        src={videoSource}
        autoPlay
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
        controlsList="nodownload nofullscreen noremoteplayback"
        onEnded={() => setFinished(true)}
        onError={() => {
          if (videoSource !== localVideo) {
            setVideoSource(localVideo);
          } else {
            setFinished(true);
          }
        }}
      />
    </div>
  );
}
