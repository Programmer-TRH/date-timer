import FilterOptions from "@/components/shared/filter-options";
import ProfessionalGrid from "@/components/shared/professional-grid";
import { Spinner } from "@/components/ui/spinner";
import { Suspense } from "react";

export function ProfessionalsSection() {
  return (
    <section className="section-spacing bg-gray-50">
      <div className="wrapper">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64 shrink-0">
            <div className="bg-white rounded-xl p-4 shadow-sm sticky top-24">
              <h3 className="font-semibold mb-4">Filter By</h3>
              <FilterOptions />
            </div>
          </aside>

          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              Top professionals for Birthday Decorations
            </h2>
            <Suspense fallback={<Spinner />}>
              <ProfessionalGrid />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
}
