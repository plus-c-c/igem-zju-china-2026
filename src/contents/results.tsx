/**
 * Results page — composed from per-module components in `./results/`:
 *
 *   ScaffoldResults        Hydrogel scaffold results (PRe-RDL plasmid design, 2KY-5/2KY-10
 *                          expression & purification, photocrosslinking, safety assessment)
 *   LigationSystemResults  Ligation system results
 *   ShortPeptideResults    Short-peptide result stubs (MRAM, GAG retention)
 *   MitochondrialResults   Mitochondrial therapeutic module results
 */
import { ScaffoldResults } from "./results/ScaffoldResults";
import { LigationSystemResults } from "./results/LigationSystemResults";
import { ShortPeptideResults } from "./results/ShortPeptideResults";
import { MitochondrialResults } from "./results/MitochondrialResults";

export function Results() {
  return (
    <div className="row mt-4 mb-5">
      <div className="col-lg-10 mx-auto">
        <article>
          <ScaffoldResults />
          <LigationSystemResults />
          <ShortPeptideResults />
          <MitochondrialResults />
        </article>
      </div>
    </div>
  );
}
