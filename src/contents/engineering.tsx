/**
 * Engineering page — composed from per-module components in `./engineering/`:
 *
 *   AnisotropyModule            Anisotropy module: cartilage mechanics background, three DBTL
 *                               phases and summary
 *   ExtraModules                Stub modules (Magnetically Responsive Anisotropy, GAG retention)
 *   MitochondrialModule         Mitochondrial therapeutic module (carrier construction, delivery
 *                               validation, cellular evaluation)
 *   ScaffoldAndLinkers          Scaffold & linkers — hydrogel scaffold cycles 1–4
 *   LigationSystemEngineering   Ligation system cycles 1–2 and SnoopLigase2 rational design
 *   EngineeringReferences       References (cartilage anisotropy, nanoparticle-binding peptides)
 */
import { AnisotropyModule } from "./engineering/AnisotropyModule";
import { ExtraModules } from "./engineering/ExtraModules";
import { MitochondrialModule } from "./engineering/MitochondrialModule";
import { ScaffoldAndLinkers } from "./engineering/ScaffoldAndLinkers";
import { LigationSystemEngineering } from "./engineering/LigationSystemEngineering";
import { EngineeringReferences } from "./engineering/EngineeringReferences";

export function Engineering() {
  return (
    <div className="row mt-4 mb-5">
      <div className="col-lg-10 mx-auto">
        <article>
          <AnisotropyModule />
          <ExtraModules />
          <MitochondrialModule />
          <ScaffoldAndLinkers />
          <LigationSystemEngineering />
          <EngineeringReferences />
        </article>
      </div>
    </div>
  );
}
