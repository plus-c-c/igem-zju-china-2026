/**
 * Model page — composed from per-module components in `./model/`:
 *
 *   ProteinModeling                    2KY10-SnoopyTag hydrogel modeling (FAMD, Martini CG,
 *                                      crosslinked network, production simulations)
 *   SnoopLigaseDesign                  Rational engineering of SnoopLigase2
 *   DbtlCycles                         DBTL cycles for protein hydrogel modeling
 *   MagneticPoroelasticityFundamentals Framework and sections 1–6 (assumptions, SELP matrix,
 *                                      magnetic field terms, fiber orientation energy, free particles)
 *   MagneticPoroelasticityMechanics    Sections 7–10 (poroelastic coupling, photocrosslinking,
 *                                      total free energy, FE governing equations)
 *   ModelReferences                    References (protein modeling & SnoopLigase design;
 *                                      poroelasticity model), with citation anchors
 */
import { ProteinModeling } from "./model/ProteinModeling";
import { SnoopLigaseDesign } from "./model/SnoopLigaseDesign";
import { DbtlCycles } from "./model/DbtlCycles";
import { MagneticPoroelasticityFundamentals } from "./model/MagneticPoroelasticityFundamentals";
import { MagneticPoroelasticityMechanics } from "./model/MagneticPoroelasticityMechanics";
import { ModelReferences } from "./model/ModelReferences";

export function Model() {
  return (
    <div className="row mt-4 mb-5">
      <div className="col-lg-10 mx-auto">
        <article>
          <ProteinModeling />
          <SnoopLigaseDesign />
          <DbtlCycles />
          <MagneticPoroelasticityFundamentals />
          <MagneticPoroelasticityMechanics />
          <ModelReferences />
        </article>
      </div>
    </div>
  );
}
