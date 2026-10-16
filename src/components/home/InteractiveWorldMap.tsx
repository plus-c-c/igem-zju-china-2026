import {
  type FocusEvent,
  type PointerEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { worldMapData } from "./WorldMapData";

type MapTooltip = {
  country: string;
  count: number | null;
  left?: number;
  right?: number;
  top: number;
};

const numberFormatter = new Intl.NumberFormat("en-US");

function findCountry(target: EventTarget | null) {
  return target instanceof Element
    ? target.closest<SVGGraphicsElement>(".country")
    : null;
}

export function InteractiveWorldMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [worldMapMarkup, setWorldMapMarkup] = useState("");
  const [tooltip, setTooltip] = useState<MapTooltip | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    fetch(
      "https://static.igem.wiki/teams/6102/wiki/images/home/world-map.svg",
      {
        signal: controller.signal,
      },
    )
      .then((response) => {
        if (!response.ok) throw new Error("Unable to load the world map");
        return response.text();
      })
      .then(setWorldMapMarkup)
      .catch((error: unknown) => {
        if (!(error instanceof DOMException && error.name === "AbortError")) {
          console.error(error);
        }
      });

    return () => controller.abort();
  }, []);

  function showTooltip(
    countryElement: SVGGraphicsElement,
    clientX: number,
    clientY: number,
  ) {
    const map = mapRef.current;
    if (!map) return;

    const bounds = map.getBoundingClientRect();
    const scaleX = map.offsetWidth / bounds.width;
    const scaleY = map.offsetHeight / bounds.height;
    const pointerX = (clientX - bounds.left) * scaleX;
    const top = (clientY - bounds.top) * scaleY - 48;
    const iso = countryElement.dataset.iso ?? "";
    const record = worldMapData[iso];

    setTooltip({
      country: record?.country ?? countryElement.dataset.name ?? iso,
      count: record?.mapCount ?? null,
      ...(pointerX > map.offsetWidth / 2
        ? { right: Math.max(8, map.offsetWidth - pointerX + 12) }
        : { left: Math.max(8, pointerX + 12) }),
      top: Math.max(8, Math.min(top, map.offsetHeight - 62)),
    });
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType === "touch") return;

    const country = findCountry(event.target);
    if (country) showTooltip(country, event.clientX, event.clientY);
    else setTooltip(null);
  }

  function handleFocus(event: FocusEvent<HTMLDivElement>) {
    const country = findCountry(event.target);
    if (!country) return;

    const bounds = country.getBoundingClientRect();
    showTooltip(
      country,
      bounds.left + bounds.width / 2,
      bounds.top + bounds.height / 2,
    );
  }

  return (
    <div
      aria-label="Interactive world map of osteoarthritis patient counts"
      className="opening-burden__world"
      onBlurCapture={() => setTooltip(null)}
      onFocusCapture={handleFocus}
      onPointerLeave={() => setTooltip(null)}
      onPointerMove={handlePointerMove}
      ref={mapRef}
      role="img"
    >
      <div
        className="opening-burden__world-svg"
        dangerouslySetInnerHTML={{ __html: worldMapMarkup }}
      />
      {tooltip && (
        <div
          className="opening-burden__map-tip"
          role="status"
          style={{
            left: tooltip.left,
            right: tooltip.right,
            top: tooltip.top,
          }}
        >
          <strong>{tooltip.country}</strong>
          <span>
            {tooltip.count === null
              ? "No included data"
              : `${numberFormatter.format(tooltip.count)} people living with osteoarthritis`}
          </span>
        </div>
      )}
    </div>
  );
}
