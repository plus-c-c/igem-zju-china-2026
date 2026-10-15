/**
 * Software page — composed from per-module components in `./software/`:
 *
 *   EngineeringChapter  Engineering chapter: DBTL cycles of both tools
 *   SoftwareOverview    Overview and background (software as a workflow problem)
 *   SoftwareIUsage      Software I usage (dashboard, parameters, control, results)
 *   SoftwareIIUsage     Software II usage (ordering, injection)
 *   CrossCutting        Data safety, performance optimization, resource & accessibility
 *   SoftwareReferences  Literature references for both software tools
 */
import { EngineeringChapter } from "./software/EngineeringChapter";
import { SoftwareOverview } from "./software/SoftwareOverview";
import { SoftwareIUsage } from "./software/SoftwareIUsage";
import { SoftwareIIUsage } from "./software/SoftwareIIUsage";
import { CrossCutting } from "./software/CrossCutting";
import { SoftwareReferences } from "./software/SoftwareReferences";

export function Software() {
  return (
    <div className="row mt-4 mb-5">
      <div className="col-lg-10 mx-auto">
        <article>
          <EngineeringChapter />
          <SoftwareOverview />
          <SoftwareIUsage />
          <SoftwareIIUsage />
          <CrossCutting />
          <SoftwareReferences />
        </article>
      </div>
    </div>
  );
}
