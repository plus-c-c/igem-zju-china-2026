import scaffoldPdf from "../assets/notebook/scaffold-ligation-system.pdf?url";
import mitochondriaPdf from "../assets/notebook/mitochondrial-therapy.pdf?url";
import gagPdf from "../assets/notebook/gag-retention.pdf?url";
import magneticPdf from "../assets/notebook/tvn-magnetic-binding.pdf?url";
import "./notebook.css";

const notebooks = [
  {
    id: "scaffold-ligation",
    title: "SELP Hydrogels and Ligation System",
    pdf: scaffoldPdf,
  },
  {
    id: "mitochondrial-therapy",
    title: "Mitochondrial Therapy Module",
    pdf: mitochondriaPdf,
  },
  {
    id: "gag-retention",
    title: "GAG Retention Module",
    pdf: gagPdf,
  },
  {
    id: "tvn-magnetic-binding",
    title: "TVN Magnetic Binding Module",
    pdf: magneticPdf,
  },
];

export function Notebook() {
  return (
    <div className="row mt-4 mb-5">
      <div className="col-lg-10 mx-auto notebook-page">
        {notebooks.map((notebook) => (
          <section
            key={notebook.id}
            aria-labelledby={notebook.id}
            className="mt-5"
          >
            <h2 id={notebook.id} className="mb-4">
              {notebook.title}
            </h2>
            <iframe
              className="notebook-pdf"
              src={notebook.pdf}
              title={`${notebook.title} — 2026 laboratory notebook`}
              loading="lazy"
            />
          </section>
        ))}
      </div>
    </div>
  );
}
