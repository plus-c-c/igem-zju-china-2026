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

export function MaterialPipelineStory({ progress }: { progress: number }) {
  return (
    <div
      className="material-pipeline-story"
      style={{ transform: `translateY(${-720 * progress}px)` }}
    >
      <div className="material-pipeline-segment">
        <MaterialsAndSelp />
      </div>
      <div className="material-pipeline-segment">
        <MagneticAlignment />
      </div>
      <div className="material-pipeline-segment">
        <HydrogelFormation />
      </div>
      <div className="material-pipeline-segment">
        <LiposomeLoading />
      </div>
    </div>
  );
}
